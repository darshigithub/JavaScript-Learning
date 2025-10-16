// for in loop

let arr = ["darshan", "suhas", "sagar", "nikhil"];

// for(let ele in arr) { 
//     console.log(ele); // print index of array
// }

for(let ele in arr) {
    console.log(`Index ${ele} value is ${arr[ele]}`);   
}

let obj = {
    "name" : "darshan",
    "age" : 22,
    "address" : "bangalore"
}


for (const key in obj) {
    console.log(`${key} : ${obj[key]}`);
}