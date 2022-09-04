const express = require('express');

const { registerUser, loginUser } = require('../controllers/authController')

const router = express.Router();


// Login User
router.post('/sign-in', loginUser)

// Register new user
router.post('/sign-up', registerUser)


module.exports = router