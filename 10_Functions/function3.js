// Scopes in js

// let a = 78; // block scoped 
// const b = 56; // block scoped
// var c = 71; // global scoped 

// console.log(a);
// console.log(b);
// console.log(c);

{ // scope
    let a = 78;
    const b = 56;
    var c = 71;
}

{
    c = 21;
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {

    const username = "darshan";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    two();
    // console.log(website); // not accessable 
} 

one();


//+++++++++++++ Hosting +++++++++++++

sayHello();

function sayHello() {
    console.log("Hello World!");
}


// console.log(greet("Hello")); // error 

let greet = function sayHi(msg) {
    return msg;
}
