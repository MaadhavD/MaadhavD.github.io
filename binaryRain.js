const canvas = document.getElementById("binaryRainCanvas");
const context = canvas.getContext("2d");
let frameCount = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var letters = '01';
letters = letters.split('');

var fontSize = 15,
    columns = canvas.width / fontSize;

var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

function draw() {
  context.fillStyle = 'rgba(0, 0, 0, .1)';
  context.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    context.fillStyle = '#0f0';
    context.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}

// Loop the animation
setInterval(draw, 33);
//hi
