'use client';

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
    <section className="container mx-auto px-4 py-12 space-y-16">
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
        Infrastructure
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

      {/* R&D Section
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-green-700">R&D</h2>
        <p className="text-gray-700 leading-relaxed">
          At Raithu Mithra Seeds, our Research and Development (R&D) efforts are
          dedicated to enhancing crop yield, improving disease resistance, and
          ensuring environmental adaptability. Through cutting-edge genetic
          research, hybridization, and biotechnology, we develop high-quality
          seeds that promote sustainable and productive farming. Our advanced
          breeding techniques, including gene editing and precision agriculture,
          help create resilient crops suited for diverse climatic conditions.
          Each seed variety undergoes rigorous testing in different environments
          to guarantee superior performance before commercial release,
          ultimately empowering farmers with higher productivity and
          profitability.
        </p>
      </div>

      {/* Seed Production Section */}
      {/* <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-green-700">Seed Production</h2>
        <p className="text-gray-700 leading-relaxed">
          Raithu Mithra Seeds has a robust network of progressive hybrid
          seed-producing farmers across the districts of Andhra Pradesh,
          Telangana, & Karnataka. Our dedicated team closely monitors production
          activities to ensure quality until the produce reaches our facility.
          In the 2020-21 season, we managed approximately 12,000 acres of
          cotton, corn, pearl millet, sorghum, and forage seeds for various
          companies. Since 2010, we have been providing end-to-end tolling
          services for corn, delivering high-quality finished goods with assured
          volumes, providing farmers with sustainable livelihood opportunities.
        </p>
      </div> */} 

{/* ----------- R&D Section ----------- */}
<div className="space-y-6">
  <h2 className="text-3xl font-semibold text-green-700 text-center">Research and Development</h2>
  <p className="text-black-700 leading-relaxed text-center max-w-3xl mx-auto">
    At Raithu Mithra Seeds, our Research and Development (R&D) efforts are dedicated to enhancing crop yield, improving disease resistance, and ensuring environmental adaptability. Through cutting-edge genetic research, hybridization, and biotechnology, we develop high-quality seeds that promote sustainable and productive farming. Our advanced breeding techniques, including gene editing and precision agriculture, help create resilient crops suited for diverse climatic conditions. Each seed variety undergoes rigorous testing in different environments to guarantee superior performance before commercial release, ultimately empowering farmers with higher productivity and profitability.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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

{/* ----------- Seed Production Section ----------- */}
<div className="space-y-6 mt-16">
  <h2 className="text-3xl font-semibold text-green-700 text-center">Seed Production</h2>
  <p className="text-black-700 leading-relaxed text-center max-w-3xl mx-auto">
    Raithu Mithra Seeds has a robust network of progressive hybrid seed-producing farmers across Andhra Pradesh, Telangana, and Karnataka. Our dedicated team closely monitors production activities to ensure quality until the produce reaches our facility. In the 2020-21 season, we managed approximately 12,000 acres of cotton, corn, pearl millet, sorghum, and forage seeds for various companies. Since 2010, we have been providing end-to-end tolling services for corn, delivering high-quality finished goods with assured volumes, providing farmers with sustainable livelihood opportunities.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
