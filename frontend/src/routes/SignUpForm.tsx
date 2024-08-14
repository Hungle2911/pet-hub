import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import api from "../api/axios.config";
import { useAuth0 } from "@auth0/auth0-react";
import RoleSelection from "../components/Auth/SignUpForm/RoleSelection";
import PersonalDetails from "../components/Auth/SignUpForm/PersonalDetails";
import AdditionalInfo from "../components/Auth/SignUpForm/AdditionalInfo";
import { useLoadScript } from "@react-google-maps/api";
import Loading from "../components/Loading/Loading";

interface FormData {
  first_name: string;
  last_name: string;
  location: string;
  description?: string;
  role: "OWNER" | "PET_SITTER";
  favorite_breed?: string;
}

const SignUpForm = () => {
  const [step, setStep] = useState(1);
  const methods = useForm<FormData>();
  const { getAccessTokenSilently } = useAuth0();
  const googleMapAPI = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapAPI,
    libraries: ["places"],
  });

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
  if (!isLoaded) return <Loading />;
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-pink-100 rounded-lg shadow-lg border-2 border-pink-400">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          {step === 1 && <RoleSelection nextStep={nextStep} />}
          {step === 2 && (
            <PersonalDetails nextStep={nextStep} prevStep={prevStep} />
          )}
          {step === 3 && <AdditionalInfo prevStep={prevStep} />}
        </form>
      </FormProvider>
    </div>
  );
};

export default SignUpForm;
