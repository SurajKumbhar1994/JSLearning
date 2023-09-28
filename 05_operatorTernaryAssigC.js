
console.log(`========== Q.1============`);
function maleMarriageEligibility(gender,age,boyName) {
    var status = age>=21 ? "Eligible for marriage" : " Not eligible ";
    console.log(`The marrige status of ${boyName} ==> ${status}`); 
    
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"stew jobs");

console.log(`========== Q.2===========`);
function femaleMarriageEligibilty(gender,age,girlName) {
    var marriageStatus = age>=18 ? "Eligible for marriage" : " Not eligible ";
    console.log(`The marrige status of ${girlName} ==> ${marriageStatus}`); 
}
femaleMarriageEligibilty("Female",16,"Jenifer");
femaleMarriageEligibilty("Female",27,"Malinda Gates");