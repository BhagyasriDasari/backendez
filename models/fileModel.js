const db = require('./database');

const uploadFile = (filename, uploadedBy, secureUrl, callback) => {
    db.run(
        `INSERT INTO files (filename, uploaded_by, secure_url) VALUES (?, ?, ?)`,
        [filename, uploadedBy, secureUrl],
        callback
    );
};

const listFiles = (callback) => {
    db.all(`SELECT * FROM files`, callback);
};

module.exports = { uploadFile, listFiles };
