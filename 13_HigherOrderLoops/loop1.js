// For of loop

// let arr = [1,2,3,4,5,6];

// for(const val of arr) {
//     console.log(val);
// }

// let str = "darshan";

// for (const ele of str) {
//     console.log(ele);
// }

const map = new Map();

// console.log(map);

// key:value -> pair and unique values

map.set("Kannada", "Darshan");
map.set("Tamil", "Vijay");
map.set("Telugu", "Prabhas");
map.set("Hindi", "Salman");

// console.log(map);

for (const [key, val] of map) {
    console.log(key, " : ", val);
}