import { formatDate } from "../../utilities/date_converter";

const AppointmentRequest = ({ data }: any) => {
  return (
    <>
      <div className="text-xl font-semibold mb-4">Appointment Request</div>
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
            <div className="mt-4 flex space-x-2">
              <button className="px-4 py-2 bg-beige text-white rounded-lg hover:bg-green-600 transition">
                Confirm
              </button>
              <button className="px-4 py-2 bg-red text-white rounded-lg hover:bg-red-600 transition">
                Reject
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AppointmentRequest;
