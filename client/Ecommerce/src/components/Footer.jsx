import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300 pt-16 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Column 1 */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">Ecommerce</h2>
          <p className="text-gray-400 text-sm leading-6">
            Premium lifestyle products for everyone — quality you can trust,
            pricing you'll love.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Shop</h3>
          <ul className="space-y-2">
            <li><Link to="/products" className="hover:text-white transition">All Products</Link></li>
            <li><Link to="/products" className="hover:text-white transition">Electronics</Link></li>
            <li><Link to="/products" className="hover:text-white transition">Clothing</Link></li>
            <li><Link to="/products" className="hover:text-white transition">Home Decor</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Account</h3>
          <ul className="space-y-2">
            <li><Link to="/profile" className="hover:text-white transition">Profile</Link></li>
            <li><Link to="/order-history" className="hover:text-white transition">Order History</Link></li>
            <li><Link to="/cart" className="hover:text-white transition">Cart</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Stay Updated</h3>
          <p className="text-gray-400 text-sm mb-4">Get special offers and product updates</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter email"
              className="px-4 py-2 bg-[#2A2A2A] rounded-md text-sm text-gray-300 focus:outline-none w-full"
            />
            <button className="bg-cta hover:bg-[#e00062] px-4 py-2 rounded-md text-white text-sm transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 mb-6"></div>

      {/* Social + Copyright */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex gap-5 text-xl">
          <FaFacebook className="hover:text-white cursor-pointer transition" />
          <FaInstagram className="hover:text-white cursor-pointer transition" />
          <FaTwitter className="hover:text-white cursor-pointer transition" />
          <FaLinkedin className="hover:text-white cursor-pointer transition" />
        </div>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Ecommerce — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
