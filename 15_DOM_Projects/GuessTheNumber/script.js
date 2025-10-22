let ramdomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#user_number");
const gessSlot = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector("#lowOrHigh");
const result = document.querySelector("#result");

const p = document.createElement("p");

let playGame = true;
let previousGuess = [];

let remainingGuess = 1;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    let userGuess = parseInt(userInput.value);
    validateGuess(userGuess);
  });
}

function validateGuess(userGuess) {
  if (isNaN(userGuess)) {
    alert("Plz enter valid number.");
  } else if (userGuess < 1) {
    alert("Plz enter a number greater than or equal to 1.");
  } else if (userGuess > 100) {
    alert("Plz enter a number lesser than or equal to 100.");
  } else {
    previousGuess.push(userGuess);
    if (remainingGuess == 11) {
      displayGuess(userGuess);
      displayMessage(`Game Over! Random number was ${ramdomNumber}`);
      endGame();
    } else {
      displayGuess(userGuess);
      checkGuess(userGuess);
    }
  }
}

function checkGuess(userGuess) {
  if (userGuess === ramdomNumber) {
    displayMessage(`You win the Game`);
    endGame();
  } else if (userGuess < ramdomNumber) {
    displayMessage(`Guessed number is Too low`);
  } else {
    displayMessage(`Guessed number is Too high`);
  }
}

function displayGuess(userGuess) {
  userInput.value = "";
  gessSlot.innerHTML += `${userGuess} `;
  remainingGuess++;
  lastResult.innerHTML = `${11 - remainingGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `${message}`;
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    ramdomNumber = parseInt(Math.random() * 100 + 1);
    userInput.value = "";
    previousGuess = [];
    remainingGuess = 1;
    gessSlot.innerHTML = "";
    lastResult.innerHTML = `${11 - remainingGuess}`;
    userInput.removeAttribute("disabled");
    result.removeChild(p);
    playGame = true;
  });
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
  result.appendChild(p);
  playGame = false;
  newGame();
}
