const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/dashboard", userController.dashboard);
router.post("/save-api-key", userController.saveApiKey);


module.exports = router;
