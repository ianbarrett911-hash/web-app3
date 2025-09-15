// This endpoint was intentionally removed. Leaving file as a stub prevents accidental 404-to-SPA rewrite.
export default function handler(_req, res) {
	return res.status(410).json({ error: 'Endpoint removed' });
}
