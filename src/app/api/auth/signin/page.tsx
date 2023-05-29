import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import Signin from 'src/app/components/Signin';
import { authOptions } from 'src/app/pages/api/auth/[...nextauth]';

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function SigninPage({ searchParams: { callbackUrl } }: Props) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }

  const providers = (await getProviders()) ?? {};

  return (
    <section className='flex justify-center mt-24'>
      <Signin providers={providers} callbackUrl={callbackUrl ?? '/'} />
    </section>
  );
}
