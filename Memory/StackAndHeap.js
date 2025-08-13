// Memory Management in JS 

// Stack and Heap

// Stack (Primitive Type) : (Note: Memory copy take place)

// Heap (Non-Primitive Type) : (Suppose the ref of the 
// one object is given to other object then both object ref
// same object )

let userName = "darshanar"; 

let anotherUser = userName;

userName = "suhas";

console.log(userName);

console.log(anotherUser);


let obj1 = {
    name : "darshan",
    age : 22
}

let obj2 = obj1;
