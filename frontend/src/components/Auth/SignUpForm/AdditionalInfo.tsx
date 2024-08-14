import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

interface AdditionalInfoProps {
  prevStep: () => void;
}

const AdditionalInfo = ({ prevStep }: AdditionalInfoProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 ">
        Step 3: Tell Us About Yourself!
      </h2>
      <label className="block mb-2 font-bold">Favorite Cat Breed</label>
      <select
        {...register("favorite_breed")}
        defaultValue=""
        className="w-full p-4 mb-4 border rounded focus:outline-none"
      >
        <option value="" disabled>
          Select your favorite breed
        </option>
        <option value="Sphynx">Sphynx</option>
        <option value="Boring Cat">Boring Cat</option>
      </select>
      {errors.favorite_breed && (
        <span className="text-red">
          {errors.favorite_breed.message as ReactNode}
        </span>
      )}
      <textarea
        {...register("description", {
          required: "Description is required",
        })}
        placeholder="All About You :)"
        className="w-full p-4 mb-4 border rounded focus:outline-none"
      />
      {errors.description && (
        <span className="text-red">
          {errors.description.message as ReactNode}
        </span>
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
          type="submit"
          className="bg-transparent text-pink py-2 px-4 rounded-full border-2 border-pink hover:bg-pink hover:text-white transition-transform transform hover:scale-105 shadow-lg"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default AdditionalInfo;
