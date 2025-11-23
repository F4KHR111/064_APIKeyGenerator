const db = require('../config/db');

exports.showLogin = (req, res) => res.render('login');
exports.showRegister = (req, res) => res.render('register');

exports.registerUser = (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  db.query('INSERT INTO User SET ?', { first_name, last_name, email, password }, (err) => {
    if (err) throw err;
    res.redirect('/login');
  });
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM User WHERE email = ? AND password = ?', [email, password], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.redirect(`/user/dashboard?id=${result[0].id}`);
    } else {
      res.send('Email atau password salah!');
    }
  });
};
