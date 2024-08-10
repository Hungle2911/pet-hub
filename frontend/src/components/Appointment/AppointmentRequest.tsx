import { formatDate } from "../../utilities/date_converter";

const AppointmentRequest = ({ data }: any) => {
  return (
    <>
      <div>Appointment Request</div>
      <ul>
        {data.map((appointment) => (
          <li key={appointment.id} className="border-2 my-2 border-orange">
            <div>
              Requester: {appointment.catOwner.user.first_name}{" "}
              {appointment.catOwner.user.last_name}
            </div>
            <div>Drop-off: {formatDate(appointment.startDate)}</div>
            <div>Pick-up: {formatDate(appointment.endDate)}</div>
            <div>Status: {appointment.status}</div>
            <button>Confirm</button>
            <button>Reject</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AppointmentRequest;
