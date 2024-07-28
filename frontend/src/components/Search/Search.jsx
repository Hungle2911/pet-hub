import React, { useState } from "react";

const Search = () => {
  const [location, setLocation] = useState("");
  const [availability, setAvailability] = useState("");
  const [experience, setExperience] = useState("");
  const [price, setPrice] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log("Searching for sitters with:", {
      location,
      availability,
      experience,
      price,
    });
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl mb-6 text-center">Search for Sitters</h2>
      <form onSubmit={handleSearch}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter location"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="availability"
          >
            Availability
          </label>
          <input
            type="text"
            id="availability"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter availability"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="experience"
          >
            Experience
          </label>
          <input
            type="text"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter experience level"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter price"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
