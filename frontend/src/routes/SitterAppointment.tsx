import { useEffect, useState } from "react";
import api from "../api/axios.config";
import AppointmentRequest from "../components/Appointment/AppointmentRequest";
import { useAuth0 } from "@auth0/auth0-react";
import UpcomingAppointment from "../components/Appointment/UpcomingAppointment";
import Loading from "../components/Loading/Loading";

const SitterAppointment = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [appointmentData, setAppointmentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"request" | "upcoming">("request");
  const [userType, setUserType] = useState<"owner" | "sitter" | null>(null);

  useEffect(() => {
    const determineUserType = async () => {
      const token = await getAccessTokenSilently();
      try {
        const response = await api.get("/user/info", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setUserType(response.data.role === "OWNER" ? "owner" : "sitter");
      } catch (error) {
        console.error("Error fetching user type:", error);
      }
    };

    determineUserType();
  }, [getAccessTokenSilently]);

  const fetchAppointments = async (type: "request" | "upcoming") => {
    if (!userType) return; // Don't fetch if user type is not determined yet
    setIsLoading(true);
    const token = await getAccessTokenSilently();
    try {
      const response = await api.get(`/appointment/${type}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAppointmentData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userType) {
      fetchAppointments(activeTab);
    }
  }, [activeTab, userType]);

  if (isLoading || userType === null) {
    return <Loading />;
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-pink-100 rounded-lg shadow-lg border-2 border-pink-400">
      <div className="flex mb-4">
        <button
          className={`mr-2 px-4 py-2 rounded-full transition-transform transform hover:scale-105 shadow-lg ${
            activeTab === "request"
              ? "bg-pink text-white"
              : "bg-transparent border-2 border-pink text-pink"
          }`}
          onClick={() => setActiveTab("request")}
        >
          Appointment Requests
        </button>
        <button
          className={`px-4 py-2 rounded-full transition-transform transform hover:scale-105 shadow-lg ${
            activeTab === "upcoming"
              ? "bg-pink text-white"
              : "bg-transparent border-2 border-pink text-pink"
          }`}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming Appointments
        </button>
      </div>
      <div className="bg-white shadow-md rounded p-4">
        {activeTab === "request" ? (
          <AppointmentRequest data={appointmentData} userType={userType} />
        ) : (
          <UpcomingAppointment data={appointmentData} userType={userType} />
        )}
      </div>
    </div>
  );
};

export default SitterAppointment;
