export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, email, phone, message, token } = req.body;

  if (!token || !name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  // 1. Verify reCAPTCHA
  const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  });

  const verifyData = await verifyRes.json();

  if (!verifyData.success || verifyData.score < 0.5) {
    return res.status(400).json({ success: false, message: 'reCAPTCHA validation failed' });
  }

  // 2. Send email using EmailJS REST API
  const emailRes = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_USER_ID,
      accessToken: process.env.EMAILJS_PRIVATE_KEY,
      template_params: {
        name,
        email,
        phone,
        message,
      },
    }),
  });

  if (!emailRes.ok) {
    return res.status(500).json({ success: false, message: 'Failed to send email' });
  }

  return res.status(200).json({ success: true });
}
