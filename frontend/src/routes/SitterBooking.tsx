import { useParams } from "react-router-dom";
import api from "../api/axios.config";
import { useEffect } from "react";

const SitterBooking = () => {
  const { sitterId } = useParams();
  console.log(sitterId);
  const getSitterInfo = async () => {
    try {
      const response = await api.get(`/cat-sitters/profile/${sitterId}`);
      console.log(response.data);
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
      <p className="text-lg">Address: 761 College Street, ON, M9Z 3N5</p>
      <p className="text-lg">Experience: 5 years</p>
      <p className="text-lg">Rates: $20/hour</p>
      <p className="text-lg">Description:</p>
      <span className="text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
        recusandae maiores sapiente perspiciatis nihil doloribus vero laborum
        accusamus iste necessitatibus. Sequi, rerum illum. Repellat aut suscipit
        explicabo, sapiente non necessitatibus.
      </span>
      <p className="text-lg">Reviews: 4.9 stars</p>
      <button>Book an appointment</button>
    </div>
  );
};

export default SitterBooking;
