let arr = [1,2,3,4,5];

let res = arr.filter((x) => {
    if(x % 2 == 0) {
        return x;
    }
});

console.log(res);
