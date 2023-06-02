const express = require('express');
const app = express();

console.log('Hello World!');

app.get('/test', (req, res) => {
  res.json('Hello World!');
});

app.listen(4000);
