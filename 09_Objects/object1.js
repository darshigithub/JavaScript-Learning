// Objects in js

// Object is declared in 2 ways 

// Object literals

let userDetails = {
    name : "Darshan",
    age : 22,
    gmail : "darshan@google.com",
    isLogged : true,
    daysOfLogedIn : ["Monday", "Tuesday"]
};

console.log(userDetails.name);
console.log(userDetails.age);
console.log(userDetails["gmail"]);
console.log(userDetails["isLogged"]);
console.log(userDetails["daysOfLogedIn"]);

userDetails.age = 23;
console.log(userDetails);
Object.freeze(userDetails); // we locked the object
userDetails.age = 45;
console.log(userDetails);

// Symbol usecase 
let mySym = Symbol();

let SymbolObject = {
    [mySym] : "mysym1"
};

console.log(SymbolObject);
console.log(typeof SymbolObject[mySym]);

// Constructor or singleton