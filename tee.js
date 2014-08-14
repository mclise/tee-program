var fs = require('fs');
console.log("Type stuff here:");
process.stdin.pipe(process.stdout);
process.stdin.pipe(fs.createWriteStream(process.argv[2]));