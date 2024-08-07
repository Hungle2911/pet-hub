import React from "react";
import legUpImage from "../assets/Leg_up.jpg";
import SearchBar from "../components/Auth/SearchBar";

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col justify-between">
        <section className="bg-gray-100 py-20 pb-4">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-gray-800">
              Welcome to Feline Good
            </h1>
            <p
              className="mt-4"
              style={{
                color: "#EC86B4",
                fontFamily: '"Playwrite BE VLG", sans-serif',
              }}
            >
              where every meow matters
            </p>
            <div className="flex flex-col items-center mt-12 mb-4">
              <img
                src={legUpImage}
                alt="Cat with leg up"
                className="w-1/3 md:w-1/4 lg:w-1/5"
              />
              <SearchBar />
            </div>
          </div>
        </section>
        <section className="container mx-auto px-6 pt-12 pb-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Key Features
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-off-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-custom-blue">
                User Profiles
              </h3>
              <p className="mt-4 text-gray-600">
                Detailed profiles for cat owners and cat sitters, including
                preferences, experience, and more.
              </p>
            </div>
            <div className="bg-off-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-custom-blue">
                Booking System
              </h3>
              <p className="mt-4 text-gray-600">
                Search and filter cat sitters, send booking requests, and manage
                your calendar with ease.
              </p>
            </div>
            <div className="bg-off-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-custom-blue">
                Reviews and Ratings
              </h3>
              <p className="mt-4 text-gray-600">
                Leave and read reviews and ratings to ensure trust and quality
                service.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;