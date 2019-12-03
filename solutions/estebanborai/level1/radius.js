const read = require('readline-sync').question;

const radius = read(`Enter a circle's radius: `);

function circumference(r) {
	return Number((2 * Math.PI) * r).toFixed(2);
}

function area(r) {
	return Number(Math.PI * Math.pow(r, 2)).toFixed(2);
}

console.log("Perimeter: ", area(radius));
console.log("Area: ", circumference(radius));
