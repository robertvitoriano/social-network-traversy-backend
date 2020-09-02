const express = require("express");
const Router = express.Router();

//@route  GET api/auth
//@desc   TEST route
//@access Public
app.get("/", (req, res) => {
  res.send("Auth Route");
});
