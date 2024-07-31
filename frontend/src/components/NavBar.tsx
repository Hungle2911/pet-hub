import { Link } from "react-router-dom";
import LoginButton from "./Auth/LoginButton";
import SignUpButton from "./Auth/SignUpButton";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <nav>
      <div className=" mx-20 flex items-center justify-around">
        <div className="flex items-center mx">
          <Logo />
          <Link to={"/search"} className="mx-4">
            Seach
          </Link>
        </div>
        <div>
          <>
            <SignUpButton /> <LoginButton />
          </>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
