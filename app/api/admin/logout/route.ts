import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const response = NextResponse.redirect(new URL('/admin/login', req.nextUrl.origin));
  response.cookies.delete('admin_token');
  return response;
}
