var fs = require('fs');
var path = require('path');

module.exports = function () {
  return {

    static_route: function (request, response) {
      var fp = '.' + request.url;
      
      if (fp == './') {
        fp = './views/index.html';
        
      } else {
        
        var extname = path.extname(fp);
        var contentType = 'text/html';
      
        switch (extname) {
          case '.html':
            contentType = 'text/html';
            break;
          case '.js':
            contentType = 'text/javascript';
            break;
          case '.css':
            contentType = 'text/css';
            break;
          case '.json':
            contentType = 'application/json';
            break;
          case '.png':
            contentType = 'image/png';
            break;
          case '.jpg':
            contentType = 'image/jpg';
            break;
        }
      }
      fs.readFile(fp, function (error, content) {
        if (error) {
          fs.readFile('./views/404.html', function (error, content) {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
          });
        }
        else {
          response.writeHead(200, { 'Content-Type': contentType });
          response.end(content, 'utf-8');
        }
      });
    }
  };
};