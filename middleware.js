import { NextResponse } from 'next/server'

export function middleware(request) {
  const pathname = request.nextUrl.pathname

  // Covers both with and without trailing slash automatically
  if (
    pathname.startsWith('/_faq') ||
    pathname.startsWith('/_services/magni')
  ) {
    return new NextResponse(null, { status: 410 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)']
}