const express = require('express'); // import 'express'

const app = express();


app.use('/api/posts', (req, res, next) => {

  const posts = [
    {
      id: 'qwer123',
      title: 'First server-side TITLE',
      content: 'Content #1 from the server!'
    },
    {
      id: 'poiu123',
      title: 'Second server-side TITLE',
      content: 'Content #2 from the server!'
    }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });

});


module.exports = app;  //  exports this module for node to listen to by import.
