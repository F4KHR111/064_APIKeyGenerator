const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Halaman login dan register (HTML statis)
router.get('/login', (req, res) => {
  res.sendFile('login.html', { root: './public/html' });
});
router.get('/register', (req, res) => {
  res.sendFile('register.html', { root: './public/html' });
});

// Aksi register dan login (POST)
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

module.exports = router;
