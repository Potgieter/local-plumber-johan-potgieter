// api/log.js
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { ip, city, country, isp } = req.body;

  // LOGGING: This prints the visit details to your Vercel Dashboard
  // We will look for this in the next step
  console.log(`--- NEW VISITOR ---`);
  console.log(`IP: ${ip}`);
  console.log(`Location: ${city}, ${country}`);
  console.log(`ISP: ${isp}`);
  console.log(`-------------------`);

  // Respond to the browser
  res.status(200).json({ status: 'Logged' });
}
