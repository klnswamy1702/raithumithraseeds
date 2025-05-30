import Link from 'next/link';
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#3c4431] text-white pt-12 pb-6">
      {/* Top Section */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* About Section */}
          <div className="flex-1">
            <h2 className="text-lg font-bold mb-4">ABOUT</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              RaithuMithra Seeds is pledged to bring the principles of sustainable development to the farming community.
              The company&rsquo;s foundation was built on the founder&rsquo;s futuristic vision of transforming the agrarian face
              of the country with the production of quality Hybrid Seeds and technologically advanced post-harvest infrastructure.
              We boast of three decades of sheer legacy committed to connecting traditional farming methods with new-age science and technology.
            </p>
          </div>

          {/* Explore Section */}
          <div className="flex-1">
            <h2 className="text-lg font-bold mb-4">EXPLORE</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/infrastructure">Infrastructure</Link></li>
              <li><Link href="/product-catalogue">Products</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex-1">
            <h2 className="text-lg font-bold mb-4">CONTACT US</h2>
            <p className="text-sm text-gray-300 mb-2">
              Raithu Mithra Seeds<br />
              1-1-4/4, Mahalaxmi Colony,<br />
              Armoor, Nizamabad Dist,<br />
              Telangana, India. 503224
            </p>
            <p className="text-sm text-gray-300 mb-2">
              <strong>Industrial Address:</strong><br />
              Raithu Mithra Seeds<br />
              Laxmi Godam, NH-63, Ankapur, Armoor,<br />
              Nizamabad, Telangana, India. 503224
            </p>
            <p className="text-sm text-yellow-400">
              <a href="mailto:seedsraithumithra@gmail.com" className="hover:underline">
                seedsraithumithra@gmail.com
              </a>
            </p>
            <br />
            <p className="text-sm text-gray-300">
              <strong>Contact Number:</strong><br />
              +91 9912686771
            </p>
            <p className="text-sm text-gray-300 mt-1">
              <strong>Helpline No:</strong><br />
              +91 9550450821
            </p>

            <div className="flex space-x-4 mt-4 text-white">
              <a href="http://wa.me/918977624884" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-xl hover:text-yellow-400" />
              </a>
              <a href="https://www.instagram.com/raithumithra_seeds/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl hover:text-yellow-400" />
              </a>
              <a href="https://www.youtube.com/@Raithumithraseeds" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-xl hover:text-yellow-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
