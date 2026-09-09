export type ContactFormPayload = {
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

function asTrimmedString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

export function parseContactFormPayload(input: unknown): ContactFormPayload | null {
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

export async function sendContactEmail(payload: ContactFormPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || 'info@thomasdentalflorida.com';

  if (!apiKey || !from) {
    throw new Error('Resend email configuration is missing');
  }

  const response = await fetch('https://api.resend.com/emails', {
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