const express = require('express');
const clientRoutes = require('./routes/clientRoutes');
const opsRoutes = require('./routes/opsRoutes');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files for uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/client', clientRoutes); // Base route for client-related endpoints
app.use('/ops', opsRoutes);       // Base route for ops-related endpoints

// Default Route for Root
app.get('/', (req, res) => {
  res.send('Welcome to the Secure File Sharing System');
});

// Error Handling
app.use((req, res, next) => {
  res.status(404).send('Route not found');
});

module.exports = app;
