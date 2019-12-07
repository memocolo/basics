const read = require('readline-sync').question;

function greeting() {
	const name = read( "what\"s your name?: ")
	console.log (`hello, ${name}`);
}
greeting();
