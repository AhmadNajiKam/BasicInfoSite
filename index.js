const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  let filename = '.' + q.pathname;
  if (filename === './') filename = './index.html';
  fs.readFile(filename, (err, data) => {
    if (err) {
      fs.readFile('./404.html', (_, data2) => {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write(data2);
        return res.end();

      });
    }
    else {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.write(data);
      return res.end();
    }
  })


}).listen(8080);
