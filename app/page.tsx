// import Head from 'next/head';
// import ImageCarousel from "@/components/ImageCarousel";
// import AboutSnippet from "@/components/AboutSnippet";
// import InfrastructureSnippet from "@/components/InfrastructureSnippet";
// import ProductSnippet from "@/components/ProductSnippet";

// export default function Home() {
  
//   return (
    

//     <div className="flex flex-col items-center justify-center">
//       <Head>
//         <title>Raithu Mithra Seeds | Sustainable Farming & Hybrid Seeds</title>
//         <meta name="description" content="Raithu Mithra Seeds is a trusted name for hybrid seeds and sustainable agriculture infrastructure in Telangana and beyond." />
//         <meta name="keywords" content="Raithu Mithra, Raithumithra Seeds, Hybrid Seeds, Telangana, Armoor, Sustainable Farming" />
//         <meta name="author" content="Raithu Mithra Seeds" />
//         <meta property="og:title" content="Raithu Mithra Seeds" />
//         <meta property="og:description" content="Sustainable agriculture solutions and hybrid seeds from Raithu Mithra." />
//         <meta property="og:url" content="https://raithumithraseeds.com" />
//         <meta property="og:type" content="website" />
//       </Head>

//       {/* 🔹 Carousel */}
//       <section className="w-full">
//         <ImageCarousel />
//       </section>

//       {/* 🔹 About Section */}
//       <section className="container mx-auto px-6 py-16">
//         {/* <div className="flex flex-col md:flex-row items-center gap-10">
//           <div className="flex-1">
//             <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
//               About Raithu Mithra Seeds
//             </h1>
//             <p className="text-black-700 leading-relaxed text-justify">
//               Three decades of legacy to connect science and technology with traditional farming. 
//               Raithu Mithra is pledged to bring the principles of sustainable development to the 
//               farming community. The company foundation was built on the founders futuristic vision 
//               of transforming the agrarian face of the country with the production of quality Hybrid 
//               Seeds and technologically advanced post-harvest infrastructure.
//             </p>
//           </div>

//           <div className="flex-1 relative w-full h-[300px] sm:h-[350px] md:h-[400px]">
//             <Image
//               src="/images/R&D2.jpg"
//               alt="About Raithu Mithra Seeds"
//               fill
//               className="object-cover rounded-lg shadow-lg"
//             />
//           </div>
//         </div> */}

//         <section className="w-full">
//         <AboutSnippet/>
//       </section>
//       <section className="w-full">
//         <InfrastructureSnippet/>
//       </section>

//       <section className="w-full">
//         <ProductSnippet/>
//       </section>

//       </section>

    
      
//     </div>
//   );
// }

import Head from 'next/head';
import ImageCarousel from "@/components/ImageCarousel";
import AboutSnippet from "@/components/AboutSnippet";
import InfrastructureSnippet from "@/components/InfrastructureSnippet";
import ProductSnippet from "@/components/ProductSnippet";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-black">
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

      {/* 🔹 Carousel */}
      <section className="w-full">
        <ImageCarousel />
      </section>

      {/* 🔹 About Section */}
      <section className="w-full">
        <AboutSnippet />
      </section>

      {/* 🔹 Infrastructure Section */}
      <section className="w-full">
        <InfrastructureSnippet />
      </section>

      {/* 🔹 Products Section */}
      <section className="w-full">
        <ProductSnippet />
      </section>
    </div>
  );
}

