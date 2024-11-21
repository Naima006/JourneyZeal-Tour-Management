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
  - **Booking System**: Users can book tours and view their bookings.
  - **Reviews**: Users can submit reviews for tours.
  - **Search & Filter**: Tours can be searched by city, group size, and other criteria.
  - **Role-Based Authorization**: Admins can access certain routes, while users have limited access.

## Installation

### Prerequisites

- Node.js (v16 or later)
- MongoDB (or use a cloud instance like MongoDB Atlas)

### Clone the Repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/Naima006/JourneyZeal-Tour-Management.git

## Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd JourneyZeal-Tour-Management/tour-management/frontend

2. Install the frontend dependencies:
   ```bash
   npm install

3. Run the development server:
   ```bash
   npm start

This will run the React development server at http://localhost:3000.
