const db = require('../config/db');
const bcrypt = require("bcrypt");

// =================== LOGIN ===================
exports.login = (req, res) => {
    const { email, password } = req.body;

    db.query("SELECT * FROM admin WHERE email = ?", [email], (err, result) => {
        if (err) throw err;

        if (result.length === 0)
            return res.send("Admin tidak ditemukan");

        const admin = result[0];

        const validPass = bcrypt.compareSync(password, admin.password);
        if (!validPass)
            return res.send("Password salah");

        // simpan sesi
        req.session = { admin: admin };

        res.redirect("/admin/dashboard");
    });
};

// =================== LOGOUT ===================
exports.logout = (req, res) => {
    req.session = null;
    res.redirect("/admin/login-page");
};

// =================== GET ADMIN LOGIN ===================
exports.me = (req, res) => {
    res.json(req.session.admin);
};

// =================== GET ALL USERS ===================
exports.getAllUsers = (req, res) => {
    const sql = `
        SELECT 
            user.id,
            user.first_name, 
            user.last_name, 
            user.email, 
            apikey.key,
            apikey.out_of_date
        FROM user
        LEFT JOIN apikey ON user.api_key_id = apikey.id
    `;

    db.query(sql, (err, users) => {
        if (err) throw err;
        res.json(users);
    });
};

// =================== GET ALL APIKEY ===================
exports.getAllApiKeys = (req, res) => {
    db.query("SELECT * FROM apikey", (err, keys) => {
        if (err) throw err;
        res.json(keys);
    });
};
