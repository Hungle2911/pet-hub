import { useState } from "react";
import { useForm } from "react-hook-form";
import api from "../api/axios.config";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../components/Loading/Loading";

interface FormData {
  first_name: string;
  last_name: string;
  location: string;
  description?: string;
  role: "OWNER" | "PET_SITTER";
}

const SignUpForm = () => {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const onSubmit = async (data: FormData) => {
    try {
      const token = await getAccessTokenSilently();
      const response = await api.post("/user/info", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      window.location.href = "/";
      console.log("User registered successfully:", response.data);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return <div>Please log in</div>;
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {step === 1 && (
        <div>
          <h2>Are you signing up as:</h2>
          <select {...register("role", { required: true })}>
            <option value="OWNER">Owner</option>
            <option value="PET_SITTER">Pet sitter</option>
          </select>
          {errors.role && <span>{errors.role.message}</span>}
          <button type="button" onClick={nextStep}>
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Step 2: Personal Details</h2>
          <input
            {...register("first_name", {
              required: "First name is required",
            })}
            placeholder="First Name"
          />
          {errors.first_name && <span>{errors.first_name.message}</span>}
          <input
            {...register("last_name", { required: "Last name is required" })}
            placeholder="Last name"
          />
          {errors.last_name && <span>{errors.last_name.message}</span>}
          <input
            {...register("location", { required: "Location is required" })}
            placeholder="Enter your address here"
          />
          {errors.location && <span>{errors.location.message}</span>}
          <textarea
            {...register("description")}
            placeholder="Please tell us a little bit about yourself :)"
          />
          {errors.description && <span>{errors.description.message}</span>}
          <button type="button" onClick={prevStep}>
            Previous
          </button>
          <button type="submit">Sign Up</button>
        </div>
      )}
    </form>
  );
};

export default SignUpForm;
