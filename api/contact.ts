import {
  parseContactFormPayload,
  sendContactEmail,
} from '../artifacts/api-server/src/contact-email';

type VercelRequest = {
  method?: string;
  body?: unknown;
};

type VercelResponse = {
  status: (code: number) => VercelResponse;
  json: (body: unknown) => void;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const payload = parseContactFormPayload(req.body);
  if (!payload) {
    res.status(400).json({ error: 'Please complete every field with valid information.' });
    return;
  }

  try {
    await sendContactEmail(payload);
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Contact form submission failed', error);
    res.status(500).json({ error: 'We could not send your message right now.' });
  }
}