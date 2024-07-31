import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

interface FormData {
  email: string;
  user_name: string;
  full_name: string;
  password: string;
  role: string;
}

const SignUpForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8070/v1/api/auth/register",
        data
      );
      console.log("User registered successfully:", response.data);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {step === 1 && (
        <div>
          <h2>Step 1: Basic Information</h2>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: /^\S+@\S+$/i,
            })}
            placeholder="Email"
          />
          {errors.email && <span>{errors.email.message}</span>}

          <input
            {...register("user_name", { required: "Username is required" })}
            placeholder="Username"
          />
          {errors.user_name && <span>{errors.user_name.message}</span>}

          <button type="button" onClick={nextStep}>
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Step 2: Personal Details</h2>
          <input
            {...register("full_name", { required: "Full name is required" })}
            placeholder="Full Name"
          />
          {errors.full_name && <span>{errors.full_name.message}</span>}

          <select {...register("role", { required: true })}>
            <option value="OWNER">Owner</option>
            <option value="PET_SITTER">Pet sitter</option>
          </select>
          {errors.role && <span>{errors.role.message}</span>}
          <button type="button" onClick={prevStep}>
            Previous
          </button>
          <button type="button" onClick={nextStep}>
            Next
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Step 3: Security</h2>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: 8,
            })}
            placeholder="Password"
          />
          {errors.password && <span>{errors.password.message}</span>}

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
