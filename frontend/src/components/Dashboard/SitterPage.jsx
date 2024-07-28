import React from "react";
import Navbar from "../NavBar";
import Search from "../Search/Search";
import ReviewsList from "../Reviews/ReviewsList";
import BookingForm from "../Booking/BookingForm";
import MyCalendar from "../Booking/Calendar";

const SitterPage = () => {
  const events = [
    {
      start: new Date(),
      end: new Date(),
      title: "Sample Event",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-6 py-4">
        <h1 className="text-2xl font-bold">Welcome, Cat Sitter!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h2 className="text-xl font-semibold">Search for Sitters</h2>
            <Search />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Your Reviews</h2>
            <ReviewsList />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h2 className="text-xl font-semibold">Book a Sitter</h2>
            <BookingForm />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Availability Calendar</h2>
            <MyCalendar events={events} />
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="list-disc list-inside">
            <li>Profile</li>
            <li>Messages</li>
            <li>Other Links...</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SitterPage;
