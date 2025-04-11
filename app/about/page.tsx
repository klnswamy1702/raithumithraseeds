'use client';
import Head from 'next/head';
import Image from 'next/image';
import Section from '@/components/Section';

export default function AboutUs() {
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

      {/* Light Green Page Title */}
      <div className="py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800">About Us</h1>
      </div>

      {/* Main Sections - Light background */}
      <div className="bg-white text-black">
        <div className="container mx-auto px-4 py-20 space-y-28">
          <Section
            title="Company Overview"
            image="/images/company-overview.jpg"
            description={`Raithu Mithra Seeds has been a trusted name in the seed industry since 2003, dedicated to ongoing research and development to provide farmers with superior hybrid seeds tailored to diverse agricultural needs. Our expertise lies in breeding high-yielding, climate-resilient hybrids that adapt to various soil types, rainfall conditions, irrigation systems, sowing seasons, and market demands across India. Our primary focus is on developing advanced paddy and maize hybrids, particularly for south Indian and other Eastern states, where extended cold conditions during the Rabi season present challenges for seed setting. Additionally, we have successfully introduced south-seasoned varieties to support the growing trend of spring maize cultivation. For regions such as Maharashtra, Telangana, Andhra Pradesh, Karnataka, and Tamil Nadu, we have designed hybrids that withstand prolonged dry spells during the Kharif season. Simultaneously, we offer high-yielding hybrids for assured irrigated conditions in both Kharif and Rabi seasons, ensuring farmers across all regions have access to the best-performing seeds. We have expanded its portfolio to include high-yielding hybrids and improved varieties of paddy, maize, SSG, sunflower, bajra, and jowar. These seeds are specifically designed to meet the requirements of farmers and trade partners across 10+ Indian states and neighboring countries.`}
          />

          <Section
            title="Our Commitment"
            image="/images/commitment.jpg"
            reverse
            description={`Innovation is at the core of our operations, extending beyond seed development to advanced seed treatment solutions. We leverage the latest chemical and biological formulations to enhance germination and seed vigor. Additionally, our specialized seed treatment solutions offer early-stage protection against pests and diseases for 2–3 weeks after germination, ensuring healthier crop establishment.`}
          />

          <Section
            title="Organizational Values"
            image="/images/values.jpg"
            description={`Raithu Mithra thrives on the dedication and expertise of professionals across R&D, supply chain, sales & marketing, and finance. Our team brings industry-leading knowledge, integrity, and commitment to maintaining the highest standards in seed production and distribution. Our dynamic sales force operates across multiple states, driving demand-generation activities through field visits, farmer interactions, video campaigns, field days, and retailer engagement. With a robust distribution network comprising over 1,000 distributors and tens of thousands of retailers, we ensure that our premium-quality seeds reach farmers efficiently, contributing to agricultural growth nationwide.`}
          />

          <Section
            title="Mission"
            image="/images/mission.jpg"
            reverse
            description={`Raithu Mithra’s mission is to empower farmers with innovative and dependable seed solutions, promoting sustainable agricultural growth and enhanced productivity across India.`}
          />

          <Section
            title="Vision"
            image="/images/vision.jpg"
            description={`To transform agriculture by delivering high-quality, sustainable seeds that nourish the planet and future generations. To lead the seed industry through cutting-edge research and biotechnology, ensuring higher yields, climate adaptability, and global food security. To empower farmers worldwide with premium seeds, knowledge, and continuous support, fostering prosperity from the ground up.`}
          />

          {/* Leadership Section */}
          <div className="text-center space-y-8 px-4 py-8 bg-white rounded-lg shadow-md max-w-xl mx-auto">
            <h2 className="text-4xl font-bold text-green-800 font-[Playfair]">
              Leadership
              <span className="block h-1 w-20 bg-green-600 mx-auto mt-2 rounded"></span>
            </h2>

            <div className="flex justify-center">
              <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-green-600 shadow-sm">
                <Image
                  src="/images/leaderphoto.jpg"
                  alt="Leader"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-gray-800">Mr. Maddula Hari Narayana</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                (Founder, MD) – A visionary leader driving Raithu Mithra Seeds towards innovation and excellence in agriculture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
