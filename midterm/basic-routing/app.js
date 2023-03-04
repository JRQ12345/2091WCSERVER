const express = require('express');
const app = express();

const express = require('express');
const app = express();
app.use(express.static('public'));

const path = require('path');
const mime = require('mime-types');
const multer = require('multer');

// Set up the static files middleware
app.use(express.static('public'));

// Set up the routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});

app.post('/contact', (req, res) => {
  const { name, subject, message, email } = req.body;
  // Do something with the form data (e.g. send email)
  res.send(`Thank you for contacting us, ${name}!`);
});

const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // specify the destination directory for the uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // use the original name of the file
  },
});

const upload = multer({ storage: fileStorage });
//file upload route
app.post('/uploads', upload.single('myFile'), (req, res) => {
  console.log(req.file);

  req.file.mimetype = mime.lookup(req.file.originalname);

  res.sendFile(path.join(__dirname, 'upload.html'));
});
//route to upload
app.get('/file-upload', (req, res) => {
  res.sendFile(__dirname + '/' + 'upload.html');
});

app.post('/upload', upload.single('file'), function (req, res) {
  const file = req.file;

  // Process form data and file upload here...

  res.send('Message sent successfully!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
