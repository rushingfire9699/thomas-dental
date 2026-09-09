type ContactFormPayload = {
  name: string;
  phone: string;
  email: string;
  preferredContact: 'Phone' | 'Email' | 'Text';
  concern: string;
};

const preferredContactMethods = new Set<ContactFormPayload['preferredContact']>([
  'Phone',
  'Email',
  'Text',
]);

type RuntimeFetch = (
  input: string,
  init?: {
    method?: string;
    headers?: Record<string, string>;
    body?: string;
  },
) => Promise<{
  ok: boolean;
  status: number;
}>;

function asTrimmedString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function parseContactFormPayload(input: unknown): ContactFormPayload | null {
  if (!input || typeof input !== 'object') {
    return null;
  }

  const record = input as Record<string, unknown>;
  const name = asTrimmedString(record.name);
  const phone = asTrimmedString(record.phone);
  const email = asTrimmedString(record.email);
  const preferredContact = asTrimmedString(record.preferredContact);
  const concern = asTrimmedString(record.concern);

  if (
    !name ||
    !phone ||
    !email ||
    !concern ||
    !preferredContactMethods.has(preferredContact as ContactFormPayload['preferredContact']) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return null;
  }

  return {
    name,
    phone,
    email,
    preferredContact: preferredContact as ContactFormPayload['preferredContact'],
    concern,
  };
}

async function sendContactEmail(payload: ContactFormPayload) {
  const runtime = globalThis as typeof globalThis & {
    process?: { env?: Record<string, string | undefined> };
    fetch?: RuntimeFetch;
  };
  const env = runtime.process?.env ?? {};
  const apiKey = env.RESEND_API_KEY;
  const from = env.RESEND_FROM_EMAIL;
  const to = env.CONTACT_TO_EMAIL || 'info@thomasdentalflorida.com';
  const fetcher = runtime.fetch;

  if (!apiKey || !from || !fetcher) {
    throw new Error('Resend email configuration is missing');
  }

  const response = await fetcher('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject: `New patient message from ${payload.name}`,
      text: [
        `Name: ${payload.name}`,
        `Phone: ${payload.phone}`,
        `Email: ${payload.email}`,
        `Preferred contact method: ${payload.preferredContact}`,
        '',
        'Concern or question:',
        payload.concern,
      ].join('\n'),
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend request failed with status ${response.status}`);
  }
}

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
  } catch {
    res.status(500).json({ error: 'We could not send your message right now.' });
  }
}