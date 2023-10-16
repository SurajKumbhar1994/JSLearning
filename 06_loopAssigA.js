
console.log(`=============> Q.1 <================`);
var str = "I am very good IT Developer "
var count = 0;
var vowelsCap = "AEIOU";
for (let index = 0; index < str.length-1; index++) {
    var char = str.charAt(index).toUpperCase();
    if(vowelsCap.includes(char)){
        count = count + 1;
    }  
}
console.log(`Total number of vowels are: ${count}`);  //a,e,i,o,u

console.log(`=============> Q.2 <================`);

var sum = 0;

for (let index = 0; index <=5; index++) {
    sum =sum+(index*index*index); 
}
console.log(`Cube sum of 5 is: ${sum}`);

console.log(`======> Q.3 <=======`);
var str1 = "Work hard always pays back";
var str2 = "Soon i will be UI IT Champ";

var oddPostionedChars
{

}
oddPostionedChars(str1);
oddPostionedChars(str2);