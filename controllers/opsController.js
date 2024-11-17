const multer = require('multer');
const crypto = require('crypto');
const { uploadFile } = require('../models/fileModel');

// Multer setup
const upload = multer({
    dest: 'uploads/',
    fileFilter: (req, file, cb) => {
        const allowedMimeTypes = [
            'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        ];
        if (!allowedMimeTypes.includes(file.mimetype)) {
            return cb(new Error('Invalid file type'));
        }
        cb(null, true);
    },
}).single('file');

const uploadFileHandler = (req, res) => {
    upload(req, res, (err) => {
        if (err) return res.status(400).json({ message: err.message });

        const { filename } = req.file;
        const secureUrl = crypto.randomBytes(16).toString('hex');
        uploadFile(filename, req.user.id, secureUrl, (err) => {
            if (err) return res.status(500).json({ message: "Database error" });
            res.json({ message: "File uploaded successfully", secureUrl });
        });
    });
};

module.exports = { uploadFileHandler };
