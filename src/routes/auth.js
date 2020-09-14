const express = require("express");
const userModel = require("../models/User");
const Router = express.Router();
const auth = require('./../middlewares/auth')

//@route  GET api/users
//@desc   TEST route
//@access Public
Router.get("/auth",auth, async(req,res)=>{

  try {
    const user = await userModel.findById(req.user.id);
    res.send(user);

  }       
  catch (error) {
    console.log(error);
    res.status(500).send(error)
    
  }
});

module.exports = Router;
