const quotes = [
  "The best way to predict the future is to create it.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "In the middle of every difficulty lies opportunity.",
  "Do not go where the path may lead, go instead where there is no path and leave a trail.",
  "The only way to do great work is to love what you do.",
  "If you want to lift yourself up, lift up someone else.",
  "You miss 100% of the shots you don't take.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Strive not to be a success, but rather to be of value."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById("quote").innerHTML = quote;
}
const randomNumber = Math.floor(Math.random() * 100) + 1;
let numGuesses = 0;

function checkGuess() {
  const guessInput = document.getElementById("guess-input");
  const guess = Number(guessInput.value);
  if (guess < 1 || guess > 100) {
    document.getElementById("result").textContent = "Please enter a number between 1 and 100.";
  } else if (guess === randomNumber) {
    numGuesses++;
    document.getElementById("result").textContent = `Congratulations! You guessed the number in ${numGuesses} guesses.`;
    disableGame();
  } else {
    numGuesses++;
    let message = "";
    if (guess < randomNumber) {
      message = "Too low. Guess again.";
    } else {
      message = "Too high. Guess again.";
    }
    document.getElementById("result").textContent = message;
  }
  guessInput.value = "";
  guessInput.focus();
}

function disableGame() {
  document.getElementById("guess-input").disabled = true;
  document.getElementById("result").style.color = "green";
}


