import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  // const handleLogin = () => {
  //   loginWithRedirect({
  //     appState: {
  //       returnTo: "/sign-up",
  //     },
  //   });
  // };
  return (
    <button
      onClick={() => loginWithRedirect()}
      className="text-white bg-gradient-to-r from-soft-pink to-pink hover:bg-gradient-to-l focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
    >
      Login
    </button>
  );
};

export default LoginButton;
