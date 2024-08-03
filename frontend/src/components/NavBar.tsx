import LogOutButton from "./Auth/LogOutButton";
import LoginButton from "./Auth/LoginButton";
import SignUpButton from "./Auth/SignUpButton";
import Logo from "./Logo";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <nav>
      <div className=" mx-20 flex items-center justify-around">
        <div>
          <Logo />
        </div>
        <div>
          {isAuthenticated ? (
            <LogOutButton />
          ) : (
            <>
              <SignUpButton /> <LoginButton />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
