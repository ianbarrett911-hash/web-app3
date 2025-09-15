// Skip Puppeteer OG generation on Vercel/CI to avoid missing system deps
// When running locally, import the existing generator which executes at top-level
if (process.env.VERCEL || process.env.CI) {
  console.log('Skipping OG image generation on CI/Vercel environment.');
  process.exit(0);
}

import('./generate-og-images.js')
  .then(() => {
    // generator runs at top-level and logs its own output
  })
  .catch((err) => {
    console.error('Failed to generate OG images locally:', err);
    process.exit(1);
  });
