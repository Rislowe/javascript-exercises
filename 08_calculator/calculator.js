const add = function(number1, number2) {
	return number1+number2;
};

const subtract = function(number1, number2) {
	return number1-number2;
};

const sum = function(array) {
  return array.reduce((total, current) => total+current, 0);
};

const multiply = function(array) {
  return array.length ?
    array.reduce((product, current) => product * current, 1) : 0;
};

const power = function(number1, number2) {
  return Math.pow(number1, number2);
};

const factorial = function(number) {
	if(number == 0) return 1;
  if(number == 1) return 1;
  return number*factorial(number-1);
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
