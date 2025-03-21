import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="font-bold text-xl">About Raithu Mithra Seeds</h2>
          <p className="mt-2 text-sm">
            Trusted since 2003, delivering innovative seed solutions for sustainable farming.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-xl">Explore</h2>
          <ul className="mt-2 space-y-1">
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/infrastructure" className="hover:underline">Infrastructure</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-xl">Connect with Us</h2>
          <p className="mt-2 text-sm">Email: info@raithumithraseeds.com</p>
          <p className="text-sm">Phone: +91 9876543210</p>
          <div className="mt-2 flex gap-4">
            <Link href="#" className="hover:underline">Facebook</Link>
            <Link href="#" className="hover:underline">Twitter</Link>
            <Link href="#" className="hover:underline">Instagram</Link>
          </div>
        </div>
      </div>
      <p className="text-center mt-4 text-sm">
        © {new Date().getFullYear()} Raithu Mithra Seeds. All Rights Reserved.
      </p>
    </footer>
  );
}
