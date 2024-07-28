import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Link to="/login" className="bg-orange text-white py-2 px-4 rounded">
      Login
    </Link>
  );
};

export default LoginButton;
