#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import puppeteer from 'puppeteer';
import { articles } from '../src/data/articles.js';
import { weeklyPosts } from '../src/data/weeklyArchive.js';

const outDir = path.join(__dirname, '..', 'public', 'og');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function truncate(str = '', max = 90) {
  const s = String(str).trim();
  return s.length > max ? s.slice(0, max - 1) + '…' : s;
}

function ogHtml(title, subtitle) {
  const safeTitle = truncate(title, 110);
  const safeSubtitle = truncate(subtitle, 140);
  return `<!doctype html><html><head><meta charset="utf-8"/></head>
  <body style="margin:0">
    <div style="width:1200px;height:630px;display:flex;flex-direction:column;justify-content:center;align-items:center;background:linear-gradient(135deg,#0f172a,#1e3a8a);color:#fff;font-family:Inter,Segoe UI,Helvetica,Arial,sans-serif;">
      <div style="position:absolute;top:36px;left:48px;font-weight:800;font-size:28px;color:#f59e0b;">Humanity, Society and AI</div>
      <div style="max-width:980px;text-align:center;line-height:1.1;font-size:64px;font-weight:800;letter-spacing:-0.02em;">${safeTitle}</div>
      <div style="margin-top:16px;max-width:980px;text-align:center;opacity:.92;font-size:30px;">${safeSubtitle}</div>
      <div style="position:absolute;bottom:36px;right:48px;font-size:22px;opacity:.9;">humanity-society-ai.com</div>
    </div>
  </body></html>`;
}

async function generateAll() {
  ensureDir(outDir);
  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });

    // Articles
    for (let i = 0; i < articles.length; i++) {
      const a = articles[i];
      const html = ogHtml(a.title, a.summary || '');
      await page.setContent(html, { waitUntil: 'networkidle0' });
      const outPath = path.join(outDir, `article-${i}.png`);
      await page.screenshot({ path: outPath });
      console.log('OG image:', outPath);
    }

    // Weekly
    for (let i = 0; i < weeklyPosts.length; i++) {
      const p = weeklyPosts[i];
      const html = ogHtml(p.title, p.summary || 'Weekly AI Insights');
      await page.setContent(html, { waitUntil: 'networkidle0' });
      const outPath = path.join(outDir, `weekly-${i}.png`);
      await page.screenshot({ path: outPath });
      console.log('OG image:', outPath);
    }

    await page.close();
  } catch (err) {
    console.error('Failed to generate OG images:', err);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
}

generateAll();
