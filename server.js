const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //set header content type 
    res.setHeader('Content-type', 'text/html');

    let path ='./views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
            break;
    }
    
    //sena a html file
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
        } else {
            //res.write(data);
            res.end(data);
        }
    })
});


server.listen(3000, 'localhost', () => {
    console.log('listeing the request for server on port 3000');
})