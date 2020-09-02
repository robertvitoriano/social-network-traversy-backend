const express = require('express');
const connectDB = require('./../config/db');
const Routes = require('./router');
const PORT = process.env.PORT || 4000;

const app = express();
//Connect Database
connectDB();
// Using exppress Parser
app.use(express.json({extended:false}));

//using Router
app.use(Routes)









//listening to PORT
app.listen(PORT,()=>{
    
    console.log('My App is up and running on port: '+PORT);
})