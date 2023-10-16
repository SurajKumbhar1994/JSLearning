let array = [10,20,30,40,50,60];

console.log(typeof array);
console.log(array);

console.log(`Total elements in array is: ${array.lenth}`);

console.log(`========> Accessing and updating array elements <========`);
let elementOthIndex = array [0];
console.log(elementOthIndex );
console.log(array[1]);
console.log(array[array.length-1]);
console.log(`Second last element in array is:${array[array.length-2]}`);

console.log(`=====> Updating an element <======`);
array [1]=78;
console.log(array);

console.log(`======> indexOf() <========`);
console.log(array.indexOf(30));

console.log(`=====> Traversing an array <=========`);
let arrayNum =[22,11,32,45,65,87];
for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    console.log(element);
    
}

console.log(`=====> slice method <========`);
var  arrayNum1 =[10,20,32,42,53];
const arraySliced = arrayNum1.slice(3); 
console.log(arraySliced);

const arraySliced2 = arrayNum1.slice(1,3); 
console.log(arraySliced2);

console.log(`=====> splice method <========`);

var arrayNum1 =[10,20,2,32,5,66];
const arraySpliced = arrayNum1.splice(4); 
console.log(arrayNum1);
console.log(arraySpliced);

const arraySpliced1 = arrayNum1.splice(2,4); 
console.log(arrayNum1);
console.log(arraySpliced1);
