const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

// Home route
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// About route
app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Contact route
app.get('/contact', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// Set up multer middleware
const upload = multer({ storage: storage });

// Serve static files in the uploads directory
app.use('/uploads', express.static('uploads'));

// Parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the contact form
app.get('/contact', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Start server
app.listen(3000, function () {
  console.log('Server started on port 3000...');
});
