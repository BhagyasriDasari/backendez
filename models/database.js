const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./file_sharing.db', (err) => {
    if (err) console.error("Error opening database:", err.message);
    else console.log("Connected to SQLite database.");
});

db.serialize(() => {
    // Create Users Table
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            type TEXT NOT NULL CHECK(type IN ('ops_user', 'client_user')),
            is_verified INTEGER DEFAULT 0
        )
    `);

    // Create Files Table
    db.run(`
        CREATE TABLE IF NOT EXISTS files (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            filename TEXT NOT NULL,
            uploaded_by INTEGER NOT NULL,
            secure_url TEXT NOT NULL,
            FOREIGN KEY(uploaded_by) REFERENCES users(id)
        )
    `);
});

module.exports = db;
