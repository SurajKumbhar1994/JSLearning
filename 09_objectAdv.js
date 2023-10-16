const valueArray = ['name', 'age', 'isMarried', 'city']
const arraySplice = valueArray.splice(2,1,"Graduation");
console.log(valueArray);
console.log(arraySplice);

/*const arraySpliced1 = arrayNum1.splice(2,4); 
console.log(arrayNum1);
console.log(arraySpliced1);
*/
let person = {
    name: "Jenny",
    age: 22,
    isMarried: true,
    city: "Pune"
}

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

const entry = Object.entries(person);// [ [], [], [], [] ]
console.log(entry);
for (const element of entry) {
    console.log(element[0], element[1]);
}

console.log(`Traversing of an object...`);
for (const key in person) {
   console.log(key, person[key]);
}

const isNameAvailable =  'name' in person;
console.log(isNameAvailable);

const isPinAvailable = 'pin' in person;
console.log(isPinAvailable);

const personJenny = {
    name: "Jenny",
    age: 22,
    isMarried: true,
    city: "Pune"
}
personJenny.age = 25;
console.log(personJenny);
console.log(`========> Object Freezeing <========`);
// personJenny = { }; Not allowed
// personJenny = person; Not allowed
Object.freeze(personJenny);
personJenny.city = "Lucknow";
console.log(personJenny);

console.log(`=======> Object Assign <=========`);
let elon ={
    name: 'elon',
    age : 54,
    isMarried :true,
    country: 'USA'


}
const elonClone =object.assign ({},elon)
console.log(elonClone);

console.log(`=======> Merging an Objects <======`);
let stew ={
    name: 'elon',
    age : 54,
    isMarried :true,
    country: 'USA'
}

const address ={
    pin:326743,
    city:`Austin Mark`
}
Object.assign(stew,address);
console.log(stew);
console.table(stew);

