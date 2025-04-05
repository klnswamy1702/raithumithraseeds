// components/AboutSnippet.tsx

import Image from "next/image";
import Link from "next/link";

export default function AboutSnippet() {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* 📝 Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold text-green-700 mb-4">
            About Raithu Mithra Seeds
          </h2>
          <p className="text-black-700 leading-relaxed text-justify sm:text-left mb-6">
            Three decades of legacy to connect science and technology with traditional farming.
            We focus on sustainable growth through innovation in hybrid seeds and modern infrastructure.
          </p>
          <Link href="/about">
            <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition cursor-pointer">
              Learn More &gt;&gt;
            </button>
          </Link>
        </div>

        {/* 📷 Image */}
        <div className="flex-1 relative w-full h-[250px] sm:h-[300px] md:h-[400px]">
          <Image
            src="/images/R&D2.jpg"
            alt="About Raithu Mithra Seeds"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
