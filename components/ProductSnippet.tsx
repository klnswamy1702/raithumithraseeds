// components/ProductsSnippet.tsx

import Image from "next/image";
import Link from "next/link";

export default function ProductsSnippet() {
  const productImages = [
    "/images/product1.jpg",
    "/images/product2.jpg",
    "/images/product3.jpg",
    "/images/product4.jpg",
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold text-green-700 mb-10 text-center">
        Our Products
      </h2>

      {/* 🖼️ Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {productImages.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-[200px] sm:h-[250px] md:h-[250px] rounded overflow-hidden shadow-lg"
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

      {/* 🔘 Centered Learn More Button */}
      <div className="flex justify-center">
        <Link href="/product-catalogue">
          <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition cursor-pointer">
            Learn More &gt;&gt;
          </button>
        </Link>
      </div>
    </section>
  );
}
