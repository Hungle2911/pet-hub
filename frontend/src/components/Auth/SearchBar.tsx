import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar: React.FC = () => {
  const [address, setAddress] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/search?address=${encodeURIComponent(address)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center mt-4"
    >
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Search Addresses"
        className="border border-custom-blue py-1 px-2 md:py-2 md:px-4 rounded-full text-sm md:text-base focus:outline-none w-64 md:w-96 text-grey placeholder-custom"
        style={{ color: "#808080" }} 
      />
    </form>
  );
};

export default SearchBar;
