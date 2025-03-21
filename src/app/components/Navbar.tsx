'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container-custom mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#8b0000]">
            Raj Palace
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#8b0000] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#8b0000] transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-[#8b0000] transition-colors">
              Services
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-[#8b0000] transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#8b0000] transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-[#8b0000] transition-colors"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-[#8b0000] transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-[#8b0000] transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-gray-700 hover:text-[#8b0000] transition-colors"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className="block px-3 py-2 text-gray-700 hover:text-[#8b0000] transition-colors"
                onClick={toggleMenu}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-[#8b0000] transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 