// import mongoose
const { default: mongoose } = require("mongoose");


// database connection function
const connection = () => {
    try{
        const dbUrl = process.env.DATABASE;
        mongoose.connect(dbUrl)
        console.log("Database connection successfully");
    }
    catch(error){
        console.log("Database Error")
    }
}

module.exports = connection;