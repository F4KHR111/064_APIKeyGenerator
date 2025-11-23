const express = require("express");
const router = express.Router();
const admin = require("../controllers/adminController");
const adminAuth = require("../middleware/adminAuth");

// ======= API ADMIN =======

// Login admin
router.post("/login", admin.login);

// Logout
router.get("/logout", admin.logout);

// Ambil data admin login
router.get("/me", adminAuth, admin.me);

// Ambil semua user (dashboard)
router.get("/users", adminAuth, admin.getAllUsers);

// Ambil semua API key
router.get("/apikey", adminAuth, admin.getAllApiKeys);


// ======= HTML PAGES =======

// Halaman Login
router.get("/login-page", (req, res) => {
    res.sendFile("html/admin/login.html", { root: "public" });
});

// Halaman Dashboard admin
router.get("/dashboard", adminAuth, (req, res) => {
    res.sendFile("html/admin/dashboard.html", { root: "public" });
});

module.exports = router;
