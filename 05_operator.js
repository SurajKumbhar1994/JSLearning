console.log(`============> Arithemtic Operator <=======`);
var num1=10;
var num2=30;
var result = num1 + num2;
console.log(`Addition of 2 number is :${result}`);

var result = num1 * num2;
console.log(`Multiplication of 2 number is :${result}`);

var result = num1 ** 3;
console.log(`Cube of number 1 is :${result}`);

var result = num1 / num2;
console.log(`Division result is :${result}`);

var result = num1 % num2;
console.log(`Modulus result  is :${result}`);

console.log(`Modulus result  is :${10%3}`);

console.log("====== Unary Operator =========");
var num1 = 10;
// var result = num1++; // var result = num1 + 1;
var result = ++num1;
console.log(`Result is: ${result}`);

var num2 = 10;
var result = --num2; //num2--; // num2-1;
console.log(`Result is of decrement is: ${result}`);
console.log("====== Assignment Operator =========");
var num3 = 5;
// Compound Addition +=
num3+=3; // num3 = num3 + 3;
console.log(`Result of Compound Addition is: ${num3}`);

var str="Focus";
var str2="Lotus";
var result = str ==str2;
console.log(`${result}`);

console.log("====== Comparison Operator =========");
var str1 = "Focus";
var str2 = "Locus";

var result = str1 == str2; // typeof result;
console.log(`Result of comparison == is: ${result}`);

var result = str1 === str2;
console.log(`Result of comparison === is: ${result}`);

var num1 = 10;
var num2 = "10";
var result = num1 == num2;
console.log(`Result of comparison == is: ${result}`);

var result = num1 === num2;
console.log(`Result of comparison == is: ${result}`);

var result = num1 > num3;
console.log(`Result of Greater than > is: ${result}`);
console.log("===========");
var num4 = 20;
var result = num3 > num4;
console.log(`Result of Greater than > is: ${result}`);

var result = num3 >= num4;
console.log(`Result of Greater than equal > is: ${result}`);

var result = 10 < num4;
console.log(`Result of Less than < is: ${result}`);

var result = 20 <= num4;
console.log(`Result of Less than equal <= is: ${result}`);