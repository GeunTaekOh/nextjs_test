import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import './globals.css';
import AuthContext from 'src/context/AuthContext';
import SWRConfigContext from 'src/context/SWRConfigContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={inter.className}>
      <body className='w-full max-w-screen-xl overflow-auto mx-auto'>
        <AuthContext>
          <header className='sticky top-0 bg-white z-10 border-b'>
            <Navbar />
          </header>
          <main className='w-full flex justify-center bg-neutral-50 min-h-full'>
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
        </AuthContext>
        {/* <div id='portal' /> */}
      </body>
    </html>
  );
}
