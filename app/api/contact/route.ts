import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const enquiriesPath = path.join(process.cwd(), 'data', 'enquiries.json');

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, type, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const enquiries = JSON.parse(fs.readFileSync(enquiriesPath, 'utf-8'));
    const newEnquiry = {
      id: Date.now(),
      name,
      email,
      phone: phone || '',
      type: type || 'General',
      message,
      status: 'new',
      createdAt: new Date().toISOString(),
    };
    enquiries.push(newEnquiry);
    fs.writeFileSync(enquiriesPath, JSON.stringify(enquiries, null, 2));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const enquiries = JSON.parse(fs.readFileSync(enquiriesPath, 'utf-8'));
    return NextResponse.json(enquiries);
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
