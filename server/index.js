// import npm packages
const express = require('express');
const connection = require("./config/dbConnect")
const authRoute = require("./routes/authRoute");


// configure dotenv
require('dotenv').config();


// create express instant
const app = express();
app.use(express.json())


// route
app.use("/api/v1", authRoute);


// port number import from dotenv
const PORT = process.env.PORT || 8080;


// database connection
connection();

// server listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})