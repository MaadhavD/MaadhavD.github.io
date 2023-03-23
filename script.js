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

