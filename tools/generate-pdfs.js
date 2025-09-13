const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
  const outDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const browser = await puppeteer.launch({ headless: true });
  try {
    const pages = [
      { src: 'teacher-toolkit-intro-ai.html', out: 'teacher-toolkit-intro-ai.pdf' },
      { src: 'teacher-toolkit-early-years.html', out: 'teacher-toolkit-early-years.pdf' }
    ];

    for (const p of pages) {
      const page = await browser.newPage();
      const url = 'file://' + path.join(__dirname, '..', 'public', p.src);
      await page.goto(url, { waitUntil: 'networkidle0' });
      const pdfPath = path.join(outDir, p.out);
      await page.pdf({ path: pdfPath, format: 'A4', printBackground: true, margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' } });
      console.log('Generated PDF at', pdfPath);
      await page.close();
    }
    // Generate simple metadata by counting '/Type /Page' occurrences in the PDF binary as a heuristic for page count
    const metadata = {};
    for (const p of pages) {
      const pdfPath = path.join(outDir, p.out);
      if (fs.existsSync(pdfPath)) {
        const buf = fs.readFileSync(pdfPath);
        const matches = buf.toString('latin1').match(/\/Type\s*\/Page/g);
        const count = matches ? matches.length : null;
        metadata[p.out] = { pages: count };
      } else {
        metadata[p.out] = { pages: null };
      }
    }
    const metaPath = path.join(outDir, 'teacher-toolkit-metadata.json');
    fs.writeFileSync(metaPath, JSON.stringify(metadata, null, 2));
    console.log('Wrote metadata at', metaPath);
  } catch (err) {
    console.error('Failed to generate PDFs', err);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
})();
