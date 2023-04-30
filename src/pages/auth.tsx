import { useCallback, useState } from 'react';
import InputText from '@/components/inputText';
import font from '@/utils/font';
import axios from 'axios';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Auth() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => (currentVariant === 'login' ? 'register' : 'login'));
  }, []);

  const logining = useCallback(async () => {
    try {
      await signIn('credentials', {
        login,
        password,
        redirect: false,
        callbackUrl: '/',
      }).then((req) => {
        if (req?.error) {
          throw new Error(req.error);
        }
        router.push('/');
      });
    } catch (error) {
      console.log(error);
    }
  }, [login, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        login,
        password,
      });

      logining();
    } catch (error) {
      console.log(error);
    }
  }, [email, login, password, logining]);

  return (
    <div
      className={
        font.className +
        ' h-screen bg-gradient-to-r from-uii4 to-uii3 flex justify-center text-center font-sans'
      }
    >
      <div className="m-auto w-[18.5rem] bg-uii3 border border-ui3 rounded-md text-zinc-200 px-5 max-sm:w-full">
        <h1 className="my-8 text-xl">{variant === 'login' ? 'Sign in' : 'Register'}</h1>
        <div className="flex flex-col items-center justify-center gap-4">
          {variant === 'register' && (
            <InputText
              id="email"
              onChange={(ev: any) => setEmail(ev.target.value)}
              type="email"
              label="Email"
              value={email}
            />
          )}
          <InputText
            id="login"
            onChange={(ev: any) => setLogin(ev.target.value)}
            type="text"
            label="Login"
            value={login}
          />
          <InputText
            id="password"
            onChange={(ev: any) => setPassword(ev.target.value)}
            type="password"
            label="Password"
            value={password}
          />
          <button
            onClick={variant === 'login' ? logining : register}
            className="border border-ui3 bg-gradient-to-r from-uii1 to-ui1 rounded-md py-1.5 px-4 hover:tracking-wider hover:shadow-lg hover:shadow-uii1 transition-all duration-150"
          >
            {variant === 'login' ? 'login' : 'register'}
          </button>
          <p className="text-neutral-400 mb-8">
            {variant === 'login' ? 'first time here? ' : 'Already have an account? '}
            <span
              onClick={toggleVariant}
              className="text-white hover:underline cursor-pointer"
            >
              {variant === 'login' ? 'Create account?' : 'Login'}
            </span>
          </p>
          {/* <h1>{session ? 4444 : 7777}</h1> */}
        </div>
      </div>
    </div>
  );
}
