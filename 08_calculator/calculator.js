const add = function(number1, number2) {
	return number1+number2;
};

const subtract = function(number1, number2) {
	return number1-number2;
};

const sum = function() {
  
  if(arguments.length == 0) return 0;

  let sum = 0;
  
  for(let i=0; i < arguments.length; i++)
  {
    if(arguments[i].length == 0) return 0;

    arguments[i].forEach(element => {
      sum = add(sum, element);      
    });
  };

  return sum;
	
};

const multiply = function() {

  if(arguments.length == 0) return 0;

  let product = 1;

  for(let i=0; i < arguments.length; i++)
  {
    if(arguments[i].length == 0) return 0;

    arguments[i].forEach(element =>{
      product *= element;
    });
  };

  return product;

};

const power = function(number1, number2) {
  if(number2 == 0) return 1;
  if(number2 == 1) return number1;
  return number1*power(number1, number2-1);
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
