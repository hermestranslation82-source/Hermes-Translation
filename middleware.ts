import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 1. Admin Basic Auth
  if (pathname.startsWith('/admin')) {
    const password = process.env.ADMIN_PASSWORD;
    if (!password) return NextResponse.next();

    const authorization = request.headers.get('authorization');
    const expected = `Basic ${btoa(`admin:${password}`)}`;
    if (authorization !== expected) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Hermes Admin"' }
      });
    }

    return NextResponse.next();
  }

  // 2. Locale Redirect
  const hasLocale = pathname.startsWith('/ar') || pathname.startsWith('/en');
  const isInternal = pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.');
  
  if (!hasLocale && !isInternal) {
    return NextResponse.redirect(new URL(`/ar${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)']
};
