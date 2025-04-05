import Head from 'next/head';
export default function ContactUs() {
  return (
    <section className="bg-gray-50">
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
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-semibold text-green-800 text-center mb-12">Contact Us</h1>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 text-center">
          {/* Office Address */}
          <div className="bg-white shadow-lg p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-green-700 mb-2">Head Office</h2>
            <p className="text-black">
              1-1-4/4 Mahalaxmi Colony,<br />
              Armoor 504224, Nizamabad Dist.,<br />
              Telangana, India.
            </p>
            <p className="mt-2 text-black">
              Email: <a href="mailto:seedsraithumithra@gmail.com" className="text-blue-700 underline">seedsraithumithra@gmail.com</a>
            </p>
            {/* <p className="mt-2 text-black font-semibold">Customer Care Helpline:</p>
            <p className="text-black">+91 9912686771</p> */}
            <p className="mt-2 text-black font-semibold">Contact Numbers:</p>
            <p className="text-black">9550450821 / 9912686771</p>
          </div>

          {/* Plant Address */}
          <div className="bg-white shadow-lg p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-green-700 mb-2">Plant Address</h2>
            <p className="text-black">
              Raithu Mithra Seeds<br />
              Laxmi Godam, NH-63, Ankapur, Armoor,<br />
              Nizamabad, Telangana, India.
            </p>
            <p className="mt-2 text-black font-semibold">Customer Care Helpline:</p>
            <p className="text-black">+91 9912686771</p>
            <p className="mt-4 text-black font-semibold">Contact Numbers:</p>
            <p className="text-black">9550450821 / 9912686771</p>
          </div>
        </div>

        {/* Message Form */}
        <div className="bg-green-700 py-16 rounded-xl shadow-xl">
          <div className="container mx-auto px-6 max-w-4xl bg-white rounded-xl py-8 shadow-lg">
            <h2 className="text-3xl font-bold text-green-800 text-center mb-8">Write Us a Message</h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
              <input type="text" placeholder="Your Name" className="p-3 border rounded-lg" required />
              <input type="email" placeholder="Email Address" className="p-3 border rounded-lg" required />
              <input type="text" placeholder="Phone Number" className="p-3 border rounded-lg" required />
              <input type="text" placeholder="Subject" className="p-3 border rounded-lg" required />
              <textarea placeholder="Your Message" className="md:col-span-2 p-3 border rounded-lg" rows={5} required></textarea>
              <button type="submit" className="md:col-span-2 bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
