const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require("express-session");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Session
app.use(
  session({
    secret: "supersecret",
    resave: false,
    saveUninitialized: true,
  })
);

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Gunakan routes
app.use('/', authRoutes);
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);

// Default route
app.get('/', (req, res) => {
  res.redirect('/admin/login-page');
});

// Start server
app.listen(port, () =>
  console.log(`🚀 Server running at http://localhost:${port}`)
);
