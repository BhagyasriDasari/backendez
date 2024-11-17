const bcrypt = require('bcrypt');
const db = require('./database');

const createUser = (email, password, type, callback) => {
    const hashedPassword = bcrypt.hashSync(password, 10);
    db.run(
        `INSERT INTO users (email, password, type) VALUES (?, ?, ?)`,
        [email, hashedPassword, type],
        callback
    );
};

const getUserByEmail = (email, callback) => {
    db.get(`SELECT * FROM users WHERE email = ?`, [email], callback);
};

const verifyUser = (email, callback) => {
    db.run(`UPDATE users SET is_verified = 1 WHERE email = ?`, [email], callback);
};

module.exports = { createUser, getUserByEmail, verifyUser };
