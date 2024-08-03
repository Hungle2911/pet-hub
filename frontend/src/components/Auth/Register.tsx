// SIDE BY SIDE
// import React, { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";

// const Register = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   useEffect(() => {
//     console.log("Register component mounted");
//   }, []);

//   const onSubmit = async (data) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8070/api/register",
//         data
//       );
//       console.log("Response:", response.data);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="max-w-3xl mx-auto p-6 bg-beige/70 rounded-lg shadow-lg mt-16"
//       style={{ paddingTop: "3rem" }}
//     >
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <h2 className="text-xl font-bold mb-4 text-center">Owner Details</h2>

//           <div className="mb-4">
//             <label
//               htmlFor="username"
//               className="block text-gray-700 font-bold mb-2"
//             >
//               Username
//             </label>
//             <input
//               id="username"
//               {...register("username", { required: true })}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             />
//             {errors.username && (
//               <p className="text-red-500 text-sm mt-1">Username is required</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-gray-700 font-bold mb-2"
//             >
//               Email
//             </label>
//             <input
//               id="email"
//               {...register("email", { required: true })}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm mt-1">
//                 Valid email is required
//               </p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="password"
//               className="block text-gray-700 font-bold mb-2"
//             >
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               {...register("password", { required: true })}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             />
//             {errors.password && (
//               <p className="text-red-500 text-sm mt-1">Password is required</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="favoriteBreed"
//               className="block text-gray-700 font-bold mb-2"
//             >
//               Favorite Cat Breed
//             </label>
//             <select
//               id="favoriteBreed"
//               {...register("favoriteBreed", { required: true })}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             >
//               <option value="">Select your favorite breed</option>
//               <option value="sphynx">Sphynx</option>
//               <option value="boring cat">Boring Cat</option>
//             </select>
//             {errors.favoriteBreed && (
//               <p className="text-red-500 text-sm mt-1">
//                 Favorite breed is required
//               </p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="bio" className="block text-gray-700 font-bold mb-2">
//               Bio
//             </label>
//             <textarea
//               id="bio"
//               {...register("bio")}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             />
//           </div>
//         </div>

//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <h2 className="text-xl font-bold mb-4 text-center">Cat Details</h2>

//           <div className="mb-4">
//             <label
//               htmlFor="catName"
//               className="block text-gray-700 font-bold mb-2"
//             >
//               Name
//             </label>
//             <input
//               id="catName"
//               {...register("catName", { required: true })}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             />
//             {errors.catName && (
//               <p className="text-red-500 text-sm mt-1">Name is required</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="catBreed"
//               className="block text-gray-700 font-bold mb-2"
//             >
//               Breed
//             </label>
//             <select
//               id="catBreed"
//               {...register("catBreed", { required: true })}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             >
//               <option value="">Select your cat's breed</option>
//               <option value="sphynx">Sphynx</option>
//               <option value="boring cat">Boring Cat</option>
//             </select>
//             {errors.catBreed && (
//               <p className="text-red-500 text-sm mt-1">Breed is required</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="catAge"
//               className="block text-gray-700 font-bold mb-2"
//             >
//               Age
//             </label>
//             <input
//               id="catAge"
//               type="number"
//               {...register("catAge", { required: true, min: 1, max: 30 })}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             />
//             {errors.catAge && (
//               <p className="text-red-500 text-sm mt-1">
//                 Age must be between 1 and 30
//               </p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="favoriteFoods"
//               className="block text-gray-700 font-bold mb-2"
//             >
//               Favorite Foods
//             </label>
//             <input
//               id="favoriteFoods"
//               {...register("favoriteFoods", { required: true })}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             />
//             {errors.favoriteFoods && (
//               <p className="text-red-500 text-sm mt-1">
//                 Favorite foods are required
//               </p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="disposition"
//               className="block text-gray-700 font-bold mb-2"
//             >
//               Disposition
//             </label>
//             <select
//               id="disposition"
//               {...register("disposition", { required: true })}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             >
//               <option value="">Select your cat's disposition</option>
//               <option value="cantankerous">Cantankerous</option>
//               <option value="docile">Docile</option>
//               <option value="menace">Menace</option>
//               <option value="sweet as pie">Sweet as Pie</option>
//             </select>
//             {errors.disposition && (
//               <p className="text-red-500 text-sm mt-1">
//                 Disposition is required
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="text-center mt-6">
//         <button
//           type="submit"
//           className="bg-gradient-to-r from-blue-400 to-blue-600 text-dark-orange py-2 px-4 rounded-full border-2 border-dark-orange hover:from-blue-500 hover:to-blue-700 transition-transform transform hover:scale-105 shadow-lg"
//         >
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// };

// export default Register;

//UP and DOWN - Mobile?
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../../styles.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    console.log("Register component mounted");
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8070/api/register",
        data
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-6 bg-beige/70 rounded-lg shadow-lg mt-16"
      style={{ paddingTop: "3rem" }}
    >
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4 text-center">Owner Details</h2>

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
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            id="email"
            {...register("email", { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">Valid email is required</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password", { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">Password is required</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="favoriteBreed"
            className="block text-gray-700 font-bold mb-2"
          >
            Favorite Cat Breed
          </label>
          <select
            id="favoriteBreed"
            {...register("favoriteBreed", { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select your favorite breed</option>
            <option value="sphynx">Sphynx</option>
            <option value="boring cat">Boring Cat</option>
          </select>
          {errors.favoriteBreed && (
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
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4 text-center">Cat Details</h2>

        <div className="mb-4">
          <label
            htmlFor="catName"
            className="block text-gray-700 font-bold mb-2"
          >
            Name
          </label>
          <input
            id="catName"
            {...register("catName", { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.catName && (
            <p className="text-red-500 text-sm mt-1">Name is required</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="catBreed"
            className="block text-gray-700 font-bold mb-2"
          >
            Breed
          </label>
          <select
            id="catBreed"
            {...register("catBreed", { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select your cat's breed</option>
            <option value="sphynx">Sphynx</option>
            <option value="boring cat">Boring Cat</option>
          </select>
          {errors.catBreed && (
            <p className="text-red-500 text-sm mt-1">Breed is required</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="catAge"
            className="block text-gray-700 font-bold mb-2"
          >
            Age
          </label>
          <input
            id="catAge"
            type="number"
            {...register("catAge", { required: true, min: 1, max: 30 })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.catAge && (
            <p className="text-red-500 text-sm mt-1">
              Age must be between 1 and 30
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="favoriteFoods"
            className="block text-gray-700 font-bold mb-2"
          >
            Favorite Foods
          </label>
          <input
            id="favoriteFoods"
            {...register("favoriteFoods", { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.favoriteFoods && (
            <p className="text-red-500 text-sm mt-1">
              Favorite foods are required
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="disposition"
            className="block text-gray-700 font-bold mb-2"
          >
            Disposition
          </label>
          <select
            id="disposition"
            {...register("disposition", { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select your cat's disposition</option>
            <option value="cantankerous">Cantankerous</option>
            <option value="docile">Docile</option>
            <option value="menace">Menace</option>
            <option value="sweet as pie">Sweet as Pie</option>
          </select>
          {errors.disposition && (
            <p className="text-red-500 text-sm mt-1">Disposition is required</p>
          )}
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-400 to-blue-600 text-dark-orange py-2 px-4 rounded-full border-2 border-dark-orange hover:from-blue-500 hover:to-blue-700 transition-transform transform hover:scale-105 shadow-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Register;