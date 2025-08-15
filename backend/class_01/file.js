const fs = require('fs');
const os = require('os');

console.log(os.cpus().length);


//async
// console.log("from async side")
// console.log("12");
// fs.readFile("data.txt", "utf-8", (err, result) => {
//     console.log(result);
// });

// console.log("13");
// console.log("14");


//sync
console.log("\n from synchronous side")
console.log("12");
const result = fs.readFileSync("data.txt", "utf-8");
console.log(result);
console.log("13");
console.log("14");


// //sync
// // fs.writeFileSync("./test.txt", "hi there, im from delhi , can we talk on aws cloud topic");


// //async
// // fs.writeFile("./test.txt", "hello world" , (err) => {});


// //sync
// // const result =fs.readFileSync("./data.txt", "utf-8")
// // console.log(result);


// //async
// const result =fs.readFile("./data.txt", "utf-8", (err, result) => {
//     if(err){
//         console.log("Error is :" + err);
//     }else{
//   console.log(result);
//     }
// })


// fs.appendFileSync("./text.txt", new Date().getDate().toLocaleString());