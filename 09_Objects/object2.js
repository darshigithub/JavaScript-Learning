// Nested Object 

let tinderUser = new Object();
console.log(tinderUser);
tinderUser.id = "123abc";
tinderUser.name = "Darshan";
tinderUser.email = "dars@gmail.com";
console.log(tinderUser);

let registeredUser = {
    email : "some@gmail.com",
    userName : {
        fullName : {
            firstName : "Darshan",
            lastName : "Kumar"
        }
    }
}

// console.log(registeredUser);
console.log(registeredUser.userName.fullName);
console.log(registeredUser.userName.fullName.firstName);


// Object.assign();

let obj1 = {1:"a", 2:"b", 3:"c"};
let obj2 = {4:"d", 5:"e", 6:"c"};
let obj3 = {7:"g", 8:"h", 9:"i"};

let obj4 = Object.assign({},obj1, obj2, obj3);
// console.log(obj4);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));
