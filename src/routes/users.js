const express = require('express');
const Router =  express.Router();
const {check, validationResult} = require('express-validator');
//@route  GET api/users
//@desc   TEST route
//@access Public
Router.get('/users',(req,res)=>{
    console.log(req.body);
    res.send("User Route");
})




module.exports = Router;