import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';
import varifiaction from '@/utils/verification';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    const { email, login, password } = req.body;

    const verify = varifiaction(email, login, password);

    if (verify) {
      return res.status(400).json({ message: verify });
    }

    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res.status(422).json({ error: 'This email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name: login,
        hashedPassword,
        image: '',
        emailVerified: new Date(),
      },
    });

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
