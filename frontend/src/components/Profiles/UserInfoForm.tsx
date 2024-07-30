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
// data needed
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" {...register("name", { required: true })} />
        {errors.name && <p>Name is required</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          })}
        />
        {errors.email && <p>Valid email is required</p>}
      </div>

      <div>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          {...register("age", { required: true, min: 1, max: 120 })}
        />
        {errors.age && <p>Age must be between 1 and 120</p>}
      </div>

      <div>
        <label htmlFor="username">Username</label>
        <input id="username" {...register("username", { required: true })} />
        {errors.username && <p>Username is required</p>}
      </div>

      <div>
        <label htmlFor="breed">Favorite Cat Breed</label>
        <select id="breed" {...register("breed", { required: true })}>
          <option value="">Select your favorite breed</option>
          <option value="sphynx">Sphynx</option>
        </select>
        {errors.breed && <p>Favorite breed is required</p>}
      </div>

      <div>
        <label htmlFor="bio">Bio</label>
        <textarea id="bio" {...register("bio")} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserInfoForm;
