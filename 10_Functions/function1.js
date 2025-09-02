// Functions in js

function sayName() { // function defination
    console.log("a");
    console.log("r");
    console.log("d");  // function body
    console.log("p");
}

// sayName(); // function call


function add(n1, n2) { // parameters
    console.log(n1 + n2);
}

// add(3,5); // arguments

// On the basis of parameters and return-type
// there are 4 types

// no parameter and no return-type
function sub() {
    console.log(7 - 4);
}
// sub();

// eith parameter and no return-type
function sub(n1, n2) {
    console.log(n1 - n2);
}
// sub(5,2);

// no parameter and with return-type
function sub() {
    let n1 = 5;
    let n2 = 4;
    return n1 - n2;
}
// let res1 = sub();
// console.log(res1);

// with parameter and with return-type
function sub(n1, n2) {
    return n1 - n2;
}
// let res2 = sub(10, 3);
// console.log(res2);