const canvas = document.getElementById("binaryRainCanvas");
const context = canvas.getContext("2d");

let canvasWidth, canvasHeight, fontSize;
let drops = [];

function setup() {
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  fontSize = canvasWidth / 20;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  context.font = `${fontSize}px Arial`;

  for (let i = 0; i < canvasWidth / fontSize; i++) {
    drops.push(new Drop(i * fontSize, -fontSize, fontSize));
  }
}

function draw() {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvasWidth, canvasHeight);

  for (let i = 0; i < drops.length; i++) {
    drops[i].update();
    drops[i].show();
  }

  requestAnimationFrame(draw);
}

class Drop {
  constructor(x, y, fontSize) {
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.speed = Math.floor(Math.random() * 10) + 1;
    this.switchInterval = Math.floor(Math.random() * 100);
    this.letters = "01";
    this.currentLetter = this.letters[Math.floor(Math.random() * this.letters.length)];
  }

  update() {
    this.y += this.speed;

    if (this.y > canvasHeight) {
      this.y = -this.fontSize;
      this.switchInterval = Math.floor(Math.random() * 100);
      this.currentLetter = this.letters[Math.floor(Math.random() * this.letters.length)];
    } else if (frameCount % this.switchInterval == 0) {
      this.currentLetter = this.letters[Math.floor(Math.random() * this.letters.length)];
    }
  }

  show() {
    context.fillStyle = "#0F0";
    context.fillText(this.currentLetter, this.x, this.y);
  }
}

setup();
draw();
