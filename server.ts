const https = require('https');
const fs = require('fs');
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const httpsOptions = {
  key: fs.readFileSync('./ssl/key.pem'),
  cert: fs.readFileSync('./ssl/cert.pem'),
};

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

https
  .createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  })
  .listen(443, (err) => {
    if (err) throw err;
    console.log('> Ready on https://localhost:443');
  });
