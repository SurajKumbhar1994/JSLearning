const id ="120";

console.log(+id,typeof id);

const postInString = `{
    "userId": 1,
    "id": 1,
    "title": "On Trip",
    "body": "Feeling awesome.. after long break"
}`
console.log(typeof postInString);
const post = JSON.parse(postInString);
console.log(typeof post);
console.log(post);

const person = {
    name: "Jenny",
    age: 34,
    city: "Pune" 
}
const personJson =JSON.stringify(person);
console.log(typeof personJson);
console.log(personJson);

let person1 = {
fullName: "Virat Kohli",
age:33,
isMarried :true,
address :{
    street :"Wakad Road",
    country : "India",
    pin :2137764
}
}
const jsonFormat = JSON.stringify(person1)
console.log(jsonFormat);

