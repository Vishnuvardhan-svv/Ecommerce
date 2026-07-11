import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center py-6 border-t border-gray-300">
        <div>
          <img src={assets.logo} alt="Logo" className="h-8" />
          
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0 text-gray-600 text-sm">
          <a href="/about" className="hover:text-gray-800">About</a>
          <a href="/contact" className="hover:text-gray-800">Contact</a>
          <a href="/privacy-policy" className="hover:text-gray-800">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-gray-800">Terms of Service</a>
        </div>
        <div>
          <p>GET IN TOUCH</p>
          <ul className="flex flex-col sm:flex-row gap-4 mt-2 text-gray-600 text-sm">
            <li>+91 900-900-9900</li>
            <li>forever@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="text-gray-600 text-sm mt-4 sm:mt-0">
        &copy; 2026 Forever Company. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
