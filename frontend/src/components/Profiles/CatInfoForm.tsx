import { useForm } from "react-hook-form";

const PetInfoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    //// Data .....
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <div className="mb-4">
        <label htmlFor="petName" className="block text-gray-700 font-bold mb-2">
          Pet Name
        </label>
        <input
          id="petName"
          {...register("petName", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        {errors.petName && (
          <p className="text-red-500 text-sm mt-1">Pet name is required</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="breed" className="block text-gray-700 font-bold mb-2">
          Favorite Cat Breed
        </label>
        <select
          id="breed"
          {...register("breed", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select your favorite breed</option>
          <option value="sphynx">Sphynx</option>
        </select>
        {errors.breed && (
          <p className="text-red-500 text-sm mt-1">
            Favorite breed is required
          </p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="photo" className="block text-gray-700 font-bold mb-2">
          Photo
        </label>
        <input
          id="photo"
          type="file"
          {...register("photo", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        {errors.photo && (
          <p className="text-red-500 text-sm mt-1">Photo is required</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-700"
      >
        Submit
      </button>
    </form>
  );
};

export default PetInfoForm;
