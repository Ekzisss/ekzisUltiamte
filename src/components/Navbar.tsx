import React from 'react';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Navbar(isloged: boolean) {
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <div className={styles.content}>
        <h1 className="py-4 px-4 font-bold text-2xl">Ekzis-ultimate</h1>
        <div className={styles.types}>
          <div className={styles.item}>
            <Image
              src="/images/user.png"
              width={40}
              height={40}
              alt="icon"
            />
            <span>Movies</span>
          </div>
          <div className={`${styles.item} ${styles.itemActive}`}>
            <Image
              src="/images/user.png"
              width={40}
              height={40}
              alt="icon"
            />
            <span>Something else</span>
          </div>
        </div>
      </div>
      {isloged ? (
        <div
          onClick={() => router.push('/profile')}
          className={styles.profile}
        >
          <Image
            src="/images/user.png"
            width={30}
            height={30}
            alt="icon"
          ></Image>
          <p>Profile</p>
        </div>
      ) : (
        <div className={styles.profile}>SignIn</div>
      )}
    </div>
  );
}
