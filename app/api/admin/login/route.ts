import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const adminPath = path.join(process.cwd(), 'data', 'admin.json');

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();
    const admin = JSON.parse(fs.readFileSync(adminPath, 'utf-8'));

    if (username === admin.username && password === admin.password) {
      const response = NextResponse.json({ success: true });
      response.cookies.set('admin_token', admin.sessionSecret, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24,
        path: '/',
      });
      return response;
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
