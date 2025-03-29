// app/layout.tsx
// import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700', '800'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500'] });


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
    // <html lang="en">
    //   <body className="flex flex-col min-h-screen">
    //     <Navbar />
    //     <main className="flex-grow">{children}</main>
    //     <Footer />
    //   </body>
    // </html>
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-white via-green-50 to-white`}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}

// 'use client';

// import Section from '../components/Section';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const fadeInUp = {
//   hidden: { opacity: 0, y: 50 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// export default function AboutUs() {
//   return (
//     <section className="container mx-auto px-4 py-20 space-y-28">

//       <Section
//         title="Company Overview"
//         image="/images/company-overview.jpg"
//         description={`Raithu Mithra Seeds has been a trusted name in the seed industry since 2003, dedicated to ongoing research and development to provide farmers with superior hybrid seeds tailored to diverse agricultural needs.

// Our expertise lies in breeding high-yielding, climate-resilient hybrids that adapt to various soil types, rainfall conditions, irrigation systems, sowing seasons, and market demands across India.

// Our primary focus is on developing advanced paddy and maize hybrids, particularly for south Indian and other Eastern states, where extended cold conditions during the Rabi season present challenges for seed setting. Additionally, we have successfully introduced south-seasoned varieties to support the growing trend of spring maize cultivation. For regions such as Maharashtra, Telangana, Andhra Pradesh, Karnataka, and Tamil Nadu, we have designed hybrids that withstand prolonged dry spells during the Kharif season. Simultaneously, we offer high-yielding hybrids for assured irrigated conditions in both Kharif and Rabi seasons, ensuring farmers across all regions have access to the best-performing seeds.

// We have expanded its portfolio to include high-yielding hybrids and improved varieties of paddy, maize, SSG, sunflower, bajra, and jowar. These seeds are specifically designed to meet the requirements of farmers and trade partners across 10+ Indian states and neighboring countries.`}
//       />

//       <Section
//         title="Our Commitment"
//         image="/images/commitment.jpg"
//         reverse
//         description={`Innovation is at the core of our operations, extending beyond seed development to advanced seed treatment solutions. We leverage the latest chemical and biological formulations to enhance germination and seed vigor. Additionally, our specialized seed treatment solutions offer early-stage protection against pests and diseases for 2–3 weeks after germination, ensuring healthier crop establishment.`}
//       />

//       <Section
//         title="Organizational Values"
//         image="/images/values.jpg"
//         description={`Raithu Mithra thrives on the dedication and expertise of professionals across R&D, supply chain, sales & marketing, and finance. Our team brings industry-leading knowledge, integrity, and commitment to maintaining the highest standards in seed production and distribution.

// Our dynamic sales force operates across multiple states, driving demand-generation activities through field visits, farmer interactions, video campaigns, field days, and retailer engagement. With a robust distribution network comprising over 1,000 distributors and tens of thousands of retailers, we ensure that our premium-quality seeds reach farmers efficiently, contributing to agricultural growth nationwide.`}
//       />

//       <Section
//         title="Mission"
//         image="/images/mission.jpg"
//         reverse
//         description={`Raithu Mithra's mission is to empower farmers with innovative and dependable seed solutions, promoting sustainable agricultural growth and enhanced productivity across India.`}
//       />

//       <Section
//         title="Vision"
//         image="/images/vision.jpg"
//         description={`To transform agriculture by delivering high-quality, sustainable seeds that nourish the planet and future generations.

// To lead the seed industry through cutting-edge research and biotechnology, ensuring higher yields, climate adaptability, and global food security.

// To empower farmers worldwide with premium seeds, knowledge, and continuous support, fostering prosperity from the ground up.`}
//       />

//       {/* Divider */}
//       <div className="border-t border-dashed border-green-200 my-12" />

//       {/* Leadership */}
//       <motion.div
//         variants={fadeInUp}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         className="text-center space-y-6"
//       >
//         <h2 className="text-5xl font-bold text-green-800 font-[Playfair]">
//           Leadership
//           <span className="block h-1 w-24 bg-green-600 mx-auto mt-2 rounded"></span>
//         </h2>
//         <div className="flex justify-center">
//           <div className="w-[250px] h-[250px] relative rounded-full overflow-hidden shadow-xl hover:shadow-green-100 transition duration-300 hover:scale-105">
//             <Image
//               src="/images/leader.jpg"
//               alt="Leader"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>
//         <h3 className="text-2xl font-semibold text-gray-700">Mr. [Leader's Full Name]</h3>
//       </motion.div>
//     </section>
//   );
// }
