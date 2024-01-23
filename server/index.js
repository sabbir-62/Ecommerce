//Import npm packages
const express = require('express');
const dotenv = require('dotenv').config();


const app = express();

//Port number import from dotenv
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})