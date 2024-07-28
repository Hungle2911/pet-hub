import LoginButton from "./Auth/LoginButton";
import SignUpButton from "./Auth/SignUpButton";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <nav>
      <div className=" mx-20 flex items-center justify-around">
        <div>
          <Logo />
        </div>
        <div>
          <SignUpButton />
          <LoginButton />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
