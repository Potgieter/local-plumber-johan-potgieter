// middleware.js
import { NextResponse } from 'next/server';

// This function runs on every request to your site
export function middleware(request) {
  // Try to get the real IP address (Vercel proxies requests)
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip');

  // --- ADD BLOCKED IPs HERE ---
  const blockedIPs = [
    // Example: "192.168.1.1", 
    // "123.45.67.89"
  ];
  // ----------------------------

  // Check if the visitor's IP is in the blocked list
  if (ip && blockedIPs.includes(ip)) {
    // Return a 403 Forbidden page
    return new NextResponse('Access Denied: You have been blocked.', { status: 403 });
  }

  // If not blocked, continue to the website normally
  return NextResponse.next();
}

// Configure which paths this middleware runs on
export const config = {
  matcher: '/',
};
