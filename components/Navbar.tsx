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

      {/* 🔹 Background Section */}
      <div
        className="relative h-24 sm:h-28 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1592853625602-b0a3fd0b71c0')",
        }}
      >
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-0" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-between px-4 container mx-auto">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition">
            <Image
              src={logo}
              alt="Raithu Mithra Logo"
              width={60}
              height={60}
              priority
              className="object-contain"
            />
            <div className="text-lg sm:text-xl font-extrabold text-black tracking-wide">
              Raithu Mithra
              <div className="text-xs text-gray-600 font-normal">
                CSL 460
              </div>
            </div>
          </Link>

          {/* Socials & Hamburger */}
          <div className="flex items-center space-x-3">

            {/* Social Icons */}
            <div className="hidden sm:flex space-x-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 hover:bg-red-100 transition-transform duration-300 hover:scale-110">
                <FaFacebookF className="text-xl text-black" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 hover:bg-red-100 transition-transform duration-300 hover:scale-110">
                <FaInstagram className="text-xl text-black" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 hover:bg-red-100 transition-transform duration-300 hover:scale-110">
                <FaYoutube className="text-xl text-black" />
              </a>
            </div>

            {/* Hamburger */}
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

      {/* 🔹 Navigation Bar */}
      <nav className="bg-green-600/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-2">
          {/* Desktop Nav */}
          <div className="hidden sm:flex justify-center gap-6 text-base font-medium text-white">
            <Link href="/" className="hover:text-yellow-300 transition-all duration-200">Home</Link>
            <Link href="/about" className="hover:text-yellow-300 transition-all duration-200">About</Link>
            <Link href="/infrastructure" className="hover:text-yellow-300 transition-all duration-200">Infrastructure</Link>
            <Link href="/product-catalogue" className="hover:text-yellow-300 transition-all duration-200">Our Products</Link>
            <Link href="/contact" className="hover:text-yellow-300 transition-all duration-200">Contact Us</Link>
          </div>

          {/* Mobile Nav */}
          {menuOpen && (
            <div className="sm:hidden mt-2 flex flex-col items-start gap-3 text-base font-medium text-white">
              <Link href="/" onClick={closeMenu} className="hover:text-yellow-300">Home</Link>
              <Link href="/about" onClick={closeMenu} className="hover:text-yellow-300">About</Link>
              <Link href="/infrastructure" onClick={closeMenu} className="hover:text-yellow-300">Infrastructure</Link>
              <Link href="/gallery" onClick={closeMenu} className="hover:text-yellow-300">Gallery</Link>
              <Link href="/contact" onClick={closeMenu} className="hover:text-yellow-300">Contact Us</Link>

              {/* Social Icons (Mobile) */}
              <div className="flex space-x-3 pt-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 hover:bg-red-100 transition-transform duration-300 hover:scale-110">
                  <FaFacebookF className="text-xl text-black" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 hover:bg-red-100 transition-transform duration-300 hover:scale-110">
                  <FaInstagram className="text-xl text-black" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 hover:bg-red-100 transition-transform duration-300 hover:scale-110">
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
