const express = require('express');

const { registerUser, loginUser } = require('../controllers/authController')

const router = express.Router();


// Login User
router.post('/login', loginUser)

// Register new user
router.post('/register', registerUser)


module.exports = router