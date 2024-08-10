import api from "../../api/axios.config";
import { useAuth0 } from "@auth0/auth0-react";
const RejectButton = ({ id }: { id: number }) => {
  const { getAccessTokenSilently } = useAuth0();
  const onClick = async () => {
    const token = await getAccessTokenSilently();
    try {
      const response = await api.put(
        "/appointment/reject",
        {
          id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button
      className="px-4 py-2 bg-red text-white rounded-lg hover:bg-red-600 transition"
      onClick={onClick}
    >
      Reject
    </button>
  );
};

export default RejectButton;
