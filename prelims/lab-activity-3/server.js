//Task Name: Lab 3
//Author: Quiambao, Jose Raphael T.
//Section: WD-201

//Use require to import local module

var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><h3>Welcome to my Node.js Application</h3><br><br><p>Welcome Jose Raphael T. Quiambao. This is an activity about basics of Node.js</p></body></html>'
    );
    res.end();
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><h3>This is the About Page</h3><br><br><p>Hello Jose Raphael T. Quiambao. This activity will teach on how to deal with a simple server and local modules in Node.js</p></body></html>'
    );
    res.end();
  } else if (req.url == '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><h3>This is the Contact Page</h3><br><br><p>Jose Raphael T. Quiambao, if you want additional details about this activity go to this site: https://www.tutorialsteacger.com/nodejs/nodejs-tutorials</p></body></html>'
    );
    res.end();
  } else if (req.url == '/gallery') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><h3>This is the Gallery Page</h3></body></html>');
    res.end();
  } else res.end('Invalid Request!');
});

server.listen(5000);

console.log('Node.js web server at port 5000 is running..');
