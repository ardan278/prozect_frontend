'use client';

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold">MyApp</a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="/about" className="hover:text-gray-300">About</a>
            <a href="/contact" className="hover:text-gray-300">Contact</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-blue-700">
          <a href="/" className="block hover:text-gray-300">Home</a>
          <a href="/about" className="block hover:text-gray-300">About</a>
          <a href="/contact" className="block hover:text-gray-300">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;