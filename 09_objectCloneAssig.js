console.log(`====> Q 1 <========`);
let bankSbi = {
    accountNum: 19265735429,
    accountType : 'saveing',
    accountHolder : 'suraj',
    accountFacility : 'debitcard'

}
console.log(`=======> Q.2 <========`);
let bankLocation ={
    street : 'laxmiRoad',
    city : 'kolhapur',
    pin : 213231
}
//const elonClone =object.assign ({},bankLocation)
//console.log(elonClone);
console.log(`=======> Q 3 <========`);
const objectDetails =Object.assign({},bankSbi,bankLocation);
console.log(objectDetails);

console.log(`=====> Q 4 <========`);
let rateOfInterest = {
    homeLoanInterest : 8,
    personalLoanInterest:12,
    dualInterest :10 
}

const sbiDetails =object.assign ({},bankSbi,bankLocation,rateOfInterest)
console.log(sbiDetails);