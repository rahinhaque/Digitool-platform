import React from 'react';
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] pt-20 pb-10">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          
          {/* Brand & Description - Takes 2 columns */}
          <div className="lg:col-span-2 pr-4">
            <h2 className="text-[2rem] font-bold text-white mb-6 tracking-tight">
              DigiTools
            </h2>
            <p className="text-gray-400 text-[14.5px] leading-[1.65] max-w-[280px]">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product Links */}
          <div className="lg:ml-4">
            <h3 className="text-white font-semibold mb-6 text-[15px]">Product</h3>
            <ul className="space-y-4">
              {['Features', 'Pricing', 'Templates', 'Integrations'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white text-[14px] transition-colors cursor-pointer">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-[15px]">Company</h3>
            <ul className="space-y-4">
              {['About', 'Blog', 'Careers', 'Press'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white text-[14px] transition-colors cursor-pointer">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-[15px]">Resources</h3>
            <ul className="space-y-4">
              {['Documentation', 'Help Center', 'Community', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white text-[14px] transition-colors cursor-pointer">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-[15px]">Social Links</h3>
            <div className="flex items-center gap-3">
              <a href="#instagram" className="w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center text-[#0f172a] hover:bg-gray-200 transition-colors cursor-pointer shadow-sm mt-0.5" aria-label="Instagram">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#facebook" className="w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center text-[#0f172a] hover:bg-gray-200 transition-colors cursor-pointer shadow-sm mt-0.5" aria-label="Facebook">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#twitter" className="w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center text-[#0f172a] hover:bg-gray-200 transition-colors cursor-pointer shadow-sm mt-0.5" aria-label="X Twitter">
                <FaXTwitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-[14px]">
            &copy; 2026 Digitools. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#privacy" className="text-gray-400 hover:text-white text-[14px] transition-colors cursor-pointer">Privacy Policy</a>
            <a href="#terms" className="text-gray-400 hover:text-white text-[14px] transition-colors cursor-pointer">Terms of Service</a>
            <a href="#cookies" className="text-gray-400 hover:text-white text-[14px] transition-colors cursor-pointer">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
