const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Halaman HTML dashboard admin
router.get('/dashboard', adminController.dashboard);

// API untuk fetch data user (dipanggil oleh dashboard_admin.html)
router.get('/data', adminController.getAllUsers);

module.exports = router;
