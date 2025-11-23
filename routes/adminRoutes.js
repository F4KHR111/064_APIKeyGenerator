const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const adminAuth = require("../middleware/adminAuth");

// Login
router.get("/login", adminController.loginPage);
router.post("/login", adminController.login);

// Dashboard (protected)
router.get("/dashboard", adminAuth, adminController.dashboard);

// Logout
router.get("/logout", adminAuth, adminController.logout);

module.exports = router;
