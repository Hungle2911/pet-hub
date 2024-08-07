import { Link } from "react-router-dom";
import LogOutButton from "./Auth/LogOutButton";
import LoginButton from "./Auth/LoginButton";
import SignUpButton from "./Auth/SignUpButton";
import Logo from "./Logo";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import api from "../api/axios.config";
import axios from "axios";

const NavBar = () => {
  const { isAuthenticated, user } = useAuth0();
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const checkUserInfo = async () => {
      if (isAuthenticated) {
        try {
          const response = await api.get("/user/info");
          response.data && setIsRegistered(true);
        } catch (error) {
          if (axios.isAxiosError(error) && error.response?.status === 404) {
            setIsRegistered(false);
          } else {
            console.error("Error checking user info:", error);
          }
        }
      }
    };

    checkUserInfo();
  }, [isAuthenticated]);

  return (
    <nav className="bg-gray-100">
      <div className="mx-4 md:mx-20 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-2 md:space-y-4">
          <div className="flex space-x-2 md:space-x-4">
            {isAuthenticated ? (
              <LogOutButton />
            ) : (
              <>
                <SignUpButton />
                <LoginButton />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;