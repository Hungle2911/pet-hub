// import React from "react";
// import { Link } from "react-router-dom";
// import legUpImage from "../assets/Leg_up.jpg";

// const Homepage = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <main className="flex-grow flex flex-col justify-between">
//         <section className="bg-gray-100 py-20 flex flex-col justify-center">
//           <div className="container mx-auto px-6 text-center">
//             <h1 className="text-4xl font-bold text-gray-800">
//               Welcome to Feline Good
//             </h1>
//             <p className="mt-4" style={{ color: "#EC86B4" }}>
//               Where Every Meow Matters
//             </p>{" "}
//             <div className="flex flex-col items-center mt-12 mb-4">
//               <img
//                 src={legUpImage}
//                 alt="Cat with leg up"
//                 className="w-1/3 md:w-1/4 lg:w-1/5"
//               />
//             </div>
//             <div className="mt-8">
//               <Link
//                 to="/login"
//                 className="bg-blue-500 text-white py-2 px-4 rounded mr-4"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="bg-green-500 text-white py-2 px-4 rounded"
//               >
//                 Sign Up
//               </Link>
//             </div>
//           </div>
//         </section>
//         <section className="container mx-auto px-6 py-6">
//           <h2 className="text-3xl font-bold text-gray-800 text-center">
//             Key Features
//           </h2>
//           <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//               <h3 className="text-xl font-semibold text-gray-800">
//                 User Profiles
//               </h3>
//               <p className="mt-4 text-gray-600">
//                 Detailed profiles for cat owners and sitters, including
//                 preferences, experience, and more.
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Booking System
//               </h3>
//               <p className="mt-4 text-gray-600">
//                 Search and filter sitters, send booking requests, and manage
//                 your calendar with ease.
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Reviews and Ratings
//               </h3>
//               <p className="mt-4 text-gray-600">
//                 Leave and read reviews and ratings to ensure trust and quality
//                 service.
//               </p>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Homepage;
import React from "react";
import { Link } from "react-router-dom";
import legUpImage from "../assets/Leg_up.jpg";

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col justify-between">
        <section
          className="bg-gray-100 py-20"
          style={{ paddingBottom: "10px" }}
        >
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-gray-800">
              Welcome to Feline Good
            </h1>
            <p className="mt-4" style={{ color: "#EC86B4" }}>
              Where Every Meow Matters
            </p>
            <div className="flex flex-col items-center mt-12">
              <img
                src={legUpImage}
                alt="Cat with leg up"
                className="w-1/3 md:w-1/4 lg:w-1/5"
              />
            </div>
            <div className="mt-8">
              <Link
                to="/login"
                className="bg-blue-500 text-white py-2 px-4 rounded mr-4"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-500 text-white py-2 px-4 rounded"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </section>
        <section
          className="container mx-auto px-6 pt-6"
          style={{ marginTop: "0px" }}
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Key Features
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                User Profiles
              </h3>
              <p className="mt-4 text-gray-600">
                Detailed profiles for cat owners and sitters, including
                preferences, experience, and more.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Booking System
              </h3>
              <p className="mt-4 text-gray-600">
                Search and filter sitters, send booking requests, and manage
                your calendar with ease.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800">
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