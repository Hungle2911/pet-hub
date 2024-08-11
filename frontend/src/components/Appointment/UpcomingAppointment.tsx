import { formatDate } from "../../utilities/date_converter";

const UpcomingAppointment = ({ data }: any) => {
  return (
    <>
      <div className="text-xl font-semibold mb-4">Upcoming Appointment </div>
      <ul className="space-y-4">
        {data.map((appointment) => (
          <li
            key={appointment.id}
            className="border-2 p-4 rounded-lg border-orange bg-white shadow-sm"
          >
            <div>
              Requester:{" "}
              <span className="font-semibold">
                {appointment.catOwner.user.first_name}{" "}
                {appointment.catOwner.user.last_name}
              </span>
            </div>
            <div>
              Drop-off:{" "}
              <span className="font-semibold">
                {formatDate(appointment.startDate)}
              </span>
            </div>
            <div>
              Pick-up:{" "}
              <span className="font-semibold">
                {formatDate(appointment.endDate)}
              </span>
            </div>
            <div>
              Status:{" "}
              <span className="font-semibold">{appointment.status}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UpcomingAppointment;
