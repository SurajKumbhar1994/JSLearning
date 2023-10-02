console.log(`========> Q1 <=========`);

var squareNum =function(value)
{
var result =value* value;
return result;
}
var result = squareNum(5);
console.log(`square of 5 is:${result}`);
var result = squareNum(6);
console.log(`square of 6 is:${result}`);
var result = squareNum(25);
console.log(`square of 25 is:${result}`);
var result = squareNum(100);
console.log(`square of 100 is:${result}`);
var result = squareNum(67);
console.log(`square of 67 is:${result}`);

console.log(`=======> Q2 <==========`);

console.log(`The type of function is :`, typeof value);

console.log(`=========> Q3 <========`);
var area = function(length,width)
{
    var result = length *width;
    console.log(`The area of rectangle is: ${result} `);
}
area(499,500);

console.log(`======> Q4 <========`);

var swap = function(Num1,Num2){
console.log("===========Before Swap===============");
console.log(Num1,Num2);
var temp=Num1;
Num1=Num2;
Num2=temp;
console.log("========== After Swap==============");
console.log(Num1,Num2);
}
swap(55,77);
swap("Mahi","Raina");

console.log( ` ==========> Q5 <==========`);

    var str ="JS is most popular language in internet"
    var checkChar =str.length;
    console.log(`Total character is: ${checkChar}`);

    var checkCharAt = str.charAt(6);
    console.log(`Character at 6 is: ${checkCharAt}`);

    var checkCharAt1 = str.charAt(11);
    console.log(`Character at 11 is: ${checkCharAt1}`);

    var lastIndexChar = str.charAt(str.length-1);
console.log('Last index char is: ', lastIndexChar);

var firstIndexChar = str.charAt(0);
console.log('First index char is: ', firstIndexChar);

var lastThirdIndexChar = str.charAt(str.length-3);
console.log('Last index char is: ', lastThirdIndexChar);

var result = str.split(" ");
//console.log(result);
console.log('Total words is: ', result.length);
var resultSqu = result.length * result.length;
console.log(`The square of words is:${resultSqu}`);