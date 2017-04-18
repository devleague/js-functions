/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

function numberToString(number){
	var string = number.toString();
	return string;
}

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

function increase(number){
	number = number + 1;
	return number;
}

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

function decrease(number){
	number = number - 1;
	return number;
}

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

function add(x,y){
	sum = x + y;
	return sum;
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

function subtract(x,y){
	difference = x - y;
	return difference;
}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

function multiply(x,y){
	product = x*y;
	return product;
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

function divide(x,y){
	quotient = x/y;
	return quotient;
}

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

function square(x){
	squared = x*x;
	return squared;
}

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

function calculate(operation, x, y){
	if(operation === "add"){
		result = x + y;
    console.log(x + " + " +  y + " = " + result);
		return result;
	}
	else if(operation === "subtract"){
		result = x - y;
    console.log(x + " - " +  y + " = " + result);
		return result;
	}
	else if(operation === "multiply"){
		result = x * y;
    console.log(x + " * " +  y + " = " + result);
		return result;
	}
	else if(operation === "divide"){
		result = x / y;
    console.log(x + " / " +  y + " = " + result);
		return result;
	}
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

function isGreaterThan(a,b){
	if(a > b)
	   return true;
	else
	   return false;
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

function isLessThan(a,b){
	if(a < b)
	   return true;
	else
	   return false;
}

   /**
    * Returns true if `a` and `b` are equal.
    * @param {number} a
    * @param {number} b
    * @return {boolean} the numbers are equal
    */

function areEqual(a,b){
	if(a === b)
	   return true;
	else
	   return false;
}

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

function minimum(x,y){
	if(x > y)
	   return y;
	else
	   return x;
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

function maximum(x,y){
	if(x > y)
	   return x;
	else
	   return y;
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

function isEven(n){
	var even = n%2;
	if(even === 0)
	   return true;
	else
	   return false;
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

function isOdd(n){
  	if(!isEven(n))
      return true;
    else
      return false;
}

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

function letterGrade(score,total){
	var percentage = (score/total)*100;
	if(percentage <= 100 && percentage >= 90){
		return "A";
  }
	else if(percentage <= 89.9 && percentage >= 80){
		return "B";
  }
	else if(percentage <= 79.9 && percentage >= 70){
		return "C";
  }
	else if(percentage <= 69.9 && percentage >= 60){
		return "D";
  }
	else if(percentage <= 59.9 && percentage >= 0){
		return "F";
  }
}

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */

function incrementReviews(restaurant){
  if(restaurant.reviews){
      restaurant.reviews++;
  }else{
    restaurant.reviews = 1;
  }
  return restaurant;
}

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

function combine(word1, word2){
    var joined = word1 + ' ' + word2;
    return joined;
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

function createCircle(radius){
  var circle = {
    area: Math.PI * radius * radius,
    circumference: 2 * Math.PI * radius
  };
  return circle;
}