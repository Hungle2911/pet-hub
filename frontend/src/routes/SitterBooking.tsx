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
      <div className="max-w-2xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-xl border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-200 pb-2">
          Cat Sitter Profile
        </h2>
        <div className="space-y-6">
          <div>
            <span className="block text-2xl font-semibold mb-1">
              {sitterInfo?.user.first_name} {sitterInfo?.user.last_name}
            </span>
            <p className="text-lg flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {sitterInfo?.user.location}
            </p>
          </div>
          <div className="p-4 rounded-md">
            <p className="text-lg font-semibold mb-2">Description:</p>
            <p className="text-lg italic">"{sitterInfo?.user.description}"</p>
          </div>
          <div className=" border-t border-b border-pink p-4 rounded-md">
            <p className="text-lg">
              <span className="font-bold">Experience:</span>
            </p>
            <p className="text-lg">{sitterInfo?.experience}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg">
              <span className="font-medium">Rates:</span>
            </p>
            <p className="text-xl font-semibold">${sitterInfo?.rate}/night</p>
          </div>
          {/* <p className="text-lg">Reviews: 4.9 stars</p> */}
          <button
            className="w-full bg-transparent text-pink py-2 px-4 rounded-full border-2 border-pink hover:bg-pink hover:text-white"
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
