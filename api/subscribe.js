// Vercel serverless function to subscribe a user to Buttondown (or similar)
// Requires env var BUTTONDOWN_API_KEY set in Vercel project settings

module.exports = async function handler(_req, res) {
  // Subscription feature removed; return 410 Gone to indicate endpoint is disabled
  res.status(410).json({ error: 'Subscription feature is currently disabled.' });
};
