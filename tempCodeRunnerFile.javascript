const readline = require('readline');

const readInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function read(message) {
  return new Promise((resolve) => {
    readInterface.question(message, (response) => {
      resolve(response);
      readline.close();
    });
  });
}

read(`What's your name?: `).then((name) => {
  console.log(`Hello, ${name}`);
});
