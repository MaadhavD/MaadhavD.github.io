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
