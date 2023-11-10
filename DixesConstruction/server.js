const http = require("http");
const fs = require("fs");




function error404(res) {
  fs.readFile('./html/404.html', (err, data) => {
    if (err) throw err;
    res.statusCode = 404;
    res.write(data);
    res.end();
  });
}



http
  .createServer((req, res) => {
    if (req.url.endsWith(".css")) {
      let cssFile = req.url.slice(1);
      fs.readFile(cssFile, (err, data) => {
        if (!err) {
          res.setHeader("Content-Type", "text/css");
          res.statusCode = 200;
          res.write(data);
          res.end();
        } else error404(res);
      })
    } else if (req.url.endsWith(".js")) {
      let jsFile = req.url.slice(1);
      fs.readFile(jsFile, (err, data) => {
        if (!err) {
          res.setHeader("Content-Type", "text/javascript");
          res.statusCode = 200;
          res.write(data);
          res.end();
        } else error404(res);
      })
    } else {
      fs.readFile(__dirname + req.url, (err, data) => {
        res.setHeader("Content-Type", "text/html");
        if (err) error404(res);
        else {
          res.statusCode = 200;
          res.write(data);
          res.end();
        }
      });
    }


    
    if (req.url === '/home' || req.url === '/') {
      res.statusCode = 200;
      fs.readFile(`./html/index.html`, (err, data) => {
        if (err) error404(req, res);
        else {
          res.statusCode = 200;
          res.write(data);
          res.end();
        }
      });
    }
  })
  .listen(8888, '1.1.1.1');