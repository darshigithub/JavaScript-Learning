// Advanced array

let arr1 = [1,2,3,4,5];

let arr2 = [10,20,30,40,50];

// let newArr = arr1.push(arr2);
// console.log(newArr);

// let newArr = arr1.concat(arr2);
// console.log(newArr);

// spread 

let newArr = [...arr1, ...arr2];

console.log(newArr);

// let uniqueArr = [1,2,3,4,[11,22,33],5,[44,55,[444,555]]];
// let real_unique_arr = uniqueArr.flat(Infinity);
// console.log(real_unique_arr);


console.log(Array.isArray("ardp")); // false
console.log(Array.isArray(["ardp"])); // true

console.log(Array.from("darshan"));

console.log(Array.from({fullname : "Darshan A R"})); // return empty array -> []


let score1 = 12;
let score2 = 13;
let score3 = 14;

console.log(Array.of(score1,score2,score3));