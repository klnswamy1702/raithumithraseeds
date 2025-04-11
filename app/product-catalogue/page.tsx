'use client';
import Head from 'next/head';
import Image from 'next/image';

// Images
const productImages = [
  "/images/produc1.jpg",
  "/images/produc2.jpg",
  "/images/produc3.jpg",
  "/images/produc4.jpg",
  "/images/produc5.jpg",
  "/images/produc6.jpg",
  "/images/produc7.jpg",
  "/images/produc8.jpg",
];

export default function ProductCatalogue() {
  return (
    <section className="container mx-auto px-4 py-10">
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

      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Products
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {productImages.map((src, index) => (
          <div
            key={index}
            className="relative w-full aspect-[4/5] bg-gray-100 rounded overflow-hidden shadow-lg"
          >
            <Image
              src={src}
              alt={`Product ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
