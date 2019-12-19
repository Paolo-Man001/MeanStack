const express = require('express'); // import 'express'

const app = express();

app.use((req, res, next) => {
  console.log('First middleware');
  next();
});

app.use((req, res, next) => {
  res.send('Hello from express!!!');
});


module.exports = app;  //  exports this module for node to listen to by import.
