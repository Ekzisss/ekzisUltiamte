import { NextApiRequest, NextApiResponse } from 'next';

import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    if (req.query.name) {
      throw new Error('Login and Password required');
    }

    const user = await prismadb.user.findUnique({
      where: {
        name: req.query.name,
      },
    });

    if (!user) {
      return res.status(404).json({ message: 'user not found' });
    }

    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(400).end();
  }
}
