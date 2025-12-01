import React from 'react';
import { FaInstagram, FaHeart, FaPaperPlane, FaPlusSquare } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800 px-4 md:px-8 h-16 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <FaInstagram size={28} className="text-white" />
        <span className="text-white font-bold text-lg">InstaClone</span>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-4">
        <FaPlusSquare
          size={24}
          className="text-white cursor-pointer hover:opacity-80"
          title="Add Status"
          onClick={() => alert('Add new status')}
        />
        <FaHeart size={24} className="text-white cursor-pointer hover:opacity-80" />
        <FaPaperPlane size={24} className="text-white cursor-pointer hover:opacity-80" />
      </div>
    </nav>
  );
}
