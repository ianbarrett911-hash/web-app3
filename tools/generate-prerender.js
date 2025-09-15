#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { articles } from '../src/data/articles.js';
import { weeklyPosts } from '../src/data/weeklyArchive.js';

const siteUrl = process.env.SITE_URL || 'https://humanity-society-ai.com';
const publicDir = path.join(__dirname, '..', 'public');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildHtml({ title, description, url, datePublished, image }) {
  const safeTitle = escapeHtml(title || 'Humanity, Society and AI');
  const safeDesc = escapeHtml(description || 'Articles, insights and resources on AI\'s impact on people, work, and society.');
  const ogImage = image || `${siteUrl}/assets/logos/mainlogo.png`;
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    mainEntityOfPage: url,
    ...(datePublished ? { datePublished } : {}),
    publisher: {
      '@type': 'Organization',
      name: 'Humanity, Society and AI',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/assets/logos/mainlogo.png`
      }
    }
  };
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${safeTitle} | Humanity, Society and AI</title>
    <meta name="description" content="${safeDesc}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${safeTitle}" />
    <meta property="og:description" content="${safeDesc}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:site_name" content="Humanity, Society and AI" />
    <meta property="og:image" content="${ogImage}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${safeTitle}" />
    <meta name="twitter:description" content="${safeDesc}" />
    <meta name="twitter:image" content="${ogImage}" />
    <script type="application/ld+json">${JSON.stringify(articleLd)}</script>
  </head>
  <body>
    <noscript>
      <div style="padding:16px;font-family:system-ui,Segoe UI,Helvetica,Arial,sans-serif">
        <p><strong>${safeTitle}</strong></p>
        <p>${safeDesc}</p>
        <p><a href="${url}">Open this article</a> on Humanity, Society and AI.</p>
      </div>
    </noscript>
  </body>
 </html>`;
}

function writeHtml(filePath, html) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, html, 'utf8');
}

function generateArticles() {
  articles.forEach((a, idx) => {
    const url = `${siteUrl}/article/${idx}`;
    const html = buildHtml({
      title: a.title,
      description: a.summary,
      url,
      datePublished: undefined,
      image: a.image ? `${siteUrl}${a.image}` : undefined
    });
    const outDir = path.join(publicDir, 'article', String(idx));
    const outPath = path.join(outDir, 'index.html');
    writeHtml(outPath, html);
  });
}

function generateWeekly() {
  weeklyPosts.forEach((p, idx) => {
    const url = `${siteUrl}/weekly/${idx}`;
    const html = buildHtml({
      title: p.title,
      description: p.summary,
      url,
      datePublished: p.date,
      image: undefined
    });
    const outDir = path.join(publicDir, 'weekly', String(idx));
    const outPath = path.join(outDir, 'index.html');
    writeHtml(outPath, html);
  });
}

function main() {
  generateArticles();
  generateWeekly();
  console.log('Prerendered article and weekly routes into /public');
}

main();
