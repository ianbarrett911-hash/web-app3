#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { weeklyPosts } from '../src/data/weeklyArchive.js';
import { weeklyBlog } from '../src/data/weeklyBlog.js';

const siteUrl = process.env.SITE_URL || 'https://humanity-society-ai.com';
const outDir = path.join(__dirname, '..', 'public');
const outPath = path.join(outDir, 'feed.xml');

function ensureDir(d) {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
}

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildItem({ title, link, description, pubDate }) {
  return `  <item>\n    <title>${escapeXml(title)}</title>\n    <link>${link}</link>\n    <guid>${link}</guid>\n    <pubDate>${new Date(pubDate).toUTCString()}</pubDate>\n    <description><![CDATA[${description}]]></description>\n  </item>\n`;
}

function generate() {
  ensureDir(outDir);
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  // Add XML stylesheet PI for human-friendly browser rendering
  xml += `<?xml-stylesheet type="text/xsl" href="/rss.xsl"?>\n`;
  xml += `<rss version="2.0">\n`;
  xml += `<channel>\n`;
  xml += `  <title>Humanity, Society and AI — Weekly Feed</title>\n`;
  xml += `  <link>${siteUrl}/</link>\n`;
  xml += `  <description>Articles, insights and resources on AI's impact on people, work, and society.</description>\n`;
  xml += `  <language>en</language>\n`;

  // Current weekly article as the latest item (link to homepage with anchor)
  const currentDesc = weeklyBlog.fullArticle || weeklyBlog.summary || '';
  xml += buildItem({
    title: weeklyBlog.title || 'This Week',
    link: `${siteUrl}/#weekly`,
    description: currentDesc,
    pubDate: new Date().toISOString(),
  });

  // Archive posts with stable SPA routes
  weeklyPosts.forEach((p, idx) => {
    const link = `${siteUrl}/weekly/${idx}`;
    const description = p.summary || '';
    xml += buildItem({ title: p.title, link, description, pubDate: p.date || new Date().toISOString() });
  });

  xml += `</channel>\n`;
  xml += `</rss>\n`;

  fs.writeFileSync(outPath, xml, 'utf8');
  console.log(`Wrote RSS feed with ${weeklyPosts.length + 1} items to ${outPath}`);
}

generate();
