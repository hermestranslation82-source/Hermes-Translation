import nodemailer from 'nodemailer';

// Gmail SMTP: GMAIL_USER + GMAIL_APP_PASSWORD (Google account App Password, not the normal password)
const gmailUser = process.env.GMAIL_USER || '';
const gmailAppPassword = (process.env.GMAIL_APP_PASSWORD || '').replace(/\s/g, '');
const leadsTo = process.env.LEADS_TO_EMAIL || 'hermestranslation82@gmail.com';

const transporter = gmailUser && gmailAppPassword
  ? nodemailer.createTransport({ service: 'gmail', auth: { user: gmailUser, pass: gmailAppPassword } })
  : null;

export const isMailerConfigured = () => transporter !== null;

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
  if (!transporter) {
    throw new Error('Mailer not configured: set GMAIL_USER and GMAIL_APP_PASSWORD');
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

  await transporter.sendMail({
    from: `"Hermes Website" <${gmailUser}>`,
    to: leadsTo,
    replyTo: replyTo && /\S+@\S+\.\S+/.test(replyTo) ? replyTo : undefined,
    subject,
    text,
    html: `<table dir="auto" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${rows}</table>`,
    attachments
  });
}

// Non-secret reason for a failed send, safe to return to the client for diagnosis
export function mailErrorCode(error: unknown) {
  if (!transporter) return 'not_configured';
  if ((error as { code?: string })?.code === 'EAUTH') return 'auth_failed';
  return 'send_failed';
}
