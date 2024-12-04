# JourneyZeal Tour Management

JourneyZeal is a full-stack tour management web application designed to help users find, explore, and book their ideal travel experiences. It features a sleek frontend built with React and a robust backend to manage tours, user authentication, and booking information.

## Features

- **Frontend**:
  - Responsive and modern user interface built with React.
  - React Router for smooth client-side navigation.
  - Integration of Reactstrap for responsive UI components.
  - Interactive elements, including a dynamic image carousel using React Slick.
  
- **Backend**:
  - **User Authentication**: Users can register, log in, and securely store passwords using bcrypt.
  - **JWT Authentication**: JSON Web Tokens (JWT) are used for secure user sessions.
  - **Tour Management**: Admins can create, update, and delete tours.
  - **Booking System**: Users can book tours.
  - **Reviews**: Users can submit reviews for tours.
  - **Search & Filter**: Tours can be searched by city, group size, and other criteria.
  - **Role-Based Authorization**: Backend endpoints support admin functionality, no admin panel is implemented on the frontend.

## Installation

### Prerequisites

- Node.js (v16 or later)
- MongoDB (or use a cloud instance like MongoDB Atlas)

### Clone the Repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/Naima006/JourneyZeal-Tour-Management.git
```

### Frontend Setup

1. Navigate to the frontend folder:

```bash
cd JourneyZeal-Tour-Management/tour-management/frontend
```

2. Install the frontend dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm start
```

This will run the React development server at `http://localhost:3000`.

### Backend Setup

1. Navigate to the backend folder:

```bash
cd ../backend
```

2. Install the backend dependencies:

```bash
npm install
```

#### Backend Dependencies:

- **Express**: Web framework for Node.js.
- **MongoDB/Mongoose**: Database and ORM for interacting with MongoDB.
- **bcryptjs**: Library for hashing passwords.
- **jsonwebtoken**: For generating and verifying authentication tokens.
- **cookie-parser**: Middleware for parsing cookies.
- **dotenv**: For managing environment variables.
- **cors**: For enabling Cross-Origin Resource Sharing (CORS).
- **nodemon**: For auto-restarting the server during development.

#### Backend Scripts:

- **start**: Starts the backend server.
- **start-dev**: Starts the backend server with `nodemon` for auto-reloading during development.

To start the backend server in development mode, run:

```bash
npm run start-dev
```

### Backend Folder Structure

- **models**: Mongoose models for MongoDB collections (e.g., User, Tour, Booking).
- **routes**: API routes for different entities (e.g., tours, users, auth, booking).
- **controllers**: Functions for handling the logic behind each route (e.g., create, update, delete).
- **utils**: Utility functions (e.g., token verification, password hashing).

### Create a `.env` file in the backend directory with the following variables:

```
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET_KEY=<your-secret-key>
```
