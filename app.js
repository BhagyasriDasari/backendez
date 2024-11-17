const express = require('express');
const dotenv = require('dotenv');
const opsRoutes = require('./routes/opsRoutes');
const clientRoutes = require('./routes/clientRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/ops', opsRoutes);
app.use('/client', clientRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
