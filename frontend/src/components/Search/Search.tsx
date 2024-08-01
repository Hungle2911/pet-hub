import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import MapView from "./MapView";

interface SearchFormInputs {
  address: string;
  startDate: Date;
  endDate: Date;
  maxRate: number;
  maxDistance: number;
}

interface CatSitter {
  id: number;
  user: {
    name: string;
    latitude: number;
    longitude: number;
  };
  rate: number;
  averageRating: number | null;
}
interface Coordinate {
  lat: number;
  lng: number;
}
const Search: React.FC = () => {
  const { register, handleSubmit, control, watch } =
    useForm<SearchFormInputs>();
  const [searchResults, setSearchResults] = useState<CatSitter[]>([]);
  const [mapCenter, setMapCenter] = useState<Coordinate>({
    lat: 43.6426,
    lng: -79.387054,
  });

  const startDate = watch("startDate");

  const onSubmit = async (data: SearchFormInputs) => {
    try {
      const response = await axios.get(
        "http://localhost:8070/v1/api/cat-sitters/search",
        {
          params: {
            address: data.address,
            startDate: data.startDate.toISOString(),
            endDate: data.endDate.toISOString(),
            maxRate: data.maxRate,
            maxDistance: data.maxDistance,
          },
        }
      );
      console.log(response.data);
      setSearchResults(response.data);

      if (response.data.length > 0) {
        setMapCenter({
          lat: response.data[0].user.latitude,
          lng: response.data[0].user.longitude,
        });
      }
    } catch (error) {
      console.error("Error searching for sitters:", error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl mb-6 text-center">Search for Sitters</h2>
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter full address"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="startDate"
          >
            Start Date
          </label>
          <Controller
            control={control}
            name="startDate"
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                minDate={new Date()}
                onChange={(date) => field.onChange(date)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholderText="Select start date"
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholderText="Select end date"
              />
            )}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="maxRate"
          >
            Max Rate (per hour)
          </label>
          <input
            {...register("maxRate", { required: true, min: 0 })}
            type="number"
            id="maxRate"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter max rate"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter max distance"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Search
          </button>
        </div>
      </form>

      <div className="mt-8">
        <MapView catSitters={searchResults} center={mapCenter} />
      </div>
    </div>
  );
};

export default Search;
