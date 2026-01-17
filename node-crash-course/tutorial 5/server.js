const http = require('http');
const fs = require('fs');
const { url } = require('inspector');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    //lodash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    });
    greet();

    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url) {
        case '/': 
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            path += 'about.html';
            res.statusCode = 301;
            res.setHeader('Location', './about');
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
  
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        } else{
            res.write(data);
            res.end();
        }
    }); 

}); 

// localhost: takes to a loop back ip addresss - 127.0.0.1
// port number: specific channel 
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});
