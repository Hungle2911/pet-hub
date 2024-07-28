import React from "react";

const OwnerProfile = () => {
  return (
    <div className="container mx-auto px-6 py-4">
      <h2 className="text-2xl font-bold">Cat Owner Profile</h2>
      <img
        src="path/to/profile-pic"
        alt="Profile"
        className="my-4 w-32 h-32 rounded-full mx-auto"
      />
      <p className="text-lg">Name: Fluffy</p>
      <p className="text-lg">Age: 2 years</p>
      <p className="text-lg">Breed: Maine Coon</p>
      <p className="text-lg">Preferences: Likes to nap in the sun</p>
      <p className="text-lg">Medical History: None</p>
      <p className="text-lg">Behavior: Very friendly</p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
        Edit Profile
      </button>
    </div>
  );
};

export default OwnerProfile;
