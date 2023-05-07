import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import useCurrentUser from '@/hooks/useCurrentUser';
import Image from 'next/image';

export default function Profile() {
  const { data: session, isLoading } = useCurrentUser();

  console.log(session?.image);

  return (
    <div className="flex flex-col justify-center items-center h-full text-3xl gap-3">
      <Image
        src={session?.image || '/images/user.png'}
        width={100}
        height={100}
        alt="icon"
      ></Image>
      <p>{session?.name}</p>
      <p>{session?.email}</p>
    </div>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
