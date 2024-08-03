import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles.css";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate logging in by setting a cookie
    document.cookie = `user_id=${userId}; path=/;`;
    console.log("Logging in with user ID:", userId);
    navigate("/owner-page"); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md mt-0">
        <form
          onSubmit={handleSubmit}
          className="bg-beige/70 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
          style={{ paddingTop: "3rem" }}
        >
          <h2 className="text-2xl mb-6 text-center">Login</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="userId"
            >
              Username
            </label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-dark-orange"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-dark-orange"
              required
            />
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
      </div>
    </div>
  );
};

export default Login;
