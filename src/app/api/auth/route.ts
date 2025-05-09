import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const sessionStore = await cookies();
  const tokenCookie = sessionStore.get('session');

  if (!tokenCookie) {
    return NextResponse.json(false, { status: 401 });
  }

  return NextResponse.json(true, { status: 200 });
}
