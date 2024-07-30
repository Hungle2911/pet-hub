import React from "react";
import { useForm } from "react-hook-form";
import "./UserInfoForm.css";

const UserInfoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Data... to be submitted
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          id="name"
          {...register("name", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">Name is required</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          id="email"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">Valid email is required</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="age" className="block text-gray-700 font-bold mb-2">
          Age
        </label>
        <input
          id="age"
          type="number"
          {...register("age", { required: true, min: 1, max: 120 })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        {errors.age && (
          <p className="text-red-500 text-sm mt-1">
            Age must be between 1 and 120
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-gray-700 font-bold mb-2"
        >
          Username
        </label>
        <input
          id="username"
          {...register("username", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">Username is required</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="role" className="block text-gray-700 font-bold mb-2">
          User Type
        </label>
        <select
          id="usertype"
          {...register("role", { required: true })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select your Usertype</option>
          <option value="cat_owner">Cat Owner</option>
          <option value="cat_sitter">Cat Sitter</option>
        </select>
        {errors.role && (
          <p className="text-red-500 text-sm mt-1">Usertype is required</p>
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
        <label htmlFor="bio" className="block text-gray-700 font-bold mb-2">
          Bio 
        </label>
        <textarea
          id="bio"
          {...register("bio")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default UserInfoForm;
