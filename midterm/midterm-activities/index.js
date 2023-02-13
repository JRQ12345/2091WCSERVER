const express = require('express');
const app = express();
const port = 3111;

app.get('/', (req, res) => {
  res.send('Hello, Welcome to the Express starter template for Stackblitz!');
});

app.listen(port, () => {
  console.log(`App is live at http://localhost:${port}`);
});
