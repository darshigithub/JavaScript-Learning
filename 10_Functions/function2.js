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

console.log(loginMessage());