'user strict';

var str =  "2+2";
var str2 = new String(str);

console.log(eval(str));
console.log(eval(str2));

console.log(eval(str2.valueOf()));

