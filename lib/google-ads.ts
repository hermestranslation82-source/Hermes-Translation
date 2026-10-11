export interface GoogleAdsCredentials {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
  customerId: string;
  developerToken?: string;
}

export function getStoredCredentials(): GoogleAdsCredentials {
  return {
    clientId: process.env.GOOGLE_ADS_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_ADS_CLIENT_SECRET || '',
    refreshToken: process.env.GOOGLE_ADS_REFRESH_TOKEN || '',
    customerId: process.env.GOOGLE_ADS_CUSTOMER_ID || '',
    developerToken: process.env.GOOGLE_ADS_DEVELOPER_TOKEN || '',
  };
}

export async function fetchAccessToken(): Promise<{ access_token?: string; error?: string }> {
  const creds = getStoredCredentials();
  if (!creds.clientId || !creds.clientSecret || !creds.refreshToken) {
    return { error: 'Missing OAuth credentials in environment variables' };
  }

  try {
    const res = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: creds.clientId,
        client_secret: creds.clientSecret,
        refresh_token: creds.refreshToken,
        grant_type: 'refresh_token',
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      return { error: data.error_description || data.error || 'Failed to obtain access token' };
    }
    return { access_token: data.access_token };
  } catch (err: any) {
    return { error: err.message || 'Network error fetching access token' };
  }
}
