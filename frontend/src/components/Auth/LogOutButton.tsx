import { useAuth0 } from "@auth0/auth0-react";

const LogOutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      onClick={() => logout()}
      className="bg-black text-white py-2 px-4 rounded"
    >
      Logout
    </button>
  );
};

export default LogOutButton;
