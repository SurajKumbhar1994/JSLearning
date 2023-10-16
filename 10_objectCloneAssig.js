console.log(`====> Q 1 <========`);
let personalDetails = {
    Name:"Suraj Kumbhar",
    Address : "Kolhapur",
    DOB  : '12/12/1999',
    Bloodgroup : 'o+'

}
console.log(personalDetails);
console.log(`=======> Q.2 <========`);
let collegeDetails ={
    collegeName : "KIT,Kolhapur",
    Address : 'Kolhapur',
    establishedYear : 1983,
    pin : 213231
}
console.log(collegeDetails);

console.log(`======> Q.3 <=======`);
Object.assign(personalDetails,collegeDetails);
//console.log(personalDetails);
console.table(personalDetails);

console.log(`=====> Q.4 <=======`);
let array1 =['Sujit' ,'Kapil','Surabh','Akshay','Shubham'];
Object.freeze(array1);
console.log(array1);

console.log(`=======> Q.5 <=======`);
console.log(`Firend Name is:${array1[0]}`);
console.log(`Firend Name is:${array1[1]}`);
console.log(`Firend Name is:${array1[2]}`);
console.log(`Firend Name is:${array1[3]}`);
console.log(`Firend Name is:${array1[4]}`);

console.log(`========> Q.6 <=======`);
let str = "Codemind Technology";
let reverse =" ";
for (let i = str.length-1;i>= 0;i--){
    if (str.charAt(i)==" ") {
        break
    } else {
        reverse = reverse +str.charAt(i)
    }
}
console.log(`Given String is: ${str}`);
console.log(reverse);



