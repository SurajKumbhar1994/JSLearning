var str ="     Hey you are doing good,keep it up      ";
function stringHandsOn() {
    console.log(`No arguments and no return value function `);
}
stringHandsOn();

console.log(`1.Given string is: ${str}`);
console.log(`2.The length of given string is:${str.length}`);
//var lengthBeforeTrim = str.length;
var result =str.trim();
console.log(`3.After removeing the leading and trailing spaces string is:${result} || and its length is:${result.length}`);


