const greeting = require('../../solutions/estebanborai/level1/greeting');

describe('level1/greeting.js', () => {
	beforeEach(() => {
		global.console.log = jest.fn();
	});
	
	it('calls "console.log" once', () => {
		greeting();

		expect(global.console.log).toHaveBeenCalled();
	});
});
