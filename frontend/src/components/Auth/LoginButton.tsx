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
      className="bg-off-white text-grey py-1 px-2 md:py-2 md:px-4 rounded border border-grey-500 text-sm md:text-base"
    >
      Login
    </button>
  );
};

export default LoginButton;

