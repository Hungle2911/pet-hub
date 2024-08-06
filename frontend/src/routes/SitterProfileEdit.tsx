import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import api from "../api/axios.config";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAuth0 } from "@auth0/auth0-react";

interface PetSitterFormData {
  rate: number;
  experience: string;
}

interface Availability {
  id?: number;
  start_date: Date;
  end_date: Date;
  isAvailable: boolean;
}

const SitterProfileEdit: React.FC = () => {
  const { register, handleSubmit, control, setValue } =
    useForm<PetSitterFormData>();
  const [availabilities, setAvailabilities] = useState<Availability[]>([]);
  const { getAccessTokenSilently } = useAuth0();
  const fetchPetSitterData = async () => {
    const token = await getAccessTokenSilently();
    try {
      const response = await api.get("/user/cat-sitter/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
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
      await api.put(
        "/api/pet-sitter/profile",
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
        [field]: value,
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
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Pet Sitter Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="rate" className="block mb-1">
            Rate per night ($)
          </label>
          <input
            type="number"
            id="rate"
            {...register("rate", { required: true, min: 0 })}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="experience" className="block mb-1">
            Experience
          </label>
          <textarea
            id="experience"
            {...register("experience", { required: true })}
            className="w-full p-2 border rounded"
            rows={4}
          ></textarea>
        </div>
        <div>
          <label className="block mb-1">Availabilities</label>
          {availabilities.map((av, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <DatePicker
                selected={av.start_date}
                onChange={(date) =>
                  handleAvailabilityChange(index, "start_date", date)
                }
                className="p-2 border rounded"
              />
              <DatePicker
                selected={av.end_date}
                onChange={(date) =>
                  handleAvailabilityChange(index, "end_date", date)
                }
                className="p-2 border rounded"
              />
              <select
                value={av.isAvailable ? "available" : "unavailable"}
                onChange={(e) =>
                  handleAvailabilityChange(
                    index,
                    "isAvailable",
                    e.target.value === "available"
                  )
                }
                className="p-2 border rounded"
              >
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
              <button
                type="button"
                onClick={() => removeAvailability(index)}
                className="bg-red text-white p-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addAvailability}
            className="bg-orange text-white p-2 rounded mt-2"
          >
            Add Availability
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-dark-orange text-white p-2 rounded hover:bg-blue-600"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default SitterProfileEdit;
