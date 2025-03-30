import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500'] });

export const metadata = {
  title: 'Raithu Mithra Seeds',
  description: 'Empowering farmers with high-quality seeds and modern agriculture.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Raithu Mithra Seeds',
    description: 'Your trusted seed partner in sustainable agriculture.',
    url: 'https://www.raithumithraseeds.com',
    siteName: 'Raithu Mithra Seeds',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Raithu Mithra Seeds Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raithu Mithra Seeds',
    description: 'Empowering farmers with high-quality seeds.',
    images: ['./public/images/logo.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-white via-green-50 to-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
