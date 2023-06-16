const reverseString = function(string) {
	let tmp = "";
	for (let index = string.length - 1; index >= 0; index--)
		tmp += string[index];
	return tmp;
};

// Do not edit below this line
module.exports = reverseString;
