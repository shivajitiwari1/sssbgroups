import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const sitePath = path.join(process.cwd(), 'data', 'site.json');
const adminPath = path.join(process.cwd(), 'data', 'admin.json');

function isAuth(req: NextRequest): boolean {
  const token = req.cookies.get('admin_token')?.value;
  const admin = JSON.parse(fs.readFileSync(adminPath, 'utf-8'));
  return token === admin.sessionSecret;
}

export async function GET(req: NextRequest) {
  if (!isAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const section = req.nextUrl.searchParams.get('section');
  const site = JSON.parse(fs.readFileSync(sitePath, 'utf-8'));
  if (section) {
    return NextResponse.json(site[section] ?? null);
  }
  return NextResponse.json(site);
}

export async function PUT(req: NextRequest) {
  if (!isAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { section, data } = await req.json();
  if (!section) return NextResponse.json({ error: 'Missing section' }, { status: 400 });
  const site = JSON.parse(fs.readFileSync(sitePath, 'utf-8'));
  site[section] = data;
  fs.writeFileSync(sitePath, JSON.stringify(site, null, 2));
  return NextResponse.json({ success: true });
}
