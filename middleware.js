import { NextResponse } from 'next/server'

const redirects = {
  '/blog/how-zinc-flake-coating-reduced-fastener-failures/': '/case-studies/how-zinc-flake-coating-reduced-fastener-failures/',
  '/blog/how-remaq-eliminated-hydrogen-embrittlement-risks/': '/case-studies/how-remaq-eliminated-hydrogen-embrittlement-risks/',
  '/blog/how-remaq-improved-fastener-life-in-high-humidity/': '/case-studies/how-remaq-improved-fastener-life-in-high-humidity/',
  '/blog/how-remaq-improved-corrosion-resistance-for-ashok-leyland/': '/case-studies/how-remaq-improved-corrosion-resistance-for-ashok-leyland/',
  '/blog/how-remaq-improved-oem-compliance-with-coatings/': '/case-studies/how-remaq-improved-oem-compliance-with-coatings/',
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname

  // 410 Gone
  if (
    pathname.startsWith('/_faq') ||
    pathname.startsWith('/_services/magni')
  ) {
    return new NextResponse(null, { status: 410 })
  }

  // 301 Redirects
  if (redirects[pathname]) {
    return NextResponse.redirect(
      new URL(redirects[pathname], request.url),
      301
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'],
}