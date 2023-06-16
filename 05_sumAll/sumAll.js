const sumAll = function (num1, num2) {
  if (
    arguments.length !== 2 ||
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    num1 < 0 ||
    num2 < 0
  )
    return "ERROR";
  let ret = num1 > num2 ? num2 : num1;
  if (num1 < num2) while (num1++ < num2) ret += num1;
  else while (num2++ < num1) ret += num2;
  return ret;
};

// Do not edit below this line
module.exports = sumAll;
