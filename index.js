// index.js
const readline = require('readline');
const { handleUserInput } = require('./bot');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("✈️ Welcome to FlightBot! ✈️");
console.log("Type something like: from Mumbai to Delhi on 2025-07-10");

rl.prompt();

rl.on('line', (input) => {
  const response = handleUserInput(input);
  console.log(response);
  rl.prompt();
});
