const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { createUser, getUserByEmail, verifyUser } = require('../models/userModel');
const { listFiles } = require('../models/fileModel');

const signUpHandler = (req, res) => {
    const { email, password } = req.body;
    createUser(email, password, 'client_user', (err) => {
        if (err) return res.status(400).json({ message: "User already exists" });

        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.json({ message: "Sign up successful", verifyToken: token });
    });
};

const loginHandler = (req, res) => {
    const { email, password } = req.body;
    getUserByEmail(email, (err, user) => {
        if (err || !user) return res.status(404).json({ message: "User not found" });

        if (!bcrypt.compareSync(password, user.password))
            return res.status(401).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user.id, type: user.type }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });
        res.json({ token });
    });
};

const listFilesHandler = (req, res) => {
    listFiles((err, files) => {
        if (err) return res.status(500).json({ message: "Database error" });
        res.json(files);
    });
};

module.exports = { signUpHandler, loginHandler, listFilesHandler };
