const read = require('readline-sync').question;

function greeting() {
	const name = read('What\'s your name?: ');
	console.log(`Hello, ${name}`);
}

module.exports = greeting;
