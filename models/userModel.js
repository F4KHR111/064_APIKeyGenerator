const db = require('../config/db');

const User = {
  create: (data, callback) => {
    db.query('INSERT INTO User SET ?', data, callback);
  },
  findByEmail: (email, callback) => {
    db.query('SELECT * FROM User WHERE email = ?', [email], callback);
  },
  getAllWithApiKey: (callback) => {
    const sql = `
      SELECT User.id, first_name, last_name, email, ApiKey.key, ApiKey.out_of_date
      FROM User
      LEFT JOIN ApiKey ON User.api_key_id = ApiKey.id`;
    db.query(sql, callback);
  },
  updateApiKey: (api_key_id, user_id, callback) => {
    db.query('UPDATE User SET api_key_id = ? WHERE id = ?', [api_key_id, user_id], callback);
  }
};

module.exports = User;
