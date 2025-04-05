import './globals.css';
import Head from 'next/head';
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
      <Head>
        <title>Raithu Mithra Seeds | Sustainable Farming & Hybrid Seeds</title>
        <meta name="description" content="Raithu Mithra Seeds is a trusted name for hybrid seeds and sustainable agriculture infrastructure in Telangana and beyond." />
        <meta name="keywords" content="Raithu Mithra, Raithumithra Seeds, Hybrid Seeds, Telangana, Armoor, Sustainable Farming" />
        <meta name="author" content="Raithu Mithra Seeds" />
        <meta property="og:title" content="Raithu Mithra Seeds" />
        <meta property="og:description" content="Sustainable agriculture solutions and hybrid seeds from Raithu Mithra." />
        <meta property="og:url" content="https://raithumithraseeds.com" />
        <meta property="og:type" content="website" />
      </Head>
      <body className={`${inter.className} bg-gradient-to-br from-white via-green-50 to-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
