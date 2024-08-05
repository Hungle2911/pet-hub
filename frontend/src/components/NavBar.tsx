import { Link, useNavigate } from "react-router-dom";
import LogOutButton from "./Auth/LogOutButton";
import LoginButton from "./Auth/LoginButton";
import SignUpButton from "./Auth/SignUpButton";
import Logo from "./Logo";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import api from "../api/axios.config";
import axios from "axios";

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
        } catch (error) {
          if (axios.isAxiosError(error) && error.response?.status === 404) {
            navigate("/user-info-form");
          } else {
            console.error("Error checking user info:", error);
          }
        }
      }
    };

    checkUserInfo();
  }, [isAuthenticated]);
  return (
    <nav>
      <div className=" mx-20 flex items-center justify-around">
        <div className="flex items-center mx">
          <Link to={"/"}>
            <Logo />
          </Link>
          <Link to={"/search"} className="mx-4">
            Search
          </Link>
        </div>
        <div>
          {isAuthenticated ? (
            <>
              {userInfo && (
                <span className="mr-4">Hello, {userInfo.first_name}</span>
              )}
              {userInfo?.role === "PET_SITTER" && (
                <Link to="/pet-sitter-form" className="mr-4">
                  Update Sitter Info
                </Link>
              )}
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
