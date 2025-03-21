import Image from 'next/image';

export default function Infrastructure() {
  const items = [
    { title: "Corn Seeds", image: "/images/corn.jpg" },
    { title: "Cotton Seeds", image: "/images/cotton.jpg" },
    { title: "Paddy Seeds", image: "/images/paddy.jpg" },
    { title: "Pearl Millet/Forage", image: "/images/millet.jpg" },
  ];

  return (
    <section className="container mx-auto px-6 py-10 space-y-16">
      <h1 className="text-4xl font-semibold text-green-800 mb-10 text-center">Infrastructure</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {items.map((item, index) => (
          <div key={index} className="shadow-xl rounded-xl overflow-hidden bg-white flex flex-col">
            <div className="relative w-full h-64">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="p-4 text-lg font-semibold text-gray-700">{item.title}</h2>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-green-700">R&D</h2>
        <p className="text-black-700 leading-relaxed">
          At Raithu Mithra Seeds, our Research and Development (R&D) efforts are dedicated to enhancing crop yield, improving disease resistance, and ensuring environmental adaptability. Through cutting-edge genetic research, hybridization, and biotechnology, we develop high-quality seeds that promote sustainable and productive farming. Our advanced breeding techniques, including gene editing and precision agriculture, help create resilient crops suited for diverse climatic conditions. Each seed variety undergoes rigorous testing in different environments to guarantee superior performance before commercial release, ultimately empowering farmers with higher productivity and profitability.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-green-700">Seed Production</h2>
        <p className="text-black-700 leading-relaxed">
          Raithu Mithra Seeds has a robust network of progressive hybrid seed-producing farmers across the districts of Andhra Pradesh, Telangana, & Karnataka. Our dedicated team closely monitors production activities to ensure quality until the produce reaches our facility. In the 2020-21 season, we managed approximately 12,000 acres of cotton, corn, pearl millet, sorghum, and forage seeds for various companies. Since 2010, we have been providing end-to-end tolling services for corn, delivering high-quality finished goods with assured volumes, providing farmers with sustainable livelihood opportunities.
        </p>
      </div>
    </section>
  );
}
