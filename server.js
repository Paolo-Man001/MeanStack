const http = require('http'); // Node module/package import
const app = require('./backend/app'); // IMPORT the app/js

/*const server = http.createServer((req, res) => {
  res.end('<h1>This is my first response</h1>');
});*/

const port = process.env.PORT || 3000;

app.set('port', port);
const server = http.createServer(app);


/* Set-up Node to listen to var PORT...
  * if PORT is not set, use port: 3000
  */
server.listen(port);
