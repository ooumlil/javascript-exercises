const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	if (!array.length) return 0;
	let ret = array[0];
	for (let index = 1; index < array.length; index++) {
	  ret += array[index];
	}
	return ret;
};

const multiply = function(...args) {
	let ret = args[0];
	for (let index = 1; index < args.length; index++) {
		ret *= args[index];
	}
	return ret;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	if (num === 0) return 1;
	let ret = 1;
	while (num) {
		ret *= num;
		num--;
	}
	return ret;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
