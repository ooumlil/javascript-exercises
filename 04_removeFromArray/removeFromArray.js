const removeFromArray = function (array, ...args) {
	let updatedArray = [];
	for (const element of array)
	  if (!args.includes(element))
		  updatedArray.push(element);
	return updatedArray;
  };
  

// Do not edit below this line
module.exports = removeFromArray;
