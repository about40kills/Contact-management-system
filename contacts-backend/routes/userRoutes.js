const express = require('express');
const router = express.Router();

const { loginUser, registerUser, currentUser } = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

//create the routes
//register
router.post("/register", registerUser);

//login
router.post("/login", loginUser);

//user info
router.get("/current", validateToken, currentUser);

module.exports = router;
