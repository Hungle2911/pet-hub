import { useState } from "react";
import { formatDate } from "../../utilities/date_converter";
import { Appointment } from "../../types/types";

interface UpcomingAppointmentProps {
  data: any[];
  userType: "owner" | "sitter";
}

const UpcomingAppointment = ({ data, userType }: UpcomingAppointmentProps) => {
  const [appointments, setAppointments] = useState<Appointment[]>(
    data.sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    )
  );
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
      {appointments.length === 0 ? (
        <p>No upcoming appointments.</p>
      ) : (
        <ul className="space-y-6">
          {appointments.map((appointment) => (
            <li
              key={appointment.id}
              className="border-2 p-4 rounded-lg border-orange bg-white shadow-sm"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">
                    {userType === "owner" ? "Provider" : "Client"}
                  </p>
                  <p className="font-semibold text-lg text-gray-800">
                    {userType === "owner"
                      ? `${appointment.catSitter.user.first_name} ${appointment.catSitter.user.last_name}`
                      : `${appointment.catOwner.user.first_name} ${appointment.catOwner.user.last_name}`}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="font-semibold text-lg text-green-600">
                    {appointment.status}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Drop-off</p>
                  <p className="font-semibold text-gray-800">
                    {formatDate(appointment.startDate)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Pick-up</p>
                  <p className="font-semibold text-gray-800">
                    {formatDate(appointment.endDate)}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default UpcomingAppointment;
