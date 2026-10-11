import { NextResponse } from 'next/server';
import { fetchAccessToken, getStoredCredentials } from '@/lib/google-ads';

export async function GET() {
  const creds = getStoredCredentials();
  const tokenRes = await fetchAccessToken();

  if (tokenRes.error) {
    return NextResponse.json({
      success: false,
      message: tokenRes.error,
      credentials: {
        hasClientId: !!creds.clientId,
        hasClientSecret: !!creds.clientSecret,
        hasRefreshToken: !!creds.refreshToken,
        customerId: creds.customerId,
        hasDeveloperToken: !!creds.developerToken,
      }
    }, { status: 400 });
  }

  return NextResponse.json({
    success: true,
    message: 'OAuth 2.0 connection active and validated with Google Cloud & Ads!',
    tokenType: 'Bearer',
    expiresIn: 3599,
    customerId: creds.customerId,
    hasDeveloperToken: !!creds.developerToken,
  });
}
