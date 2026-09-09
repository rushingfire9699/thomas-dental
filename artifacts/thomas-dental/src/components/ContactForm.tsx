import { FormEvent, useState } from 'react';

type ContactFormValues = {
  name: string;
  phone: string;
  email: string;
  preferredContact: string;
  concern: string;
};

const initialValues: ContactFormValues = {
  name: '',
  phone: '',
  email: '',
  preferredContact: '',
  concern: '',
};

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [submissionState, setSubmissionState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  function updateField(field: keyof ContactFormValues, value: string) {
    setSubmissionState('idle');
    setErrorMessage('');
    setValues((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionState('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || 'We could not send your message right now.');
      }

      setSubmissionState('success');
      setValues(initialValues);
    } catch (error) {
      setSubmissionState('error');
      setErrorMessage(error instanceof Error ? error.message : 'We could not send your message right now.');
    }
  }

  const fieldClassName =
    'mt-2 w-full border border-aqua-200 bg-cream px-4 py-3 text-base text-navy-950 outline-none transition placeholder:text-navy-400 focus:border-aqua-500 focus:ring-2 focus:ring-aqua-200';
  const labelClassName = 'font-display text-xs font-bold uppercase tracking-[0.18em] text-navy-800';

  return (
    <section className="mb-16 bg-aqua-50 px-6 py-10 sm:px-10 sm:py-12">
      <div className="mb-8 max-w-2xl">
        <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.25em] text-aqua-700">
          Send us a note
        </p>
        <h2 className="font-display text-3xl font-bold uppercase tracking-wider text-navy-950 sm:text-4xl">
          Tell us what&apos;s on your mind
        </h2>
        <p className="mt-4 text-base font-light leading-relaxed text-navy-700">
          Share a little about what brings you in, and we&apos;ll help you find a comfortable next step. Every field is required.
        </p>
      </div>

      <form className="grid gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
        <label className={labelClassName}>
          Full name
          <input
            className={fieldClassName}
            type="text"
            name="name"
            value={values.name}
            onChange={(event) => updateField('name', event.target.value)}
            autoComplete="name"
            required
          />
        </label>

        <label className={labelClassName}>
          Phone number
          <input
            className={fieldClassName}
            type="tel"
            name="phone"
            value={values.phone}
            onChange={(event) => updateField('phone', event.target.value)}
            autoComplete="tel"
            required
          />
        </label>

        <label className={labelClassName}>
          Email address
          <input
            className={fieldClassName}
            type="email"
            name="email"
            value={values.email}
            onChange={(event) => updateField('email', event.target.value)}
            autoComplete="email"
            required
          />
        </label>

        <label className={labelClassName}>
          Preferred contact method
          <select
            className={fieldClassName}
            name="preferredContact"
            value={values.preferredContact}
            onChange={(event) => updateField('preferredContact', event.target.value)}
            required
          >
            <option value="" disabled>Select one</option>
            <option value="Phone">Phone</option>
            <option value="Email">Email</option>
            <option value="Text">Text</option>
          </select>
        </label>

        <label className={`${labelClassName} md:col-span-2`}>
          How can we help?
          <textarea
            className={`${fieldClassName} min-h-36 resize-y`}
            name="concern"
            value={values.concern}
            onChange={(event) => updateField('concern', event.target.value)}
            placeholder="Tell us what you would like to discuss."
            required
          />
        </label>

        <div className="flex flex-col items-start gap-4 md:col-span-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm font-light leading-relaxed text-navy-600">
            Your message will be sent directly to our team.
          </p>
          <button
            type="submit"
            disabled={submissionState === 'sending'}
            className="inline-flex shrink-0 bg-sunrise-400 px-8 py-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-navy-950 shadow-[4px_4px_0px_0px_rgba(11,25,44,1)] transition hover:translate-x-1 hover:translate-y-1 hover:bg-sunrise-300 hover:shadow-[2px_2px_0px_0px_rgba(11,25,44,1)]"
          >
            {submissionState === 'sending' ? 'Sending...' : 'Send My Message'}
          </button>
        </div>

        {submissionState === 'success' && (
          <p className="md:col-span-2 text-sm font-medium text-aqua-800" role="status" aria-live="polite">
            Thanks — your message has been sent. We&apos;ll be in touch soon.
          </p>
        )}

        {submissionState === 'error' && (
          <p className="md:col-span-2 text-sm font-medium text-red-700" role="alert">
            {errorMessage}
          </p>
        )}
      </form>
    </section>
  );
}