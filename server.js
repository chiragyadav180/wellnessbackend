// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config');

const authRoute=require('./routes/authRoutes')
const sessionRoute=require('./routes/sessionRoutes');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api', authRoute);
app.use('/api', sessionRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
