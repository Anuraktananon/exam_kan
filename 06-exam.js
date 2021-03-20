//console.log(x << y)

const readlineSync = require('readline-sync');
let x = readlineSync.question(' frist number is : ');
let y = readlineSync.question(' second number is : ');

console.log( x * (2 ** y) )


/*
function shiftToLeft(x, y) {
	console.log( x * (2 ** y) )
	return  x * (2 ** y)
}
*/