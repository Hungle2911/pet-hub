import { useParams } from "react-router-dom";
import api from "../api/axios.config";
import { useEffect, useState } from "react";
import { CatSitter } from "../types/types";

const SitterBooking = () => {
  const { sitterId } = useParams();
  const [sitterInfo, setSitterInfo] = useState<CatSitter>();
  const getSitterInfo = async () => {
    try {
      const response = await api.get(`/cat-sitters/profile/${sitterId}`);
      setSitterInfo(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getSitterInfo();
  }, [sitterId]);
  return (
    <div className="container mx-auto px-6 py-4">
      <h2 className="text-2xl font-bold">Cat Sitter Profile</h2>
      <span className="text-lg">
        {sitterInfo?.user.first_name} {sitterInfo?.user.last_name}
      </span>
      <p className="text-lg">Address: {sitterInfo?.user.location}</p>
      <p className="text-lg">Description:</p>
      <span className="text-lg">{sitterInfo?.user.description}</span>
      <p className="text-lg">Experience: {sitterInfo?.experience}</p>
      <p className="text-lg">Rates: ${sitterInfo?.rate}/night</p>
      {/* <p className="text-lg">Reviews: 4.9 stars</p> */}
      <button className="w-full bg-dark-orange text-white p-2 rounded hover:bg-blue-600">
        Book an appointment
      </button>
    </div>
  );
};

export default SitterBooking;
