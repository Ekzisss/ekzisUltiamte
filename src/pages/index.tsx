import Image from 'next/image';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

export default function Home() {
  return <main className={raleway.className + ' text-xl p-20'}>dsadasdasdasd</main>;
}
