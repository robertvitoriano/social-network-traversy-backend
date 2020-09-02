const express = require("express");
const Router = express.Router();

//@route  GET api/profile
//@desc   TEST route
//@access Profile
app.get("/", (req, res) => {
  res.send("Profile Route");
});
