import React from "react";
import { Link } from "react-router-dom";
import NavbarDropdown from "./NavbarDropdown.jsx";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Brand */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Ecommerce
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-base font-medium">
          <Link to="/" className="hover:text-cta transition">Home</Link>
          <Link to="/products" className="hover:text-cta transition">Products</Link>
          <Link to="/cart" className="hover:text-cta transition">Cart</Link>
        </div>

        {/* Always show Dropdown */}
        <div className="flex items-center gap-6">
          <NavbarDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
