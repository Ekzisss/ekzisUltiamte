import Navbar from '@/components/Navbar';
import useCurrentUser from '@/hooks/useCurrentUser';
import { signOut } from 'next-auth/react';
import { Raleway } from 'next/font/google';
import { useRouter } from 'next/router';
import styles from '@/styles/global.module.scss';

const raleway = Raleway({ subsets: ['latin'] });

export default function Home() {
  // const { data: session, isLoading } = useCurrentUser();
  const router = useRouter();

  return (
    <main className={raleway.className + styles.main + ' text-xl text-white flex bg-[#1C1B33]'}>
      <Navbar isloged={false} />
      <div className={styles.conatiner}>
        <p>dsadasdasdasd</p>
        <button
          className="bg-white text-black p-2"
          onClick={() => signOut()}
        >
          Logout
        </button>
        {/* <p>logged in by {session?.email}</p> */}
        {/* <p>is loading: {`${isLoading}`}</p> */}
        <button
          className="bg-white text-black p-2"
          onClick={() => router.push('/profile')}
        >
          Profile
        </button>
      </div>
    </main>
  );
}
