import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() => loginWithRedirect()}
      className="bg-orange text-white py-2 px-4 rounded"
    >
      Login
    </button>
  );
};

export default LoginButton;
