import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import FollowingBar from '../components/FollowingBar';
import PostList from '../components/PostList';
import SideBar from '../components/SideBar';
import { authOptions } from 'src/pages/api/auth/[...nextauth]';

//server component 이니까 auth/signin/page 에서 session 정보 가져오는 것 처럼 getServerSession으로 로그인 값 가져오기
export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  console.log(`user : ${JSON.stringify(user)}`);

  if (!user) {
    redirect('/api/auth/signin');
  }

  return (
    <section className='w-full flex flex-col md:flex-row max-w-[850px] p-4'>
      <div className='w-full basis-3/4'>
        <FollowingBar />
        <PostList />
      </div>
      <div className='basis-1/4'>
        <SideBar user={user} />
      </div>
    </section>
  );
}
