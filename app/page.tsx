import ImageCarousel from "@/components/ImageCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <ImageCarousel />

      <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-green-700 mb-4">About Raithu Mithra Seeds</h1>
          <p className="text-black-700 leading-relaxed">
            Three decades of legacy to connect science and technology with traditional farming. Raithu Mithra is pledged to bring the principles of sustainable development to the farming community. The company’s foundation was built on the founder’s futuristic vision of transforming the agrarian face of the country with the production of quality Hybrid Seeds and technologically advanced post-harvest infrastructure. We boast of three decades of sheer legacy committed to connecting traditional farming methods with new-age science and technology.
          </p>
        </div>
        <div className="flex-1 relative w-full h-[350px]">
          <Image
            src="/images/about-us.jpg"
            alt="About Raithu Mithra Seeds"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}
