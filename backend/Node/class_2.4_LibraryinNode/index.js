import path from 'path';
import os from 'os';

const filepath = './dir1/dir2/test.txt';

//basename()

console.log(path.basename(filepath));

//dirrectory name()
console.log(path.dirname(filepath));

//extension name
console.log(path.extname(filepath))

//parse = give whole object
console.log(path.parse(filepath))


// os
// userInfo
console.log(os.userInfo());

//total memory
console.log(os.totalmem());

//free memory
console.log(os.freemem());

//cpus
console.log(os.cpus());