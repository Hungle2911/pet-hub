import api from "../../api/axios.config";
import { useAuth0 } from "@auth0/auth0-react";
import { ConfirmButtonProps } from "../../types/types";
const ConfirmButton = ({ id, onConfirm }: ConfirmButtonProps) => {
  const { getAccessTokenSilently } = useAuth0();
  const onClick = async () => {
    const token = await getAccessTokenSilently();
    try {
      const response = await api.put(
        "/appointment/confirm",
        {
          id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      onConfirm(id);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button
      className="text-white bg-gradient-to-r from-pink via-pink-500 to-soft-pink hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      onClick={onClick}
    >
      Confirm
    </button>
  );
};

export default ConfirmButton;
