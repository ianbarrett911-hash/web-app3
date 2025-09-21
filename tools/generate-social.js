#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { articles } from '../src/data/articles.js';
import { weeklyPosts } from '../src/data/weeklyArchive.js';

const siteUrl = process.env.SITE_URL || 'https://humanity-society-ai.com';
const outDir = path.join(__dirname, '..', 'public', 'social');

function ensureDir(d) { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); }

function firstSentence(text = '', max = 120) {
  const s = String(text).replace(/\s+/g, ' ').trim();
  let end = s.search(/[.!?]/);
  let snippet = end > 0 ? s.slice(0, end + 1) : s;
  if (snippet.length > max) snippet = snippet.slice(0, max - 1) + '…';
  return snippet;
}

function hashtagsForCategory(cat = '') {
  const map = {
    'AI': ['#AI', '#ArtificialIntelligence', '#Tech'],
    'Ethics': ['#AIEthics', '#ResponsibleAI', '#TechPolicy'],
    'Work': ['#FutureOfWork', '#AIatWork', '#Productivity'],
    'Superintelligence': ['#AGI', '#Superintelligence', '#AI']
  };
  return map[cat] || ['#AI', '#Tech'];
}

function maybeAddContextTags(title = '', existing = []) {
  const t = title.toLowerCase();
  const add = [];
  if (/health|medical|clinic|patient|care|hospital/.test(t)) add.push('#AIinHealthcare', '#MedTech');
  if (/education|school|teacher|students|learning/.test(t)) add.push('#EdTech', '#AIinEducation');
  if (/policy|government|public|election|democracy/.test(t)) add.push('#PublicPolicy', '#GovTech');
  const merged = Array.from(new Set([...existing, ...add]));
  return merged.slice(0, 6); // cap hashtags to keep room
}

function composeTweet(title, hook, url, tags) {
  const base = `${title} — ${hook}`;
  const hash = tags.join(' ');
  let tweet = `${base} ${url} ${hash}`.trim();
  // Trim if exceeds 280
  const max = 280;
  if (tweet.length > max) {
    // Try trimming hook first
    const spare = max - (title.length + 1 + url.length + 1 + hash.length + 2); // account for separators
    const shortHook = spare > 0 ? (hook.slice(0, Math.max(0, spare)).replace(/\s+\S*$/, '') + (spare < hook.length ? '…' : '')) : '';
    tweet = `${title} — ${shortHook}`.trim();
    tweet = [tweet, url, hash].filter(Boolean).join(' ');
  }
  // If still long, drop some hashtags from the end
  while (tweet.length > max && tags.length > 0) {
    tags.pop();
    const hash2 = tags.join(' ');
    tweet = `${title} — ${hook} ${url} ${hash2}`.trim();
  }
  // Final hard trim if necessary
  if (tweet.length > max) tweet = tweet.slice(0, max - 1) + '…';
  return tweet;
}

function writeOutputs(kind, idx, tweet, link, image) {
  ensureDir(outDir);
  const base = path.join(outDir, `${kind}-${idx}`);
  fs.writeFileSync(base + '.txt', tweet + '\n', 'utf8');
  fs.writeFileSync(base + '.json', JSON.stringify({ tweet, link, image }, null, 2), 'utf8');
}

function main() {
  ensureDir(outDir);

  // Articles
  articles.forEach((a, i) => {
    const link = `${siteUrl}/article/${i}?utm_source=twitter&utm_medium=social&utm_campaign=article_${i}`;
    const img = `${siteUrl}/og/article-${i}.png`;
    const tags = maybeAddContextTags(a.title, hashtagsForCategory(a.category));
    const hook = firstSentence(a.summary || a.title, 110);
    const tweet = composeTweet(a.title, hook, link, [...tags]);
    writeOutputs('article', i, tweet, link, img);
  });

  // Weekly posts
  weeklyPosts.forEach((p, i) => {
    const seg = p.slug ? p.slug : String(i);
    const link = `${siteUrl}/weekly/${seg}?utm_source=twitter&utm_medium=social&utm_campaign=weekly_${i}`;
    const img = `${siteUrl}/og/weekly-${i}.png`;
    const baseTags = ['#AI', '#AIWeekly', '#AIInsights'];
    const tags = maybeAddContextTags(p.title, baseTags);
    const hook = firstSentence(p.summary || p.title, 110);
    const tweet = composeTweet(p.title, hook, link, [...tags]);
    writeOutputs('weekly', i, tweet, link, img);
  });

  console.log(`Wrote social copy to ${outDir}`);
}

main();
