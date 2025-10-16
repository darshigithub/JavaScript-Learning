// filter in js

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let arrEles = arr.filter((ele) => ele > 5);

// let arrEles = arr.filter((ele) => {
//     return ele > 5;
// });

// console.log(arrEles);


// map in js

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let updatedNums = nums.map((ele) => {
//     return ele + 10;
// });

// chaining

let updatedNums = nums.map((ele) => {
    return ele * 10; 
}).map((ele) => {
    return ele + 1;
}).filter((ele) => {
    return ele > 40;
});

console.log(updatedNums);
