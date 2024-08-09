import { useParams } from "react-router-dom";
import api from "../api/axios.config";
import { useEffect, useState } from "react";
import { CatSitter } from "../types/types";
import BookingCalendarModal from "../components/Booking/Calendar";
import { useAuth0 } from "@auth0/auth0-react";

const SitterBooking = () => {
  const { sitterId } = useParams();
  const [sitterInfo, setSitterInfo] = useState<CatSitter>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const getSitterInfo = async () => {
    try {
      const response = await api.get(`/cat-sitters/profile/${sitterId}`);
      setSitterInfo(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onClick = () => {
    if (isAuthenticated) {
      setShowModal(true);
    } else {
      loginWithRedirect();
    }
  };

  useEffect(() => {
    getSitterInfo();
  }, [sitterId]);

  return (
    <>
      {showModal && (
        <BookingCalendarModal
          onClose={() => setShowModal(false)}
          sitterInfo={sitterInfo!}
        />
      )}
      <div className="max-w-2xl mx-auto mt-8 p-6 bg-pink-100 rounded-lg shadow-lg border-2 border-pink-400">
        <h2 className="text-2xl font-bold mb-6 text-custom-blue-500">
          Cat Sitter Profile
        </h2>
        <div className="space-y-4">
          <span className="block text-lg font-bold text-gray-700">
            {sitterInfo?.user.first_name} {sitterInfo?.user.last_name}
          </span>
          <p className="text-lg text-gray-700">
            Address: {sitterInfo?.user.location}
          </p>
          <p className="text-lg text-gray-700">Description:</p>
          <span className="block text-lg text-gray-700">
            {sitterInfo?.user.description}
          </span>
          <p className="text-lg text-gray-700">
            Experience: {sitterInfo?.experience}
          </p>
          <p className="text-lg text-gray-700">
            Rates: ${sitterInfo?.rate}/night
          </p>
          {/* <p className="text-lg">Reviews: 4.9 stars</p> */}
          <button
            className="w-full bg-transparent text-pink py-2 px-4 rounded-full border-2 border-pink hover:bg-pink hover:text-white transition-transform transform hover:scale-105 shadow-lg"
            onClick={onClick}
          >
            Book an appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default SitterBooking;