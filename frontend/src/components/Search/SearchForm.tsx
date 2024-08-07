import { useForm, Controller, SubmitHandler } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SearchFormInputs } from "../../types/types";

interface SearchProps {
  onSubmit: SubmitHandler<SearchFormInputs>;
}
const SearchForm = ({ onSubmit }: SearchProps) => {
  const { register, handleSubmit, control, watch } =
    useForm<SearchFormInputs>();

  const startDate = watch("startDate");

  return (
    <div className="bg-off-white p-4 rounded-lg shadow-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            {...register("address", { required: true })}
            id="address"
            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-pink"
            placeholder="Enter Full Address"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="startDate"
          >
            Start Date
          </label >
          <Controller
            control={control}
            name="startDate"
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                minDate={new Date()}
                onChange={(date) => field.onChange(date)}
                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-pink"
                placeholderText="Select Start Date"
              />
            )}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="endDate"
          >
            End Date
          </label>
          <Controller
            control={control}
            name="endDate"
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                minDate={startDate ? startDate : new Date()}
                onChange={(date) => field.onChange(date)}
                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-pink"
                placeholderText="Select End Date"
              />
            )}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="maxRate"
          >
            Max Rate (per day)
          </label>
          <input
            {...register("maxRate", { required: true, min: 0 })}
            type="number"
            id="maxRate"
            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-pink"
            placeholder="Enter Max Rate"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="maxDistance"
          >
            Max Distance (km)
          </label>
          <input
            {...register("maxDistance", { required: true, min: 0 })}
            type="number"
            id="maxDistance"
            className="hadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-pink"
            placeholder="Enter Max Distance"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-transparent text-pink py-2 px-4 rounded-full border-2 border-pink hover:bg-pink hover:text-white transition-transform transform hover:scale-105 shadow-lg"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;

