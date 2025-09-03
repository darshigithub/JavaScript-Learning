// part-2

// function loginMessage(username) {
//     if(!username) {
//         return `plz enter username again.`
//     }
//     return `${username} is logined.`;
// }

function loginMessage(username = "user") {
    return `${username} is logined.`;
}

// console.log(loginMessage());

// Spread operator and rest operator

// function calculateCartPrice(...price) {
//     return price;
// }

// console.log(calculateCartPrice(56));

// console.log(calculateCartPrice(56,78,90));

function calculateCartPrice(val1, val2, ...price) {
    // val1 = 10
    // val2 = 20
    return price;
}

console.log(calculateCartPrice(10,20,30,40));

let obj = {
    username : "darshan",
    email : "dar@gmail.com"
}

function acceptObject(getObject) {
    return `In this object there is ${getObject.username} and ${getObject.email}`;
}

console.log(acceptObject(obj));

function acceptArray(getArray) {
    console.log(getArray[1]);
}

acceptArray([400,500,700]);