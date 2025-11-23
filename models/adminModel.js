const db = require('../config/db');

exports.createAdmin = (email, password, callback) => {
  db.query('INSERT INTO admin (email, password) VALUES (?, ?)', [email, password], callback);
};

exports.findAdminByEmail = (email, callback) => {
  db.query('SELECT * FROM admin WHERE email = ?', [email], callback);
};
