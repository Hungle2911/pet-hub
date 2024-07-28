const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-gray-800">
              Welcome to Feline Good
            </h1>
            <p className="mt-4 text-gray-600">Where Every Meow Matters</p>
            <div className="mt-8"></div>
          </div>
        </section>
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Key Features
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
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
