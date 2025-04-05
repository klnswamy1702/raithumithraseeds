import Head from 'next/head';
'use client';

import Image from 'next/image';
//importing next image
const productImages = [
    "/images/product1.jpg",
    "/images/product2.jpg",
    "/images/product3.jpg",
    "/images/product4.jpg",
    "/images/product5.jpg",
    "/images/product6.jpg",
    "/images/product7.jpg",
    "/images/product8.jpg",
    // add more as needed...
];
//images

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
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        OUR Products
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {productImages.map((src, index) => (
          <div
            key={index}
            className="w-full aspect-square bg-gray-100 rounded overflow-hidden flex items-center justify-center"
          >
            <Image
              src={src}
              alt={`Product ${index + 1}`}
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
