import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      {/* Logo */}
      <div>
        <img src="" alt="Logo" className="w-12 h-12 object-contain" />
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-8 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-blue-600 transition-colors">
            Home
          </li>
          <li className="cursor-pointer hover:text-blue-600 transition-colors">
            About
          </li>
          <li className="cursor-pointer hover:text-blue-600 transition-colors">
            Services
          </li>
          <li className="cursor-pointer hover:text-blue-600 transition-colors">
            Blog
          </li>
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Contact
          </button>
        </ul>
      </nav>

      {/* Icon */}
      <div className="text-2xl cursor-pointer">☰</div>
    </header>
  );
};

export default Header;
