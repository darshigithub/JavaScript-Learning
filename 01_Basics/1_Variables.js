const accountId = 12345; // Variable declared using const keyword acts as Constant 
let accountName = "Darshan";
var accountEmail = "darshan@gmail.com";
accountPassword = 213421;

// let accountName = "Darshan";  // we can not redeclare  

let accountStatus; // defaultly assigned to undefined 

// accountId = 4321; // Assignment to constant variable.

accountName = "Sagar";
accountEmail = "sagar@gmail.com";
accountPassword = 12345678;

console.log(accountId);

console.table([accountId, accountName, accountEmail, accountPassword, accountStatus]);

/*
  Using var they have problem in block and functional scope
*/