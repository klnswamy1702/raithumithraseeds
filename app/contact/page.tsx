export default function ContactUs() {
    return (
      <section className="bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-semibold text-green-800 text-center mb-12">Contact Us</h1>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 text-center">
            <div className="bg-white shadow-lg p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-green-700">Hyderabad, Telangana, India</h2>
              <p className="mt-2 text-black">Bharathi Brahma Seeds, Nutankal,<br />Medchal, Telangana - 501401</p>
              <p className="mt-2 text-black">Email: info@raithumithraseeds.com</p>
              <p className="mt-2 text-black">Phone: 7702999934 / 9959989922</p>
            </div>
  
            <div className="bg-white shadow-lg p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-green-700">Nandyala, Andhra Pradesh, India</h2>
              <p className="mt-2 text-black">Industrial Area, Andhra Pradesh - 518501</p>
              <p className="mt-2 text-black">Email: info@raithumithraseeds.com</p>
              <p className="mt-2 text-black">Phone: 7702999934 / 9959989922</p>
            </div>
          </div>
  
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
  