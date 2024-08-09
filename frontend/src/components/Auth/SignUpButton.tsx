import { useNavigate } from "react-router-dom";

const SignUpButton = () => {
  const navigate = useNavigate();

    const handleSignUp = () => {
      navigate("/sign-up");
    };

  return (
    <button
      onClick={handleSignUp}
      className="bg-off-white text-grey py-1 px-2 md:py-2 md:px-4 rounded border border-grey-500 text-sm md:text-base"
    >
      Sign Up
    </button>
  );
};

export default SignUpButton;
