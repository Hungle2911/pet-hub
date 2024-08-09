import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../api/axios.config";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Availability } from "../types/types";

interface PetSitterFormData {
  rate: number;
  experience: string;
}

const SitterProfileEdit: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm<PetSitterFormData>();
  const [availabilities, setAvailabilities] = useState<Availability[]>([]);
  const { getAccessTokenSilently } = useAuth0();
  const fetchPetSitterData = async () => {
    const token = await getAccessTokenSilently();
    try {
      const response = await api.get("/user/cat-sitter/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data) {
        const { rate, experience, availabilities } = response.data;
        setValue("rate", rate);
        setValue("experience", experience);
        setAvailabilities(
          availabilities.map((av: any) => ({
            ...av,
            start_date: new Date(av.start_date),
            end_date: new Date(av.end_date),
          }))
        );
      }
    } catch (error) {
      console.error("Error fetching pet sitter data:", error);
    }
  };

  useEffect(() => {
    fetchPetSitterData();
  }, []);

  const onSubmit = async (data: PetSitterFormData) => {
    try {
      const token = await getAccessTokenSilently();
      await api.post(
        "/user/cat-sitter/profile",
        {
          ...data,
          availabilities,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  const handleAvailabilityChange = (
    index: number,
    field: keyof Availability,
    value: any
  ) => {
    setAvailabilities((prev) => {
      const newAvailabilities = [...prev];
      newAvailabilities[index] = {
        ...newAvailabilities[index],
        [field]: field === "isAvailable" ? value === "true" : value,
      };
      return newAvailabilities;
    });
  };

  const addAvailability = () => {
    setAvailabilities((prev) => [
      ...prev,
      { start_date: new Date(), end_date: new Date(), isAvailable: true },
    ]);
  };

  const removeAvailability = (index: number) => {
    setAvailabilities((prev) => prev.filter((_, i) => i !== index));
  };

  return (
  <div className="max-w-2xl mx-auto mt-8 p-6 bg-pink-100 rounded-lg shadow-lg border-2 border-pink-400">
    <h1 className="text-2xl font-bold mb-6 text-custom-blue-500">Pet Sitter Profile</h1>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="rate" className="block mb-1">Rate Per Day ($)</label>
        <input
          type="number"
          id="rate"
          {...register("rate", { required: true, min: 0 })}
          className="w-full p-2 border rounded focus:outline focus:border-pink-500 focus:bg-pink-50"
        />
      </div>
      <div>
        <label htmlFor="experience" className="block mb-1">Cat Experience</label>
        <textarea
          id="experience"
          {...register("experience", { required: true })}
          className="w-full p-2 border rounded focus:outline focus:border-pink-500 focus:bg-pink-50"
          rows={4}
        ></textarea>
      </div>
      <div>
        <label className="block mb-1">Availability</label>
        {availabilities.map((av, index) => (
          <div key={index} className="flex flex-wrap items-center space-x-2 mb-2">
            <DatePicker
              selected={av.start_date}
              onChange={(date) => handleAvailabilityChange(index, "start_date", date)}
              className="p-2 border rounded focus:outline focus:border-pink-500 focus:bg-pink-50"
            />
            <DatePicker
              selected={av.end_date}
              onChange={(date) => handleAvailabilityChange(index, "end_date", date)}
              className="p-2 border rounded focus:outline focus:border-pink-500 focus:bg-pink-50"
            />
            <select
              value={av.isAvailable ? "true" : "false"}
              onChange={(e) => handleAvailabilityChange(index, "isAvailable", e.target.value)}
              className="p-2 border rounded focus:outline-none focus:border-pink-500 focus:bg-pink-50"
            >
              <option value="true">Available</option>
              <option value="false">Unavailable</option>
            </select>
            <button
              type="button"
              onClick={() => removeAvailability(index)}
              className="bg-custom-blue text-off-white p-2 rounded"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addAvailability}
          className="bg-off-white text-custom-blue p-2 rounded mt-2 border border-custom-blue border-2"
        >
          Set Availability
        </button>
      </div>
      <button
        type="submit"
        className="w-full bg-transparent text-pink py-2 px-4 rounded-full border-2 border-pink hover:bg-pink hover:text-white transition-transform transform hover:scale-105 shadow-lg"
      >
        Update Profile
      </button>
    </form>
  </div>
);
};

export default SitterProfileEdit;


