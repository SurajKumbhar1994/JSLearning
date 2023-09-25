console.log("===============> Assignment No.2 <==============");
console.log("==========> Question 1 <===========");
function oneFunction() {
  console.log("No argument and no return type first function");
}
oneFunction();

function secondFunction() {
  console.log("No argument and no return type Second function");
}
secondFunction();
console.log("==========> Question 2 <===========");
function personalDetails(firstName, lastName, collegeName) {
  console.log(
    "First and Last Name is:",
    firstName,
    lastName,
    "College Name:",
    collegeName
  );
}
personalDetails("Suraj", "Kumbhar", "AMGOI,Kolhapur");

console.log("==========> Question 3 <===========");

function swapValues(value1, value2) {
  console.log("Before swap ====>", value1, value2);
  var tamp = value1;
  value1 = value2;
  value2 = tamp;
  console.log("After swap ======>", value1, value2);
}
swapValues("Virat", "Anushka");
swapValues(1000, 2000);

console.log("==========> Question 4<===========");
function addThreeValues(num1, num2, num3) {
  var add = num1 + num2 + num3;
  return add;
}
var addition = addThreeValues(10.23, 600, 40);
var oneLine = addThreeValues("Hello ", "Good ", "Morning");

console.log("The addition of three Values are :", addition);
console.log("The addition of three Values are :", oneLine);

