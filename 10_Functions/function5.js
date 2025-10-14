// IIFE -> Immediately Invoked Function Expressions

// function one() {
//     console.log("DB Connected");
// }

// one()

// syntax -> (function defination)(function call)

(
    // name iife
    function one() {
       console.log("DB Connected");
    }
)();

(
    () => {
        console.log("DB Connected 1");
    }
)()