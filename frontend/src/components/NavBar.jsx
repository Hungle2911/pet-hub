import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Feline Good
        </Link>
        <div className="flex space-x-4">
          <Link to="/login" className="text-gray-800">
            Login
          </Link>
          <Link to="/register" className="text-gray-800">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
