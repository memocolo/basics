const read = require('readline-sync').question;

function circumference(r) {
	return Number((2 * Math.PI) * r).toFixed(2);
}

function area(r) {
	return Number(Math.PI * Math.pow(r, 2)).toFixed(2);
}

function radius() {
	const r = read(`Enter a circle's radius: `);

	console.log("Perimeter: ", area(r));
	console.log("Area: ", circumference(r));
}

radius();
