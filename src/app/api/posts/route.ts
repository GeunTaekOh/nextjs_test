import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from 'src/pages/api/auth/[...nextauth]';
import { getFollowingPostsOf } from 'src/service/posts';

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response('Authentication Error', { status: 401 });
  }

  return getFollowingPostsOf(user.username).then((data) => NextResponse.json(data));
}
