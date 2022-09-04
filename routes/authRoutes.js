const express = require('express');

const { registerUser, loginUser } = require('../controllers/authController')

const router = express.Router();


// Register new user
router.post('/sign-up', registerUser)

// Login User
router.post('/sign-in', loginUser)


module.exports = router