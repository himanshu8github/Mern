const http = require('http');

const server = http.createServer((req, res) => {
   try {
    if(req.method === 'GET'){
 if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Homepage</h1>');
    } else if (req.url === '/about'){
     res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>About</h1>');
    }else if (req.url === '/contact'){
     res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Contact</h1>');
    }else {
     res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>Not Found</h1>');
    }
    } else{
        throw new Error('Method not alowed');
    }
    
   } catch (error) {
    res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Server Error');
   }
});

server.listen(5500, () => {
    console.log("Server is running on 5500")
})