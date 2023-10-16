const empInformation =`{
"name":"Aleix Melon",
"id": "E00245",
"role" : ["Dev","DBA"],
"age":23,
"doj" : "11-12-2019",
"married" :false,
"address":{
    "street" :"32,Laham St.",
    "City ":"Innsbruck",
    "Country" : "Austria"

},
"referred-by" :"E0012"
}`
console.log(typeof empInformation);
const post = JSON.parse(empInformation);
console.log(typeof post);
console.log(post);
console.log(post.role[0].toUpperCase());
var words =post.name.split(" ");
console.log(words[1])
var words =post.doj.split("-");
console.log(words[2])
