const express = require('express');
const app = express();

app.use(express.static('public'));

app.use(function (req, res, next) {
  console.log('/' + req.method);
  next();
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html');
});

app.use('*', function (req, res) {
  res.sendFile(__dirname + 'error.html');
});

const port = process.nextTick.PORT || 3000;

app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
