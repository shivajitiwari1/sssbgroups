import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const adminPath = path.join(process.cwd(), 'data', 'admin.json');

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('admin_token')?.value;
    const admin = JSON.parse(fs.readFileSync(adminPath, 'utf-8'));

    if (token === admin.sessionSecret) {
      return NextResponse.json({ authenticated: true });
    }

    return NextResponse.json({ authenticated: false }, { status: 401 });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
