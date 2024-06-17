const array =  [2, 5, 3, 2, 7, 11];
const sum = array.reduce( (runningTotal, value)=>{
    return runningTotal + value;
}, 0);
console.log(sum);

const nestedArray =  [ [2, 5], [4, 5, 6],[ 2, 7, 11] ];
const arrayNum = nestedArray.flatMap( (element => element));

console.log(arrayNum);

const frdNames = ['Jenny', "Bill", 'Stew', "Elon"];
// Sorting in ascending order
const sortedArray = frdNames.sort();
console.log(sortedArray);// ['Bill', 'Elon', 'Jenny', 'Stew']

// Sorting in descending order
//Output  ['Stew', 'Jenny', 'Elon', 'Bill'];
const reverseArray = sortedArray.reverse();
console.log(reverseArray);

console.log('======= Sorting an array of number ================');
const array2 =  [29, 15, 31, 111, 27, 6];
// Sorting an array in ascending order
const newArray = array.sort( (a, b) => {
    return a>b ? 1 : -1;
} );
console.log(newArray);


const str = "How are you mate"; // "HoW ArE YoU MatE"
const arrayWord = str.split(' ');
let finalStr = '';
for (const word of arrayWord) {
    let firstChar = word.charAt(0).toUpperCase();
    let lastChar = word.charAt(word.length-1).toUpperCase();
    // Replace word,  first char by firstChar
    // Replace word,  last char by lastChar
    finalStr = finalStr + word;
    console.log(word, firstChar, lastChar );
}
console.log(finalStr);