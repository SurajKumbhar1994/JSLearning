console.log(
  "==========> Function Type: Function with no argument with no return type ==========="
);
function firstFun() {
  console.log("I love JS");
}
firstFun();

console.log(
  "========Function Type: Function with argument with no return type ========="
);
console.log("========== Swap Number=======");
function swap(num1, num2) {
  console.log("Before swap ====>", num1, num2);
  var tamp = num1;
  num1 = num2;
  num2 = tamp;
  console.log("After swap ======>", num1, num2);
}
swap(100, 200);
swap("Virat", "Anushka");
swap("Mumbai", "Pune");
swap("INDIA", "USA");

console.log(
  "======Function type: Function with arguments and  return type ============"
);
function square(num) {
  var result = num * num;
  return result;
}
var squareNum = square(5);
console.log("Num is 5 and its square is :", squareNum);
