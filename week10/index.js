// let course = "it121";
// console.log(course);
import http from 'http';
import fs from 'fs';
http.createServer((req,res) => {
    let path = req.url.toLowerCase();
    switch(path) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Home page');
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Welcome to About page');
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Page doesn\'t exist');
            break;
    }
}).listen(process.env.PORT || 3000);