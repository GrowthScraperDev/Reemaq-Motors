import { NextResponse } from 'next/server'

export function middleware(request) {
  const url = request.nextUrl.pathname

  const goneUrls = [
    '/_faq',
    '/_services/magni'
  ]

  if (goneUrls.includes(url)) {
    return new NextResponse('Gone', { status: 410 })
  }

  return NextResponse.next()
}