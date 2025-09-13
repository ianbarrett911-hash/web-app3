const express = require('express');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.text({ type: 'text/html', limit: '5mb' }));
app.use(bodyParser.json({ limit: '5mb' }));

app.post('/api/pdf', async (req, res) => {
  try {
    const html = req.body.html || req.body;
    if (!html) return res.status(400).send('Missing HTML payload');

    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });
    await browser.close();

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="cv.pdf"',
      'Content-Length': pdfBuffer.length
    });
    res.send(pdfBuffer);
  } catch (err) {
    console.error('PDF generation error', err);
    res.status(500).send('PDF generation failed');
  }
});

// Note: server-side .docx generation removed in favor of client-side export (privacy-first)

app.listen(port, () => {
  console.log(`CV PDF server listening on http://localhost:${port}`);
});
