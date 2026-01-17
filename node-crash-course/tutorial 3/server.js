const http = require('http');
const fs = require('fs');
const { url } = require('inspector');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
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
    // res.write('<p>hello, how you?</p>');
    // res.end();
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        } else{
            res.write(data);
            res.end(); 
            /* if you a sending a single html content
                use : res.end(data) instead of res.write() 
                res.end()
            */
        }
    }); 

}); 

// localhost: takes to a loop back ip addresss - 127.0.0.1
// port number: specific channel 
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});
