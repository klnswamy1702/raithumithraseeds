import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";

export default function Home() {
  const items = [
    { title: "Corn Seeds", image: "/images/corn.jpg" },
    { title: "Cotton Seeds", image: "/images/cotton.jpg" },
    { title: "Paddy Seeds", image: "/images/paddy.jpg" },
    { title: "Pearl Millet/Forage", image: "/images/millet.jpg" },
  ];

  return (
    <div className="flex flex-col items-center justify-center">

      {/* 🔹 Carousel */}
      <section className="w-full">
        <ImageCarousel />
      </section>

      {/* 🔹 About Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
              About Raithu Mithra Seeds
            </h1>
            <p className="text-gray-700 leading-relaxed text-justify">
              Three decades of legacy to connect science and technology with traditional farming. 
              Raithu Mithra is pledged to bring the principles of sustainable development to the 
              farming community. The company foundation was built on the founder's futuristic vision 
              of transforming the agrarian face of the country with the production of quality Hybrid 
              Seeds and technologically advanced post-harvest infrastructure.
            </p>
          </div>

          <div className="flex-1 relative w-full h-[300px] sm:h-[350px] md:h-[400px]">
            <Image
              src="/images/about-us.jpg"
              alt="About Raithu Mithra Seeds"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 🔹 Infrastructure Section */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-green-800 mb-12 text-center">
            Our Infrastructure
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {items.map((item, index) => (
              <div
                key={index}
                className="shadow-xl rounded-xl overflow-hidden bg-white flex flex-col hover:shadow-2xl transition"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="p-4 text-lg font-semibold text-gray-700">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}
