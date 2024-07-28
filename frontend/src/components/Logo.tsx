import logo from "../assets/Feline_good_logo.png";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img src={logo} alt="Logo" className="w-20"></img>
      <h1 className="text-2xl font-playwrite">
        Feline <span className="text-dark-orange">Good</span>
      </h1>
    </div>
  );
};

export default Logo;
