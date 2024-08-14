import { useFormContext } from "react-hook-form";
import { Autocomplete } from "@react-google-maps/api";
import { ReactNode, useState } from "react";

interface PersonalDetailsProps {
  nextStep: () => void;
  prevStep: () => void;
}

const PersonalDetails = ({ nextStep, prevStep }: PersonalDetailsProps) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);

  const onLoad = (autocompleteInstance: google.maps.places.Autocomplete) => {
    setAutocomplete(autocompleteInstance);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      setValue("location", place.formatted_address || "");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Step 2: Personal Details</h2>
      <input
        {...register("first_name", { required: "First name is required" })}
        placeholder="First Name"
        className="w-full p-4 mb-4 border rounded focus:outline-none"
      />
      {errors.first_name && (
        <span className="text-red">
          {errors.first_name.message as ReactNode}
        </span>
      )}
      <input
        {...register("last_name", { required: "Last name is required" })}
        placeholder="Last Name"
        className="w-full p-4 mb-4 border rounded focus:outline-none"
      />
      {errors.last_name && (
        <span className="text-red">
          {errors.last_name.message as ReactNode}
        </span>
      )}
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <input
          {...register("location", { required: "Location is required" })}
          placeholder="Enter your address here"
          className="w-full p-4 mb-4 border rounded focus:outline-none focus:border-pink "
        />
      </Autocomplete>
      {errors.location && (
        <span className="text-red">{errors.location.message as ReactNode}</span>
      )}
      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={prevStep}
          className="bg-transparent text-pink py-2 px-4 rounded-full border-2 border-pink hover:bg-pink hover:text-white transition-transform transform hover:scale-105 shadow-lg"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="bg-transparent text-pink py-2 px-4 rounded-full border-2 border-pink hover:bg-pink hover:text-white transition-transform transform hover:scale-105 shadow-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PersonalDetails;
