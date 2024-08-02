import Logo from "./Logo/";

const NavBar = () => {
  return (
    <nav>
      <div className=" mx-20 flex items-center justify-around">
        <div>
          <Logo />
        </div>
        <div>Nav right</div>
      </div>
    </nav>
  );
};

export default NavBar;
