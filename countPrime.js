
/*const  arrayNum1 =[11, 3, 6, 10, 43, 29, 50];
const num = 7;
function isPrimeNumber(num){
    for (let index = 2; index < num; index++) {
        if (num%index==0) {
            return false;
        }
    }
    return true;
}
const result = isPrimeNumber(11);
console.log(`Is Number Prime: ${result}`); */

var a = [11, 3, 6, 10, 43, 29, 50];
var prime = [];


function isPrime(item) {
    var identifier = item / 2;
      for (var j = 2; j <= identifier; j++) {
       if ((item % j) == 0) { // modulous
        return false;
       } 
     }
     return true;
}
for (var index = 0; index < a.length; index++) {
  if (isPrime(a[index])) {
      prime.push(a[index])
  }

}
function countPrimeNumbers(arr) {
    let count = 0;
    for (const number of arr) {
      if (isPrime(number)) {
        count++;
      }
    }
    return count;
  }
  const primeCount = countPrimeNumbers(a);
console.log(`Number of prime Number in Array :${prime}`);
console.log(`${primeCount}`);