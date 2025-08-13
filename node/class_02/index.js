const http = require('http');

const myserver = http.createServer((req, res) => {
    //     console.log(req);
    // console.log(req.headers);
    console.log("new req is coming");
    res.end("hello from server");
})

myserver.listen(5000, () => console.log("Server started!"))