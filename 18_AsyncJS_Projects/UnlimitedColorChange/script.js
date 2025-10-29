// Random color generation

let randomColor = function () {
    // #123456
    // 0123456789ABCDEF

    const hex = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let stopColorChange;

document.querySelector("#start").addEventListener("click", function () {
    stopColorChange = setInterval(function () {
        document.body.style.backgroundColor = randomColor();
    }, 1000);
});

document.querySelector("#stop").addEventListener("click", function () {
    clearInterval(stopColorChange);
    stopColorChange = null;
});