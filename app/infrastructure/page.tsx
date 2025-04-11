'use client';
import Head from 'next/head';
import Image from 'next/image';

export default function Infrastructure() {
  const items = [
    { title: "Paddy", image: "/images/paddy.jpg" },
    { title: "Maize", image: "/images/maize.jpg" },
    { title: "White Jowar", image: "/images/whitejowar.jpg" },
    { title: "Red Jowar", image: "/images/redjowar.jpg" },
    { title: "Soya", image: "/images/bajra.jpg" },
    { title: "Pearl Millet", image: "/images/pearl-millet.jpg" },
    { title: "Sunflower", image: "/images/sunflower.jpg" },
    { title: "Small Paddy", image: "/images/small-paddy.jpg" },
  ];

  return (
    <section className="bg-green-100 pb-12">
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

      {/* Light Green Heading */}
      <div className="py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800">Infrastructure</h1>
      </div>

      {/* Image Grid */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative w-full h-64">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="p-4 text-lg font-semibold text-gray-800 text-center">
              {item.title}
            </h2>
          </div>
        ))}
      </div>

      {/* R&D Section */}
      <div className="bg-white py-16 px-4 md:px-12 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-green-700">Research and Development</h2>
          <p className="text-gray-700 leading-relaxed">
            At Raithu Mithra Seeds, our Research and Development (R&D) efforts are dedicated to enhancing crop yield, improving disease resistance, and ensuring environmental adaptability. Through cutting-edge genetic research, hybridization, and biotechnology, we develop high-quality seeds that promote sustainable and productive farming. Our advanced breeding techniques, including gene editing and precision agriculture, help create resilient crops suited for diverse climatic conditions. Each seed variety undergoes rigorous testing in different environments to guarantee superior performance before commercial release, ultimately empowering farmers with higher productivity and profitability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/R&D.jpg"
              alt="R&D Image 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/R&D2.jpg"
              alt="R&D Image 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Seed Production Section */}
      <div className="bg-white py-16 px-4 md:px-12 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-green-700">Seed Production</h2>
          <p className="text-gray-700 leading-relaxed">
            Raithu Mithra Seeds has a robust network of progressive hybrid seed-producing farmers across Andhra Pradesh, Telangana, and Karnataka. Our dedicated team closely monitors production activities to ensure quality until the produce reaches our facility. In the 2020-21 season, we managed approximately 12,000 acres of cotton, corn, pearl millet, sorghum, and forage seeds for various companies. Since 2010, we have been providing end-to-end tolling services for corn, delivering high-quality finished goods with assured volumes, providing farmers with sustainable livelihood opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/seedproduction.jpg"
              alt="Seed Production Image 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/seedproduction3.jpg"
              alt="Seed Production Image 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
