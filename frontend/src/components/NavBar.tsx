import { Link, useNavigate } from "react-router-dom";
import LogOutButton from "./Auth/LogOutButton";
import LoginButton from "./Auth/LoginButton";
import SignUpButton from "./Auth/SignUpButton";
import Logo from "./Logo";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import api from "../api/axios.config";

interface UserInfo {
  first_name: string;
  role: "OWNER" | "PET_SITTER";
}

const NavBar = () => {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserInfo = async () => {
      if (isAuthenticated && !isLoading) {
        try {
          const token = await getAccessTokenSilently();
          const response = await api.get("/user/info", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUserInfo(response.data);
          if (!response.data) {
            navigate("/sign-up");
          }
        } catch (error) {
          console.error("Error checking user info:", error);
        }
      }
    };

    checkUserInfo();
  }, [isAuthenticated, isLoading, getAccessTokenSilently, navigate]);

  return (
    <nav className="bg-gray-100 navbar-container">
      <div className="mx-4 md:mx-20 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="flex space-x-4">
          {isAuthenticated ? (
            <>
              {userInfo && (
                <span className="mr-4">Hello, {userInfo.first_name}</span>
              )}
              {userInfo?.role === "PET_SITTER" && (
                <Link to="/sitter-profile/edit" className="mr-4">
                  Update Sitter Info
                </Link>
              )}
              <Link to="/appointment" className="mr-4">
                My Appointment
              </Link>
              <LogOutButton />
            </>
          ) : (
            <>
              <SignUpButton />
              <LoginButton />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
