// reduce() method in js

let nums = [1, 2, 3, 4, 5, 6];

// const numsTotal = nums.reduce(function(accu, curValue){
//     return accu + curValue;
// }, 0);

// const numsTotal = nums.reduce((accu, curValue) => {
//     return accu + curValue;
// }, 0);

// console.log(numsTotal);

const shoppingItems = [
    {
        "itemName": "Pen",
        "itemCost": 20
    },
    {
        "itemName": "Book",
        "itemCost": 200
    },
    {
        "itemName": "Bag",
        "itemCost": 500
    },
]

let totalCost = shoppingItems.reduce((initial, item) => {
    return initial + item.itemCost;
}, 0);

console.log(totalCost);