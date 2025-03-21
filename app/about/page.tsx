import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="container mx-auto px-6 py-10 space-y-20">
      {/* Company Overview */}
      <div>
        <h1 className="text-4xl font-semibold text-green-800 mb-4">Company Overview</h1>
        <p className="text-black-700">
          Raithu Mithra Seeds has been a trusted name in the seed industry since 2003...
          {/* Add full overview here */}
        </p>
      </div>

      {/* Mission */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <Image src="/images/mission.jpg" width={500} height={400} alt="Mission" className="rounded-lg shadow-xl" />
        <div>
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Mission</h2>
          <ul className="list-disc pl-5 space-y-2 text-black-700">
            <li>To transform and modernize agrarian dynamics.</li>
            <li>Provide world-class solutions and services.</li>
            {/* Add full points as needed */}
          </ul>
        </div>
      </div>

      {/* Vision */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        <Image src="/images/vision.jpg" width={500} height={400} alt="Vision" className="rounded-lg shadow-xl" />
        <div>
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Vision</h2>
          <ul className="list-disc pl-5 space-y-2 text-black-700">
            <li>To transform the country's agrarian dynamics.</li>
            <li>Reliable source for supply chain industry.</li>
            {/* Add additional points as required */}
          </ul>
        </div>
      </div>

      {/* Core Values */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <Image src="/images/corevalues.jpg" width={500} height={400} alt="Core Values" className="rounded-lg shadow-xl" />
        <div>
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Core Values</h2>
          <ul className="space-y-2 text-black-700">
            <li>Commitment to operational excellence with integrity</li>
            <li>Respect for individuals and society</li>
            <li>Ethical and transparent operation</li>
            <li>Responsibility towards stakeholders, clients, and communities</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
