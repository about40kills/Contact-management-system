## Contact Management Backend
This project is a backend implementation for a Contact Management System, built with Node.js. It provides RESTful APIs to manage user contacts, including creating, reading, updating, and deleting contact information.

## Features
- **Add new contacts**: Store contact information such as name, phone number, and email.
- **View all contacts**: Retrieve a list of all stored contacts.
- **Update contact details**: Modify the details of an existing contact.
- **Delete a contact**: Remove a contact from the database.

## Technologies used
- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: Database to store contact details (can use Mongoose for schema modeling).
- **Dotenv**: For environment variable management.



## Table of Contents

- [Installation](#installation)
- [Endpoints](#endpoints)
- [Environment Variables](#environment-variables)
- [Error Handling](#error-handling)
- [License](#license)

## Installation

# Prerequisites
- Node.js
- npm or yarn

1. Clone the repository:
   ```bash
   git clone https://github.com/about40kills/Contact-management-system.git
   cd contacts-backend

2. Install dependencies
    ```bash
    npm install

3. Set up environmental variables:
    create a .env file in the root directory and add the following variables:
    ```bash
    PORT=5001
    CONNECTION_STRING=yourmongodbconnectionstring

4. Run development server 
    ```bash
    npm run dev

## Endpoints
    Here is a list of Api endpoints
# Authentication
- **Login**
- POST /api/login
- Request Body:
    ```json
    {
     "email": "user@example.com",
     "password": "password123"
    }
- Response:
    ```json
    {
      "token": "jwt_token"
    }

#Contacts
1. Create a contact
- POST /api/contacts
- Headers: Authorization: Bearer <token>
- Request body:
    ```json
    {
     "name": "John Doe",
     "email": "john.doe@example.com",
     "phone": "+1234567890"
    }
- Response:
    ```json
    {
     "_id": "contact_id",
     "name": "John Doe",
     "email": "john@example.com",
     "phone": "123-456-7890",
     "user_id": "user_id"
    }

2. Get All Contacts
- GET /api/contacts
- Headers: Authorization: Bearer <token>
- Response:
    ```json
    [
        {
            "_id": "contact_id",
            "name": "John Doe",
            "email": "john@example.com",
            "phone": "123-456-7890",
            "user_id": "user_id"
        }
    ]

3. Get A Contact By Id
- GET /api/contacts/:id
- Headers: Authorization: Bearer <token>
- Response:
    ```json
    {
    "_id": "contact_id",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "123-456-7890",
    "user_id": "user_id"
    }


4. Update A Contact
- PUT /api/contacts/:id
- Headers: Authorization: Bearer <token>
- Request body:
    ```json
    {
    "name": "Davis Doe",
    "email": "opoku@example.com",
    "phone": "123-456-7890"
    }
- Response:
    ```json
    {
    "_id": "contact_id",
    "name": "Davis Doe",
    "email": "opoku@example.com",
    "phone": "123-456-7890",
    "user_id": "user_id"
    }

5. Delete A Contact
- DELETE /api/contacts/:id
- Headers: Authorization: Bearer <token>
- Response:
    ```json
    {
  "message": "Deleted contact with id contact_id"
    }

## Environment Variables
The following environment variables need to be set in your .env file:

- **PORT**: The port on which the server will run (default: 5000).
- **MONGO_URL**: The connection string for your MongoDB database.
- **ACCESS_TOKEN_SECRET**: The secret key for signing JWT tokens.


## Error Handling
The API uses a centralized error handling middleware to catch and respond to errors.


