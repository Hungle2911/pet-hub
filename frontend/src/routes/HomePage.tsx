import React from "react";
import legUpImage from "../assets/Leg_up.jpg";
import SearchBar from "../components/Auth/SearchBar";
import profilePic from "../assets/profile.png";
import calenderPic from "../assets/calender.png";
import reviewPic from "../assets/reviews.png";
import Footer from "../components/Footer";
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
      </main>
      <section className="mx-auto px-6 pt-12 pb-20 bg-soft-pink">
        <h2 className="text-4xl font-semibold text-black text-center">
          Meet Cat Sitters Who Will Treat Your Pets Like Family
        </h2>
        <p className="mt-4 text-lg text-gray-700 text-center">
          Find trusted cat sitters in your area, view detailed profiles, and
          book with confidence.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-custom-blue">
              User Profiles
            </h3>
            <p className="mt-4 text-gray-700">
              Explore detailed profiles for cat owners and sitters, showcasing
              experience, preferences, and availability. Easily find the perfect
              match for your pet.
            </p>
            <img
              src={profilePic}
              alt="User Profiles"
              className="mt-6 mx-auto w-3/4"
            />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-custom-blue">
              Booking System
            </h3>
            <p className="mt-4 text-gray-700">
              Effortlessly search and filter cat sitters, send booking requests,
              and manage your appointments all in one place.
            </p>
            <img
              src={calenderPic}
              alt="Booking System"
              className="mt-6 mx-auto"
            />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-custom-blue">
              Reviews and Ratings
            </h3>
            <p className="mt-4 text-gray-700">
              Read authentic reviews and ratings from other cat owners. Share
              your experiences to help build a reliable community.
            </p>
            <img
              src={reviewPic}
              alt="Reviews and Ratings"
              className="mt-6 mx-auto w-30 h-30"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;
