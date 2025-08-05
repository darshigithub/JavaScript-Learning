// Differnt types to boolean

let x = 1;
let y = 0;

let x1 = Boolean(x);
let y1 = Boolean(y);

console.table([
    x, y, x1, y1, typeof x, typeof y, typeof x1, typeof y1 
]);


let a = "darshan";
let b = "";

let a1 = Boolean(a);
let b1 = Boolean(b);

console.table([
    a, b, a1, b1, typeof a, typeof b, typeof a1, typeof b1 
]);