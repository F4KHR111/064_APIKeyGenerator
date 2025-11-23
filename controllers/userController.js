const path = require("path");
const db = require("../config/db");

exports.dashboard = (req, res) => {
    const filePath = path.join(__dirname, "..", "public", "html", "dashboard_user.html");
    res.sendFile(filePath);
};

exports.saveApiKey = (req, res) => {
    const { user_id, first_name, last_name, email, api_key } = req.body;

    if (!user_id || !first_name || !last_name || !email || !api_key) {
        return res.json({ success: false, message: "Semua field harus diisi." });
    }

    const sql = `
        INSERT INTO api_key (user_id, first_name, last_name, email, api_key)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(sql, [user_id, first_name, last_name, email, api_key], (err, result) => {
        if (err) {
            console.log("Error:", err);
            return res.json({ success: false, message: "Gagal menyimpan API key." });
        }

        res.json({
            success: true,
            message: "API Key berhasil disimpan!",
            id: result.insertId
        });
    });
};
