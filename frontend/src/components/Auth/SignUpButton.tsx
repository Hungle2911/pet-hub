import { Link } from "react-router-dom";

const SignUpButton = () => {
  return (
    <Link
      to={"/sign-up"}
      className="bg-orange text-white py-2 px-4 mx-3 rounded"
    >
      Sign Up
    </Link>
  );
};

export default SignUpButton;
