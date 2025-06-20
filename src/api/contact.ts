export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, phone, message, token } = req.body;

  if (!token || !name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  try {
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
      return res.status(500).json({ success: false, message: 'reCAPTCHA secret key not configured' });
    }
    if (!token) {
      return res.status(400).json({ success: false, message: 'Missing reCAPTCHA token' });
    }
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
    });

    const data = await response.json();

    if (!data.success) {
      return res.status(400).json({ success: false, message: 'reCAPTCHA failed' });
    }

    if (data.score < 0.5) {
      return res.status(400).json({ success: false, message: 'reCAPTCHA score too low', score: data.score });
    }

    const emailRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: process.env.EMAILJS_TEMPLATE_ID,
          user_id: process.env.EMAILJS_USER_ID,
          accessToken: process.env.EMAIL_JS_ACCESS_TOKEN,
          template_params: { name, email, phone, message },
        }),
      }
    );

    if (!emailRes.ok) {
      return res.status(500).json({ success: false, message: 'Email sending failed' });
    }

    return res.status(200).json({ success: true, score: data.score });
  } catch (error) {
    console.error("Error in contact API:", error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
}