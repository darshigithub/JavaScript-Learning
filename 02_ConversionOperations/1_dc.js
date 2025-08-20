// Datatype conversion 

let num = 19;

console.log(typeof num);
// number to string
let valueInString = String(num);

console.log(valueInString);
console.log(typeof valueInString);

// string to number

let x = "12";
let z = "12ad";

let y = Number(x);
let w = Number(z); // NaN (Not a number)

console.table([x, y, z, w, typeof x, typeof y, typeof z, typeof w]);

// different types to number

// "33" -> 33
// "33ad" -> NaN 
// true -> 1 , false -> 2
// null -> 0
// undefined -> NaN

let a = null;

let b = Number(a);

console.log(typeof b);
