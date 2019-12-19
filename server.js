const http = require('http'); // Node module/package import

const server = http.createServer((req, res) => {
  res.end('<h1>This is my first response</h1>');
});


/* Set-up Node to listen to var PORT...
  * if PORT is not set, use port: 3000
  */
server.listen(process.env.PORT || 3000);
