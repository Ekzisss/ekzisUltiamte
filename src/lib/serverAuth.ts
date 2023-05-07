import { NextApiRequest } from 'next';
import { getSession } from 'next-auth/react';

import prismadb from '@/lib/prismadb';

const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({ req });

  if (!session?.user?.name) {
    throw new Error('Not signed in');
  }

  const user = await prismadb.user.findUnique({
    where: {
      name: session.user.name,
    },
  });

  if (!user) {
    throw new Error('Not signed in');
  }

  return user;
};

export default serverAuth;
