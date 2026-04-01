import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = ({  cartItems }) => {
  const navLinks = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-bold bg-linear-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent select-none"
          >
            DigiTools
          </a>

          {/* Center Nav Links - Hidden on mobile */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-600 hover:text-purple-600 text-sm font-medium transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Cart Icon */}
            <button
              className="text-gray-600 hover:text-purple-600 transition-colors duration-200 relative cursor-pointer"
              aria-label="Cart"
            >
              <FiShoppingCart className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>

            {/* Login */}
            <a
              href="#login"
              className="text-gray-700 hover:text-purple-600 text-sm font-medium transition-colors duration-200"
            >
              Login
            </a>

            {/* Get Started Button */}
            <a
              href="#get-started"
              className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors duration-200"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost"
                aria-label="Open menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-56 p-4 shadow-lg border border-gray-100"
              >
                {navLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-600 hover:text-purple-600"
                    >
                      {link}
                    </a>
                  </li>
                ))}
                <li className="mt-2 border-t border-gray-100 pt-2">
                  <a
                    href="#login"
                    className="text-gray-600 flex items-center gap-2"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="#cart"
                    className="text-gray-600 flex items-center gap-2"
                  >
                    <FiShoppingCart className="w-4 h-4" /> Cart
                    {cartItems.length > 0 && (
                      <span className="bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ml-auto">
                        {cartItems.length}
                      </span>
                    )}
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#get-started"
                    className="bg-linear-to-r from-purple-600 to-violet-500 text-white hover:bg-purple-700 rounded-full text-center justify-center"
                  >
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;