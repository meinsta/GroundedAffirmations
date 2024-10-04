const express = require('express');
const cors = require('cors');
const session = require('express-session');
const csrf = require('csurf');
require('dotenv').config();

const tiktokRoutes = require('./routes/tiktokRoutes');

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000'
}));
app.use(express.json());

// Set up session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === 'production' }
}));

// Set up CSRF protection
app.use(csrf());

// CSRF error handler
app.use((err, req, res, next) => {
  if (err.code !== 'EBADCSRFTOKEN') return next(err);
  res.status(403).json({ error: 'Invalid CSRF token' });
});

// Add CSRF token to all responses
app.use((req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use('/api/tiktok', tiktokRoutes);

app.get('/test', (req, res) => {
  res.json({ message: 'Server is running' });
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running' });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});