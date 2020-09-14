const express = require("express");
const Router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const UserModel = require("./../models/User");
//@route  POST /users
//@desc   Register user
//@access Public
const validation = {
  email: [
    check("name", "Name is required").not().isEmpty(),

    check(
      "password",
      "please enter a password with 6 or moder characters"
    ).isLength({ min: 6 }),

    check("email", "please enter a valid email").isEmail(),
  ],
};

Router.post("/users", validation.email, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, password } = req.body;

  try {
    let user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).send({ error: "user already exists" });
    }
    const avatar = gravatar.url(email, {
      s: "200",
      r: "pg",
      d: "mm",
    });

    user = new UserModel({
      name,
      email,
      avatar,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    const payload = {
      user: {
        id: user._id,
      },
    };
    jwt.sign(
      payload,
        config.get("jwtSecret"),
      { expiresIn: 3600 },
      (error, token) => {
          if(error) throw error;
          res.send({token,user})
      }
    );
  } catch (error) {
    return console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = Router;
