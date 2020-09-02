const express = require("express");
const Router = express.Router();

//@route  GET api/users
//@desc   TEST route
//@access Public
Router.get("/auth", (req, res) => {
  res.send("User Route");
});

module.exports = Router;
