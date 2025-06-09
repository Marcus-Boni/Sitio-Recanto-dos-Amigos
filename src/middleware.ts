import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Performance and security headers
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');

  // Critical performance headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains'
  );

  // Optimized cache headers for different resource types
  const pathname = request.nextUrl.pathname;

  if (
    pathname.startsWith('/_next/static/media/') ||
    pathname.endsWith('.webp') ||
    pathname.endsWith('.avif')
  ) {
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
  } else if (pathname.startsWith('/_next/static/')) {
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
  } else if (pathname.endsWith('.js') || pathname.endsWith('.css')) {
    response.headers.set(
      'Cache-Control',
      'public, max-age=86400, stale-while-revalidate=604800'
    );
  } else if (pathname === '/' || pathname === '/index.html') {
    response.headers.set(
      'Cache-Control',
      'public, max-age=3600, stale-while-revalidate=86400'
    );
  }

  // Resource hints for better loading performance (only for homepage)
  if (pathname === '/') {
    response.headers.set(
      'Link',
      [
        '<https://fonts.googleapis.com>; rel=preconnect',
        '<https://fonts.gstatic.com>; rel=preconnect; crossorigin',
        '<https://maps.googleapis.com>; rel=preconnect'
      ].join(', ')
    );
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
