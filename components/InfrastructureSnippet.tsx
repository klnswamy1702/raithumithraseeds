// components/InfrastructureSnippet.tsx

import Image from "next/image";
import Link from "next/link";

export default function InfrastructureSnippet() {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* 📷 Image Left */}
        <div className="flex-1 relative w-full h-[250px] sm:h-[300px] md:h-[400px]">
          <Image
            src="/images/seedproduction.jpg"
            alt="Infrastructure"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* 📝 Content Right */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold text-green-700 mb-4">
            Our Infrastructure
          </h2>
          <p className="text-black-700 leading-relaxed text-justify sm:text-left mb-6">
            Equipped with advanced processing units, cold storage facilities, and quality labs,
            Raithu Mithra ensures every seed meets high industry standards before reaching the field.
          </p>
          <Link href="/infrastructure">
            <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition cursor-pointer">
              Learn More &gt;&gt;
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
