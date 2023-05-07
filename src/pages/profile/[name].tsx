import { useRouter } from 'next/router';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import React from 'react';
import axios from 'axios';
import { useEffect, useCallback } from 'react';

export default function Profile() {
  const router = useRouter();

  useCallback(async () => {
    console.log(process.env);
    const user = await axios.post('http://localhost:3000/' + 'api/profileCheck', router);

    console.log(user);
  }, [router]);

  // const user = await axios.post(process.env.URL + 'api/profileCheck', router);

  // console.log(user);

  return (
    <div>
      <p>Profile</p>
      <p>{router.query.name}</p>
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
