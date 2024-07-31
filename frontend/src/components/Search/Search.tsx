import React from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface SearchFormInputs {
  location: string;
  dropOffDate: Date;
  pickUpDate: Date;
  price: number;
}

const Search: React.FC = () => {
  const { register, handleSubmit, control, watch } =
    useForm<SearchFormInputs>();

  const onSubmit = (data: SearchFormInputs) => {
    console.log("Searching for sitters with:", data);
  };
  const dropOffDate = watch("dropOffDate");
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl mb-6 text-center">Search for Sitters</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            {...register("location", { required: true })}
            id="location"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter postal code. Ex: M6Z 1N7"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="dropOffDate"
          >
            Drop-off Date
          </label>
          <Controller
            control={control}
            name="dropOffDate"
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                minDate={new Date()}
                onChange={(date) => field.onChange(date)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholderText="Select drop-off date"
              />
            )}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="pickUpDate"
          >
            Pick-up Date
          </label>
          <Controller
            control={control}
            name="pickUpDate"
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                minDate={dropOffDate ? dropOffDate : new Date()}
                onChange={(date) => field.onChange(date)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholderText="Select pick-up date"
              />
            )}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            {...register("price", { required: true })}
            type="number"
            id="price"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter price"
          />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
