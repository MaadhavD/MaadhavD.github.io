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
const canvas = document.getElementById('binary-rain');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions to match the window dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define the characters to use for the raindrops
const characters = '01';

// Define the font size and style for the raindrops
const fontSize = 12;
const fontStyle = 'monospace';

// Define the number of columns and rows for the raindrops
const numColumns = Math.floor(canvas.width / fontSize);
const numRows = Math.floor(canvas.height / fontSize);

// Create an array to store the y-position of each raindrop
const drops = [];

// Initialize the y-position of each raindrop to a random value
for (let i = 0; i < numColumns; i++) {
  drops[i] = Math.floor(Math.random() * numRows);
}

// Define the function to draw the raindrops
function drawRain() {
  // Set the fill color to black
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';

  // Fill the canvas with black to create the fade effect
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Set the font size and style for the raindrops
  ctx.font = `${fontSize}px ${fontStyle}`;

  // Loop through each column of the canvas
  for (let i = 0; i < numColumns; i++) {
    // Generate a random character from the character set
    const character = characters[Math.floor(Math.random() * characters.length)];

    // Set the fill color to green
    ctx.fillStyle = '#21d28e';

    // Draw the raindrop at the current position
    ctx.fillText(character, i * fontSize, drops[i] * fontSize);

    // Move the raindrop down by one row
    drops[i]++;

    // If the raindrop has moved off the bottom of the canvas, reset its position to the top
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
  }
}

// Call the drawRain function repeatedly to create the animation
setInterval(drawRain, 33);


