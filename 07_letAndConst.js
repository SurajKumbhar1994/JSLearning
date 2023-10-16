const PI=3.14;
//PI=3.14     Not Allowed const Inilization of const on one line;

console.log(PI);

console.log(`=======> Scope Accessibility <========`);
function addition()
{
    var greet = "Good Morning";
    if (30 > 21)
    {
let num1 =100;
const num2= 200;
var result =10+20;

    }
    console.log(result);
//console.log(num2); Not Allowed;
//console.log(num4);
}
//console.log(result); //Not Allowed
addition();

for (let index = 0; index < 3; index++) {
    console.log(index); 
    
}
//console.log(index);//Not Allowed