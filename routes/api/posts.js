const express = require("express");
const Router = express.Router();

//@route  GET api/posts
//@desc   TEST route
//@access Public
app.get("/", (req, res) => {
  res.send("Posts Route");
});

