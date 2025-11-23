const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Gunakan routes
app.use('/', authRoutes);
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);

// 🔹 Tambahkan route default (ini solusi untuk Cannot GET /)
app.get('/', (req, res) => {
  res.redirect('/login'); // atau bisa diganti '/register' kalau mau
});

// Jalankan server
app.listen(port, () => console.log(`🚀 Server running at http://localhost:${port}`));
