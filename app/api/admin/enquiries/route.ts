import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const enquiriesPath = path.join(process.cwd(), 'data', 'enquiries.json');
const adminPath = path.join(process.cwd(), 'data', 'admin.json');

function isAuth(req: NextRequest): boolean {
  const token = req.cookies.get('admin_token')?.value;
  const admin = JSON.parse(fs.readFileSync(adminPath, 'utf-8'));
  return token === admin.sessionSecret;
}

export async function GET(req: NextRequest) {
  if (!isAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const enquiries = JSON.parse(fs.readFileSync(enquiriesPath, 'utf-8'));
  return NextResponse.json(enquiries);
}

export async function PATCH(req: NextRequest) {
  if (!isAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id, updates } = await req.json();
  const enquiries = JSON.parse(fs.readFileSync(enquiriesPath, 'utf-8'));
  const idx = enquiries.findIndex((e: { id: number }) => e.id === id);
  if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  enquiries[idx] = { ...enquiries[idx], ...updates };
  fs.writeFileSync(enquiriesPath, JSON.stringify(enquiries, null, 2));
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  if (!isAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id } = await req.json();
  const enquiries = JSON.parse(fs.readFileSync(enquiriesPath, 'utf-8'));
  const filtered = enquiries.filter((e: { id: number }) => e.id !== id);
  fs.writeFileSync(enquiriesPath, JSON.stringify(filtered, null, 2));
  return NextResponse.json({ success: true });
}
