import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from 'src/pages/api/auth/[...nextauth]';
import { getUserByUsername } from 'src/service/user';

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response('Authentication Error', { status: 401 });
  }
  return getUserByUsername(user.username).then((data) => NextResponse.json(data));
}
