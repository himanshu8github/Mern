const url = require('url');

const myURL = new URL('https://google.com:8080/products?category=books&page=2');

console.log("hostname : " + myURL.hostname); // example.com
console.log("pathname :  " + myURL.pathname); // /products
console.log("query : " + myURL.search);   // ?category=books&page=2
