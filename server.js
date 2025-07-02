const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
require('dotenv').config();

const authRoutes = require('./routes/auth');
const authorRoutes = require('./routes/author');
const adminRoutes = require('./routes/admin');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

app.use('/api/auth', authRoutes);
app.use('/api/author', authorRoutes);
app.use('/api/admin', adminRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di port ${PORT}`);
});
