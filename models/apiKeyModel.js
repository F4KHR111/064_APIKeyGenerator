const db = require('../config/db');

const ApiKey = {
  create: (key, out_of_date, callback) => {
    db.query('INSERT INTO ApiKey (`key`, out_of_date) VALUES (?, ?)', [key, out_of_date], callback);
  }
};

module.exports = ApiKey;
