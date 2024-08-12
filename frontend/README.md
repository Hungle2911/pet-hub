Pet Hub

Pet Hub is a web application designed to connect pet owners with trusted pet sitters. The application allows users to sign up as either a pet owner or a pet sitter, view profiles, book appointments, and manage appointments through a user-friendly interface.

Table of Contents

	1.	Features
	2.	Tech Stack
	3.	Setup and Installation
	4.	Usage
	5.	API Endpoints
	6.	License
	7.	Contributors

Features

	•	User Authentication: Users can sign up or log in using Auth0.
	•	User Roles: Users can register as either a pet owner or a pet sitter.
	•	Pet Sitter Profiles: Pet sitters can create and manage profiles, including setting their rates, availability, and experience.
	•	Appointment Management: Owners can book appointments with sitters, and sitters can manage incoming requests and upcoming appointments.
	•	Search Functionality: Users can search for pet sitters based on location, availability, and rates.
	•	Responsive Design: The application is designed to work on both desktop and mobile devices.

Tech Stack

	•	Frontend: React, TypeScript, TailwindCSS
	•	Backend: Node.js, Express
	•	Database: PostgreSQL
	•	Authentication: Auth0
	•	APIs: Custom REST API with Express
	•	Deployment: Vercel for frontend, Heroku for backend

Setup and Installation

	1.	Clone the repository:
    $ git clone https://github.com/username/pet-hub.git
    $ cd pet-hub
  
  2.	Install dependencies:
    $ yarn install

  3.	Environment Variables:
    Create a .env file in both the backend and frontend directories with the following variables:

    Backend:
    DB_HOST=localhost
    DB_USER=labber
    DB_PASS=labber
    DB_NAME=finals
    DB_PORT=5432
    AUTH0_DOMAIN=your-auth0-domain
    AUTH0_CLIENT_ID=your-auth0-client-id
    AUTH0_CLIENT_SECRET=your-auth0-client-secret

    Frontend:
    REACT_APP_AUTH0_DOMAIN=your-auth0-domain
    REACT_APP_AUTH0_CLIENT_ID=your-auth0-client-id
    REACT_APP_API_URL=http://localhost:8080

	4.	Database Setup:
    Run migrations and seed the database:
    $ cd backend
    $ npx prisma generate
    $ npx prisma db push

  5.	Run the Application:
    
    Start the backend server:
    $ cd backend
    $ yarn dev

    Start the frontend server:
    $ cd frontend
    $ yarn dev

  6.	Access the application:
    Open your browser and navigate to http://localhost:3000.

  Usage

	  1.	Sign Up: Users can sign up as either a cat owner or a cat sitter.
	  2.	Pet Sitter Profile: Sitters can set up their profiles with details like experience, rates, and availability.
	  3.	Search and Booking: Owners can search for sitters based on location and book appointments.
	  4.	Appointment Management: Both owners and sitters can manage appointments, view requests, and see upcoming appointments.

  API Endpoints

	  •	User Information:
	  •	GET /user/info: Get the logged-in user’s information.
	  •	POST /user/info: Update the logged-in user’s information.
	  •	Cat Sitters:
	  •	GET /cat-sitters/search: Search for cat sitters based on location, rate, and distance.
	  •	GET /cat-sitters/profile/:id: Get the profile of a specific cat sitter.
	  •	Appointments:
	  •	GET /appointment/request: Get appointment requests for the logged-in user.
	  •	GET /appointment/upcoming: Get upcoming appointments for the logged-in user.
	  •	POST /booking: Create a new booking with a pet sitter.

Contributors
  •	Hung Le
  •	Tara Hymers
