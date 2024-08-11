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
  favorite_breed?: string;
}

// // const SignUpForm = () => {
// //   const [step, setStep] = useState(1);
// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //   } = useForm<FormData>();
// //   const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
// //   const nextStep = () => setStep(step + 1);
// //   const prevStep = () => setStep(step - 1);

// //   const onSubmit = async (data: FormData) => {
// //     try {
// //       const token = await getAccessTokenSilently();
// //       const response = await api.post("/user/info", data, {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });
// //       window.location.href = "/";
// //       console.log("User registered successfully:", response.data);
// //     } catch (error) {
// //       console.error("Registration failed:", error);
// //     }
// //   };

// //   if (isLoading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (!isAuthenticated) {
// //     return <div>Please log in</div>;
// //   }

const SignUpForm = () => {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { getAccessTokenSilently } = useAuth0();
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

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (!isAuthenticated) {
  //   return <div>Please log in</div>;
  // }
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-pink-100 rounded-lg shadow-lg border-2 border-pink-400">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-pink-500">
              Are you signing up as:
            </h2>
            <select
              {...register("role", { required: true })}
              defaultValue=""
              className="w-full p-4 mb-4 border rounded focus:outline-none focus:border-pink-500 focus:bg-pink-50"
            >
              <option value="" disabled>
                Select your role
              </option>
              <option value="OWNER">Cat Owner</option>
              <option value="PET_SITTER">Cat Sitter</option>
            </select>
            {errors.role && (
              <span className="text-red-500">{errors.role.message}</span>
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
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-pink-500">
              Step 2: Personal Details
            </h2>
            <input
              {...register("first_name", {
                required: "First name is required",
              })}
              placeholder="First Name"
              className="w-full p-4 mb-4 border rounded focus:outline-none focus:border-pink-500 focus:bg-pink-50"
            />
            {errors.first_name && (
              <span className="text-red-500">{errors.first_name.message}</span>
            )}
            <input
              {...register("last_name", {
                required: "Last name is required",
              })}
              placeholder="Last Name"
              className="w-full p-4 mb-4 border rounded focus:outline-none focus:border-pink-500 focus:bg-pink-50"
            />
            {errors.last_name && (
              <span className="text-red-500">{errors.last_name.message}</span>
            )}
            <input
              {...register("location", {
                required: "Location is required",
              })}
              placeholder="Enter your address here"
              className="w-full p-4 mb-4 border rounded focus:outline-none focus:border-pink-500 focus:bg-pink-50"
            />
            {errors.location && (
              <span className="text-red-500">{errors.location.message}</span>
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
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-pink-500">
              Step 3: Tell Us About Yourself!
            </h2>
            <label className="block mb-2 text-pink-500 font-bold">
              Favorite Cat Breed
            </label>
            <select
              {...register("favorite_breed", { required: true })}
              defaultValue=""
              className="w-full p-4 mb-4 border rounded focus:outline-none focus:border-pink-500 focus:bg-pink-50"
            >
              <option value="" disabled>
                Select your favorite breed
              </option>
              <option value="Sphynx">Sphynx</option>
              <option value="Boring Cat">Boring Cat</option>
            </select>
            {errors.favorite_breed && (
              <span className="text-red-500">
                {errors.favorite_breed.message}
              </span>
            )}
            <textarea
              {...register("description")}
              placeholder="All About You :)"
              className="w-full p-4 mb-4 border rounded focus:outline-none focus:border-pink-500 focus:bg-pink-50"
            />
            {errors.description && (
              <span className="text-red-500">{errors.description.message}</span>
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
        )}
      </form>
    </div>
  );
};

export default SignUpForm;
