import { useAuth0 } from "@auth0/auth0-react";

const LogOutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      onClick={() => logout()}
      className="bg-off-white text-grey py-1 px-2 md:py-2 md:px-4 rounded border border-grey-500 text-sm md:text-base"
    >
      Logout
    </button>
  );
};

export default LogOutButton;