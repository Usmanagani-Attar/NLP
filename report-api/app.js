const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const reportRoutes = require('./routes/reportRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API working fine!' });
});

// Report routes
app.use('/api/reports', reportRoutes);

module.exports = app;
