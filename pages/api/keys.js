export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    });
  } else {
    res.status(405).end('method not allowed');
  }
}
