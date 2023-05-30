'use client';
import useSWR from 'swr';

export default function FollowingBar() {
  const { data, isLoading, error } = useSWR('/api/me');
  console.log('test : ' + data);
  //1. client component에서 벡엔드에게 api/me를 통해 사용자의 정보를 얻어옴
  //2. 벡엔드에서는 현재 로그인된 사용자의 세션 정보를 이용해서
  //3. 벡엔드에서 사용자의 상세 정보를 sanity에서 가져옴 (followings)
  //4. 여기에서 클라이언트 컴포넌트에서 followings의 정보를 UI에 보여줌
  //   (image, username)
  //react query가 아닌 swr 을 사용할 예정임
  return <p>FollowingBar</p>;
}
