// for each loop in js

// let arr = [1,2,3,4,5,6];

// arr.forEach(function (value){
//     console.log(value);
// });

// function printvalue(item) {
//     console.log(item);
// }

// arr.forEach(printvalue);

// let friends = ["suhas", "sagar", "nikhil", "darshan", "anil"];

// friends.forEach((friend) => {
//     console.log(friend);
// });

let coding = [
    {
        "langName": "Javascript",
        "langFileName": "js"
    }, 
    {
        "langName": "Java",
        "langFileName": "java"
    }, 
    {
        "langName": "Python",
        "langFileName": "py"
    } 
];

coding.forEach((item) => {
    console.log(`${item.langName} language and its file extension is : ${item.langFileName}`);
});

