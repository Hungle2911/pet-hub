import { useEffect, useState } from "react";
import api from "../api/axios.config";
import AppointmentRequest from "../components/Appointment/AppointmentRequest";

import { useAuth0 } from "@auth0/auth0-react";
import UpcomingAppointment from "../components/Appointment/UpcomingAppointment";

const SitterAppointment = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [appointmentData, setAppointmentData] = useState();
  // const [isSelected, setIsSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const fetchRequestAppointment = async () => {
    const token = await getAccessTokenSilently();
    try {
      const response = await api.get("/appointment/request", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response.data);
      setIsLoading(false);
      setAppointmentData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchRequestAppointment();
  }, []);
  const fetchUpcomingAppointment = async () => {
    const token = await getAccessTokenSilently();
    setIsLoading(true);
    try {
      const response = await api.get("/appointment/upcoming", {
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
  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <>
      <div className=" flex">
        <div className="flex flex-col m-4">
          <div className="bg-orange" onClick={fetchUpcomingAppointment}>
            Appointment Request
          </div>
          <div>Upcoming Appointment</div>
        </div>
        <div className="m-4">
          <AppointmentRequest data={appointmentData} />
          <UpcomingAppointment data={appointmentData} />
        </div>
      </div>
    </>
  );
};

export default SitterAppointment;
