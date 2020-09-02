const express = require('express');
const Router =  express.Router();

//@route  GET api/users
//@desc   TEST route
//@access Public
app.get('/',(req,res)=>{
    res.send("User Route");
})