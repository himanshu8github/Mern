const http = require('http');

const myserver = http.createServer((req, res) => {
    //     console.log(req);
    // console.log(req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.end("<h2>Hello!!!!!!!1</h2>")
    console.log(req.url);// route
    console.log(req.method); // return http method
    console.log("new req is coming");
    // res.write("hello world!")
    res.end("hello from server");
})

myserver.listen(5000, () => console.log("Server started!"))