import {createServer} from 'http';

const users =[
    {id:1, name : 'himani'},
     {id:2, name : 'himanshi'},
      {id:3, name : 'vashu'},
       {id:4, name : 'radhika'},

];

//logger middleware
const logger = (req, res, next) =>{
    console.log(`${req.method}, ${req.url}`);
    next();
}

const server = createServer((req, res) => {

    logger (req, res, () =>  {
        
if(req.url === '/api/user' && req.method === 'GET'){
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(users));
    res.end();
}else if(req.url.match(/\/api\/user\/([0-9]+)/) && req.method === 'GET'){
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));
    if(user){
  res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(user));
    res.end();
    }
   
}else{
    res.statusCode = 404;
        res.write(JSON.stringify({ message: 'User not found' }));
        res.end();
}
    })

})

server.listen(3300, () => {
    console.log("server running on 3300")
})