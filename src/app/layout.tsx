import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn, constructMetadata } from '@/src/lib/utils';
import Navbar from '@/src/components/Navbar';
import Providers from '../components/Providers';
import { Toaster } from 'sonner';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

// Uncoment once app deployed live and update the metadata base url in utils.ts file
// export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn('relative h-full font-sans antialiased', inter.className)}
      >
        <main className="relative flex flex-col min-h-screen">
          <Providers>
            <Navbar />
            <div className="flex-grow flex-1">{children}</div>
            <Footer />
          </Providers>
        </main>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
