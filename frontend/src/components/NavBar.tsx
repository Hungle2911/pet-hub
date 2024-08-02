import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  const isAuthenticated = document.cookie.includes("user_id=");

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="mx-20 flex items-center justify-between">
        <div>
          <Logo />
        </div>
        <div className="flex space-x-4">
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="text-blue-500 hover:text-blue-700">
                Login
              </Link>
              <Link
                to="/userinfo"
                className="text-green-500 hover:text-green-700"
              >
                Register
              </Link>
            </>
          ) : (
            <Link to="/logout" className="text-red-500 hover:text-red-700">
              Logout
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
