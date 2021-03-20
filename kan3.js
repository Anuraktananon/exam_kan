

const readlineSync = require('readline-sync');
let hour = readlineSync.questionInt('คุณจอดรถกี่ชั่วโมง');

let minute = readlineSync.questionInt('คุณจอดรถกี่นาที');
let money;

if ( minute === 0) {
   money = (hour - 1 ) * 30 
    console.log('คุณจะต้องชำระค่าจอดรถเป็นจำนวนเงิน = ' + money );
} else if (minute >= 1){
   hour = hour + 1 
   money = (hour - 1 ) * 30 
    console.log('คุณจะต้องชำระค่าจอดรถเป็นจำนวนเงิน = ' + money );
}

