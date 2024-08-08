import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CatSitter } from "../../types/types";
import api from "../../api/axios.config";
import { useAuth0 } from "@auth0/auth0-react";

interface BookingModalProps {
  sitterInfo: CatSitter;
  onClose: () => void;
}

const BookingCalendarModal = ({ sitterInfo, onClose }: BookingModalProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const { getAccessTokenSilently } = useAuth0();

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const { availability, id } = sitterInfo;
  const isAvailable = (date: Date) => {
    return availability.some(
      (av) =>
        av.isAvailable &&
        date >= new Date(av.start_date) &&
        date <= new Date(av.end_date)
    );
  };
  const handleSubmit = async () => {
    const token = await getAccessTokenSilently();
    try {
      const response = await api.post(
        "/booking",
        {
          startDate,
          endDate,
          catSitterId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Book a Pet Sitter</h2>
        <div className="mb-4">
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            selectsStart
            startDate={startDate!}
            endDate={endDate!}
            minDate={new Date()}
            selectsRange
            filterDate={isAvailable}
            inline
            className="border p-2 rounded"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={!startDate || !endDate}
            className="bg-dark-orange text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Book
          </button>
          <button
            onClick={onClose}
            className="bg-red text-white px-4 py-2 rounded ml-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingCalendarModal;
