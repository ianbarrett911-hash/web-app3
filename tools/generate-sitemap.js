#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the articles data
import { articles } from '../src/data/articles.js';

const siteUrl = process.env.SITE_URL || 'https://your-site.com';
const outDir = path.join(__dirname, '..', 'public');
const outPath = path.join(outDir, 'sitemap.xml');

function ensureDir(d) {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
}

function buildUrl(tagUrl, priority = '0.80') {
  return `  <url>\n    <loc>${tagUrl}</loc>\n    <priority>${priority}</priority>\n  </url>\n`;
}

function generate() {
  ensureDir(outDir);
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // homepage
  xml += buildUrl(`${siteUrl}/`, '1.00');

  // static pages you want indexed (adjust paths as needed)
  const staticPages = ['/teacher-resources', '/employee-resources', '/ai-jobs'];
  staticPages.forEach(p => { xml += buildUrl(`${siteUrl}${p}`, '0.80'); });

  // articles by index-based route
  articles.forEach((a, idx) => {
    const loc = `${siteUrl}/article/${idx}`;
    xml += buildUrl(loc, '0.64');
  });

  xml += `</urlset>`;

  fs.writeFileSync(outPath, xml, 'utf8');
  console.log(`Wrote sitemap with ${articles.length} articles to ${outPath}`);
}

generate();
