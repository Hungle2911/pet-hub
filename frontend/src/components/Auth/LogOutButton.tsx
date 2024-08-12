import { useAuth0 } from "@auth0/auth0-react";

const LogOutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      onClick={() => logout()}
      className="text-black hover:text-white border border-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-pink font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-black dark:hover:text-off-white dark:hover:bg-black dark:focus:ring-pink"
    >
      Logout
    </button>
  );
};

export default LogOutButton;
