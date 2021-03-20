const readlineSync = require('readline-sync')

let a = +readlineSync.question('a?: ')
let b = +readlineSync.question('b?: ')

if (a + b == 10) {
    console.log('True')
} else if (a == 10 || b == 10) {
    console.log('True')
}else if ( a + b !== 10) {
    console.log('False')
}



/*
function makesTen(a, b) {
	if (a + b == 10) {
		console.log('True')
		return true;
	} else if (a == 10 || b == 10) {
		console.log('True')
		return true;
	}else if ( a + b !== 10) {
		console.log('False')
		return false;
	}
}
*/