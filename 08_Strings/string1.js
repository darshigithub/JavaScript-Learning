// String in js -> Sequence of charater's

let name = "Darshan";
let repoCount = 50;

// console.log("My name is : " + name + " and in github " + repoCount + " repocount are there.");

// String interpolation 
console.log(`My name is : ${name} and in github ${repoCount} repocount are there.`);

let fullName = new String("Darshan");

console.log(fullName);

console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

console.log(fullName.charAt(4)); // h
console.log(fullName.indexOf("h")); // 4