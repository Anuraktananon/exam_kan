
let A = 3
let B = 4
let C = 5

const readlineSync = require('readline-sync');
let m = readlineSync.question('เลือกเลข 1 - 10 ');


if (m > 5){
     console.log(` Y = ${A * m * 2}${B * m + C}`);
} 
else if (m == 5) {
     console.log(` Y = ${+ A * m * 2}${B * m - C}`);
} 
else {
     console.log(` Y = ${A * m * 2}${B * m}`); 
}
