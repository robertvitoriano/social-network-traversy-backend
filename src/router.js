const router = require('express').Router();

const userRoutes  = require('./routes/users');
const authRoutes = require("./routes/auth");
const postsRoutes = require("./routes/posts");
const profileRoutes = require("./routes/profile");

router.use(userRoutes)

module.exports = router;