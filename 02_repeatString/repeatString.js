const repeatString = function (string, num) {
  let tmp = "";
  if (num < 0) return "ERROR";
  for (let index = 0; index < num; index++) {
    tmp = tmp.concat(string);
  }
  return tmp;
};

// Do not edit below this line
module.exports = repeatString;
