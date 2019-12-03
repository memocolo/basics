const read = require('readline-sync').question;

function readAsync(message) {
	return new Promise((resolve) => {
		resolve(read(`${message} number: `));
	});
}

let i = 0;

const numbers = [];

const round = [
	'First',
	'Second',
	'Third',
	'Fourth'
];

for (i; i < 4; i++) {
	readAsync(round[i]).then((res) => {
		numbers.push(res);
		return;
	});
}

function averageFromArray(values) {
	const sum = values.reduce((a, b) => a + b);

	return Number(sum / values.length).toFixed(2);
}

console.log(`The average is: ${averageFromArray(numbers)}`);
