'use strict';

const read = require('readline-sync').question;
const exec = require('child_process').exec;
const fs = require('fs');

const participantsJson = `${process.cwd()}/gens/participants.json`;

function bash(command) {
	return new Promise((resolve, reject) => {
		exec(command, (err, stdout, stderr) => {
			if (err || stderr) {
				if (err) {
					reject(err);
				}
	
				if (stderr) {
					reject(err);
				}
			} else {
				return resolve(stdout.replace('\n', ''));
			}
		});
	});
}

function emailExists(email) {
	return new Promise((resolve, reject) => {
		fs.readFile(participantsJson, (err, data) => {
			if (err) {
				reject(err);
			}

			const json = JSON.parse(data),
				found = Object.keys(json).find((username) => {
					return username.toLowerCase() === email.toLowerCase();
				});

			if (found) {
				return reject(`A participant with email: "${email}", is already a stored!`);
			}

			return resolve(found);
		});
	});
}

function addNewParticipant(userData) {
	return new Promise((resolve, reject) => {
		fs.readFile(participantsJson, (readErr, data) => {
			if (readErr) {
				reject(readErr);
			}

			let json = JSON.parse(data);

			json[userData.email.toLowerCase()] = userData;
			json = JSON.stringify(json, null, 2);

			fs.writeFile(participantsJson, json, (writeErr) => {
				if (writeErr) {
					reject(writeErr);
				}

				return resolve();
			});
		});
	});
}

/**
 * init initializes a solutions directory and a .vscode/jest debugging
 * settings based on the user details
 * 
 */
async function init() {
	const userData = {
		github: '',
		name: '',
		email: '',
	};

	try {
		userData.email = await bash('git config user.email');
		await emailExists(userData.email);

		userData.name = await bash('git config user.name');
		userData.github = read('What\'s your GitHub\'s Username? ');

		await addNewParticipant(userData);

		console.log(`Welcome to "BACS101", ${userData.name}!`);
		console.log('Remember to create a "Pull Request" to make your changes permanent in the repository!');
	} catch (initErr) {
		console.error(initErr);
	}
}

init();
