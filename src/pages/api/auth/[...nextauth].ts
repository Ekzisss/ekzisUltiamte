import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';

import prismadb from '@/lib/prismadb';

export default NextAuth({
  providers: [
    Credentials({
      id: 'credentials',
      name: 'credentials',
      credentials: {
        login: {
          label: 'Login',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        if (!credentials?.login || !credentials?.password) {
          throw new Error('Login and Password required');
        }

        const user = await prismadb.user.findUnique({
          where: {
            name: credentials.login,
          },
        });

        if (!user || !user.hashedPassword) {
          throw new Error('User dose not exist');
        }

        const isCorrectPassword = await compare(credentials.password, user.hashedPassword);

        if (!isCorrectPassword) {
          throw new Error('Inncorect password');
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: '/auth',
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
});
