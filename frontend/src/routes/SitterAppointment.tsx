import { useEffect, useState } from "react";
import api from "../api/axios.config";
import AppointmentRequest from "../components/Appointment/AppointmentRequest";

import { useAuth0 } from "@auth0/auth0-react";

const SitterAppointment = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [appointmentData, setAppointmentData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const fetchRequestAppointment = async () => {
    const token = await getAccessTokenSilently();
    try {
      const response = await api.get("/appointment", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setIsLoading(false);
      setAppointmentData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchRequestAppointment();
  }, []);
  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <>
      <div className=" flex">
        <div className="flex flex-col m-4">
          <div className="bg-orange">Appointment Request</div>
          <div>Upcoming Appointment</div>
        </div>
        <div className="m-4">
          <AppointmentRequest data={appointmentData} />
        </div>
      </div>
    </>
  );
};

export default SitterAppointment;
