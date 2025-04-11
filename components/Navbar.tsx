'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

import logo from '../public/images/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="w-full shadow-md">
      {/* 🔹 Elegant Green Gradient Background */}
      <div className="relative h-24 sm:h-28 bg-gradient-to-r from-green-100 to-green-300">
        {/* Optional soft white overlay */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-0" />

        {/* Top Row Content */}
        <div className="relative z-10 h-full flex items-center justify-between px-4 container mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
            <Image
              src={logo}
              alt="Raithu Mithra Logo"
              width={80}
              height={80}
              priority
              className="object-contain sm:w-[90px] sm:h-[90px]"
            />
            <div className="text-xl sm:text-2xl font-extrabold text-black tracking-wide leading-tight">
              Raithu Mithra
              <div className="text-xs sm:text-sm text-gray-700 font-normal">
                ISO 9001:2008
              </div>
            </div>
          </Link>

          {/* Socials & Hamburger */}
          <div className="flex items-center space-x-3">
            {/* Social Icons */}
            <div className="hidden sm:flex space-x-2">
              <a href="https://www.instagram.com/raithumithra_seeds/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 hover:bg-green-100 transition-transform duration-300 hover:scale-110">
                <FaFacebookF className="text-xl text-black" />
              </a>
              <a href="https://www.instagram.com/raithumithra_seeds/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 hover:bg-green-100 transition-transform duration-300 hover:scale-110">
                <FaInstagram className="text-xl text-black" />
              </a>
              <a href="https://www.youtube.com/@Raithumithraseeds" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 hover:bg-green-100 transition-transform duration-300 hover:scale-110">
                <FaYoutube className="text-xl text-black" />
              </a>
            </div>

            {/* Hamburger Icon */}
            <div className="sm:hidden">
              <button
                onClick={toggleMenu}
                className="text-3xl text-black focus:outline-none"
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Navigation Row */}
      <nav className="bg-green-200 text-green-900">
        <div className="container mx-auto px-4 py-2">
          <div className="hidden sm:flex justify-center gap-6 text-base font-medium">
            <Link href="/" className="hover:text-green-700 transition-all duration-200">Home</Link>
            <Link href="/about" className="hover:text-green-700 transition-all duration-200">About</Link>
            <Link href="/infrastructure" className="hover:text-green-700 transition-all duration-200">Infrastructure</Link>
            <Link href="/product-catalogue" className="hover:text-green-700 transition-all duration-200">Products</Link>
            <Link href="/contact" className="hover:text-green-700 transition-all duration-200">Contact Us</Link>
          </div>

          {/* Mobile Nav */}
          {menuOpen && (
            <div className="sm:hidden mt-2 flex flex-col items-start gap-3 text-base font-medium">
              <Link href="/" onClick={closeMenu} className="hover:text-green-700">Home</Link>
              <Link href="/about" onClick={closeMenu} className="hover:text-green-700">About</Link>
              <Link href="/infrastructure" onClick={closeMenu} className="hover:text-green-700">Infrastructure</Link>
              <Link href="/product-catalogue" onClick={closeMenu} className="hover:text-green-700">Products</Link>
              <Link href="/contact" onClick={closeMenu} className="hover:text-green-700">Contact Us</Link>

              {/* Mobile Social Icons */}
              <div className="flex space-x-3 pt-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 hover:bg-green-100 transition-transform duration-300 hover:scale-110">
                  <FaFacebookF className="text-xl text-black" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 hover:bg-green-100 transition-transform duration-300 hover:scale-110">
                  <FaInstagram className="text-xl text-black" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 hover:bg-green-100 transition-transform duration-300 hover:scale-110">
                  <FaYoutube className="text-xl text-black" />
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
