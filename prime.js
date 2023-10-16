// Prime Number means the number who divisible by only itself and 1.

function prime(num) {
    if (num % 1 == 0 && num % num == 0) {
        console.log("The Number is Even number");
    } else {
        console.log("The given Number is odd");
        
    }
}
prime(1);
prime(12);
prime(13);
prime(15);

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
console.log(`Is Number Prime: ${result}`);