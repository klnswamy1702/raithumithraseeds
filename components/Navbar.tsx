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
    <header className="w-full shadow-md border-b border-green-200">
      {/* 🔹 Top Color Stripe */}
      <div className="w-full h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500" />

      {/* 🔹 Compact Top Row */}
      <div className="bg-white">
        <div className="container mx-auto flex items-center justify-between px-3 py-1">
          {/* Left: Logo + Title
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Raithu Mithra Logo"
              width={70}
              height={70}
              priority
              className="object-contain"
            />
            <span className="text-xl sm:text-2xl font-extrabold text-black tracking-wide">
              Raithu Mithra 
              <div className="text-xs text-gray-500">
                CSL 460
              </div>
            </span>
          </div> */}
           <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition">
            <Image
                src={logo}
                alt="Raithu Mithra Logo"
                width={70}
                height={70}
                priority
                className="object-contain"
            />
            <div className="text-xl sm:text-2xl font-extrabold text-black tracking-wide">
                Raithu Mithra 
                <div className="text-xs text-gray-500 font-normal">
                CSL 460
                </div>
            </div>
            </Link>


          {/* Right: Hamburger / Social Icons */}
          <div className="flex items-center">
            {/* Hamburger Icon (Mobile) */}
            <div className="sm:hidden">
              <button
                onClick={toggleMenu}
                className="text-3xl text-black focus:outline-none"
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Social Icons (Desktop) */}
            <div className="hidden sm:flex space-x-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-2 hover:bg-red-100 transition-transform duration-300 hover:scale-110"
              >
                <FaFacebookF className="text-xl text-black" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-2 hover:bg-red-100 transition-transform duration-300 hover:scale-110"
              >
                <FaInstagram className="text-xl text-black" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-2 hover:bg-red-100 transition-transform duration-300 hover:scale-110"
              >
                <FaYoutube className="text-xl text-black" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Navigation Bar (Glossy Green) */}
      <nav className="bg-green-600/70 backdrop-blur-md">
        <div className="container mx-auto px-4 py-2">
          {/* Desktop Menu */}
          <div className="hidden sm:flex justify-center gap-6 text-base font-medium text-white">
            <Link href="/" className="hover:text-yellow-300 transition-all duration-200">Home</Link>
            <Link href="/about" className="hover:text-yellow-300 transition-all duration-200">About</Link>
            <Link href="/infrastructure" className="hover:text-yellow-300 transition-all duration-200">Infrastructure</Link>
            <Link href="/gallery" className="hover:text-yellow-300 transition-all duration-200">Gallery</Link>
            <Link href="/contact" className="hover:text-yellow-300 transition-all duration-200">Contact Us</Link>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="sm:hidden mt-2 flex flex-col items-start gap-3 text-base font-medium text-white">
              <Link href="/" onClick={closeMenu} className="hover:text-yellow-300">Home</Link>
              <Link href="/about" onClick={closeMenu} className="hover:text-yellow-300">About</Link>
              <Link href="/infrastructure" onClick={closeMenu} className="hover:text-yellow-300">Infrastructure</Link>
              <Link href="/gallery" onClick={closeMenu} className="hover:text-yellow-300">Gallery</Link>
              <Link href="/contact" onClick={closeMenu} className="hover:text-yellow-300">Contact Us</Link>

              {/* Social Icons (Mobile) */}
              <div className="flex space-x-3 pt-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-full p-2 hover:bg-red-100 transition-transform duration-300 hover:scale-110"
                >
                  <FaFacebookF className="text-xl text-black" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-full p-2 hover:bg-red-100 transition-transform duration-300 hover:scale-110"
                >
                  <FaInstagram className="text-xl text-black" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-full p-2 hover:bg-red-100 transition-transform duration-300 hover:scale-110"
                >
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
