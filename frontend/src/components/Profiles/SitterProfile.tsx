import React from "react";

const SitterProfile = () => {
  return (
    <div className="container mx-auto px-6 py-4">
      <h2 className="text-2xl font-bold">Cat Sitter Profile</h2>
      <img
        src="path/to/profile-pic"
        alt="Profile"
        className="my-4 w-32 h-32 rounded-full mx-auto"
      />
      <p className="text-lg">Name: Jane Doe</p>
      <p className="text-lg">Experience: 5 years</p>
      <p className="text-lg">Rates: $20/day</p>
      <p className="text-lg">Availability: Weekends</p>
      <p className="text-lg">Reviews: 4.9 stars</p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
        Edit Profile
      </button>
    </div>
  );
};

export default SitterProfile;
