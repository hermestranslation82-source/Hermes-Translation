import nodemailer from 'nodemailer';

// Preferred: Resend (RESEND_API_KEY). Without a verified domain Resend only sends from onboarding@resend.dev
// to the Resend account owner's address, so set RESEND_FROM once hermes-certified.com is verified.
const resendApiKey = process.env.RESEND_API_KEY || '';
const resendFrom = process.env.RESEND_FROM || 'Hermes Website <onboarding@resend.dev>';

// Fallback: Gmail SMTP: GMAIL_USER + GMAIL_APP_PASSWORD (Google account App Password, not the normal password)
const gmailUser = process.env.GMAIL_USER || '';
const gmailAppPassword = (process.env.GMAIL_APP_PASSWORD || '').replace(/\s/g, '');
const leadsTo = process.env.LEADS_TO_EMAIL || 'hermestranslation82@gmail.com';

const transporter = gmailUser && gmailAppPassword
  ? nodemailer.createTransport({ service: 'gmail', auth: { user: gmailUser, pass: gmailAppPassword } })
  : null;

export const isMailerConfigured = () => Boolean(resendApiKey) || transporter !== null;

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

type Attachment = { filename: string; content: Buffer; contentType?: string };

export async function sendLeadEmail({
  subject,
  fields,
  replyTo,
  attachments = []
}: {
  subject: string;
  fields: Record<string, string>;
  replyTo?: string;
  attachments?: Attachment[];
}) {
  if (!resendApiKey && !transporter) {
    throw new Error('Mailer not configured: set RESEND_API_KEY (or GMAIL_USER and GMAIL_APP_PASSWORD)');
  }

  const rows = Object.entries(fields)
    .filter(([, value]) => value)
    .map(([label, value]) =>
      `<tr><td style="padding:6px 12px;font-weight:bold;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</td>` +
      `<td style="padding:6px 12px;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`
    )
    .join('');
  const text = Object.entries(fields)
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join('\n');

  const html = `<table dir="auto" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${rows}</table>`;
  const validReplyTo = replyTo && /\S+@\S+\.\S+/.test(replyTo) ? replyTo : undefined;

  if (resendApiKey) {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${resendApiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: resendFrom,
        to: [leadsTo],
        reply_to: validReplyTo,
        subject,
        text,
        html,
        attachments: attachments.map((a) => ({ filename: a.filename, content: a.content.toString('base64') }))
      })
    });
    if (!response.ok) {
      const error = new Error(`Resend send failed: ${response.status} ${await response.text()}`) as Error & { code?: string };
      if (response.status === 401 || response.status === 403) error.code = 'EAUTH';
      throw error;
    }
    return;
  }

  await transporter!.sendMail({
    from: `"Hermes Website" <${gmailUser}>`,
    to: leadsTo,
    replyTo: validReplyTo,
    subject,
    text,
    html,
    attachments
  });
}

// Non-secret reason for a failed send, safe to return to the client for diagnosis
export function mailErrorCode(error: unknown) {
  if (!resendApiKey && !transporter) return 'not_configured';
  if ((error as { code?: string })?.code === 'EAUTH') return 'auth_failed';
  return 'send_failed';
}
