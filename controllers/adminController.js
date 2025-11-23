const db = require('../config/db');

// 🔹 Controller untuk halaman dashboard admin (HTML)
exports.dashboard = (req, res) => {
  // Kirim file HTML statis
  res.sendFile('dashboard_admin.html', { root: './public/html' });
};

// 🔹 API untuk ambil data semua user (dipanggil lewat fetch di HTML)
exports.getAllUsers = (req, res) => {
  const sql = `
    SELECT 
      User.first_name, 
      User.last_name, 
      User.email, 
      ApiKey.key, 
      ApiKey.out_of_date
    FROM User 
    LEFT JOIN ApiKey ON User.api_key_id = ApiKey.id
  `;

  db.query(sql, (err, users) => {
    if (err) throw err;
    res.json(users); // kirim data JSON ke frontend
  });
};
