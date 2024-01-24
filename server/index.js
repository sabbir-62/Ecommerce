// import npm packages
const express = require('express');
const connection = require("./config/dbConnect")
const authRoute = require("./routes/authRoute");


// configure dotenv
require('dotenv').config();


// create express instant
const app = express();


// route
app.use("/", (req, res) => {
    res.send("this is our server")
})
app.use("/api/v1", authRoute);

// database connection
connection();


// port number import from dotenv
const PORT = process.env.PORT || 8080;


// server listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})