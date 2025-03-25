// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from '../public/images/logo.png';

// export const metadata: Metadata = {
//   title: "Raithu Mithra Seeds",
//   description: "Trusted Seed Company since 2003",
// };

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
        url: '/images/logo.png', // recommended size: 1200x630
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
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
