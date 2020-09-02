const express = require('express');
const connectDB = require('./config/db');
const app = express();

const PORT = process.env.PORT || 4000;
//Connect Database

connectDB();

app.listen(PORT,()=>{
    
    console.log('My App is up and running on port: '+PORT);
})