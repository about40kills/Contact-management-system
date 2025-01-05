// create an express server
const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');

//process module to fetch the value of the .env
const dotenv = require('dotenv').config();

//connect to db
connectDb();
//create the express app
const app = express();

// define a port
const port = process.env.PORT || 5000;

//add middleware
app.use(express.json()); //a body passer middleware

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Contact Management System API');
});
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);


//create a listen on the port  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});