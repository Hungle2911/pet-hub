import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

interface RoleSelectionProps {
  nextStep: () => void;
}

const RoleSelection = ({ nextStep }: RoleSelectionProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Are you signing up as:</h2>
      <select
        {...register("role", { required: "Role is required" })}
        defaultValue=""
        className="w-full p-4 mb-4 border rounded focus:outline-none"
      >
        <option value="" disabled>
          Select your role
        </option>
        <option value="OWNER">Cat Owner</option>
        <option value="PET_SITTER">Cat Sitter</option>
      </select>
      {errors.role && (
        <span className="text-red">{errors.role.message as ReactNode}</span>
      )}
      <div className="flex justify-between mt-4">
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

export default RoleSelection;
