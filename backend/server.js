const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const mongoose =  require("mongoose")
const router = require("./Routes/routes");
require('dotenv').config();


// Middleware
app.use(cors()); // Use the cors middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/', router);


// mongodb connection

mongoose.connect(process.env.Mongo_url).then(()=>{
    try{
     console.log("mongodb connection")
    }catch(error){
     console.log("error while mongodb connection" ,error);
    }
})

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
