import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

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
              The companys foundation was built on the founders futuristic vision of transforming the agrarian face
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
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex-1">
            <h2 className="text-lg font-bold mb-4">CONTACT</h2>
            <p className="text-sm text-gray-300">
              RaithuMithra Seeds, Nutankal,<br />
              Medchal, Telangana - 501401
            </p>
            <p className="text-sm text-yellow-400 mt-2">info@raithumithraseeds.com</p>
            <p className="text-sm mt-1">
              7702998934<br />
              9959989922<br />
              9849797703
            </p>
            <div className="flex space-x-4 mt-4 text-white">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-xl hover:text-yellow-400" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-xl hover:text-yellow-400" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-xl hover:text-yellow-400" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      {/* <div className="text-center">
        
        <div className="mt-1">
          <Link href="/privacy-policy" className="mr-4">Privacy Policy</Link>
          <Link href="/terms-of-use">Terms of Use</Link>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
