import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";

export default function Home() {
  
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
            <p className="text-black-700 leading-relaxed text-justify">
              Three decades of legacy to connect science and technology with traditional farming. 
              Raithu Mithra is pledged to bring the principles of sustainable development to the 
              farming community. The company foundation was built on the founders futuristic vision 
              of transforming the agrarian face of the country with the production of quality Hybrid 
              Seeds and technologically advanced post-harvest infrastructure.
            </p>
          </div>

          <div className="flex-1 relative w-full h-[300px] sm:h-[350px] md:h-[400px]">
            <Image
              src="/images/R&D2.jpg"
              alt="About Raithu Mithra Seeds"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

    
      
    </div>
  );
}
