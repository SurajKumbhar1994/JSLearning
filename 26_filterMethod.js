const array =  [42,  50, 3, 2, 7, 22, 11, 40];
const arrayNum = array.filter( (currentValue )=> {
    return currentValue > 10;
} );
console.log(arrayNum);


const arrayNumIn = array.filter( (currentValue )=> {
    return currentValue % 2 ==0;
} );
console.log(arrayNumIn);
