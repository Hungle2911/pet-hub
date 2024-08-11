import { formatDate } from "../../utilities/date_converter";
import ConfirmButton from "./ConfirmButton";
import RejectButton from "./RejectButton";

interface AppointmentRequestProps {
  data: any[];
  userType: "owner" | "sitter";
}

const AppointmentRequest = ({ data, userType }: AppointmentRequestProps) => {
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
              {userType === "owner" ? "Provider: " : "Requester: "}
              <span className="font-semibold">
                {userType === "owner"
                  ? `${appointment.catSitter.user.first_name} ${appointment.catSitter.user.last_name}`
                  : `${appointment.catOwner.user.first_name} ${appointment.catOwner.user.last_name}`}
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
            {userType === "sitter" && (
              <div className="mt-4 flex space-x-2">
                <ConfirmButton id={appointment.id} />
                <RejectButton id={appointment.id} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default AppointmentRequest;
