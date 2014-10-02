/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
function numberToString(num) {
  return num + '';
}

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

function increase(num) {
  return num + 1;
}

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function decrease(num) {
  return num - 1;
}
/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function add(a, b) {
  return a + b;
}
/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
function subtract(a, b){
  return a - b;
}
/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function multiply(a, b){
  return a * b;
}
/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
function divide(a, b){
  return a / b;
}
/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
function square(num){
  return num * num;
}
/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
function calculate(op, a, b){
  var result = 0;
  switch(op) {
    case 'add':
      result = add(a, b);
      console.log(a + ' + ' + b + ' = ' + result);
      return result;
      break;
    case 'subtract':
      result = subtract(a, b);
      console.log(a + ' - ' + b + ' = ' + result);
      return result;
      break;
    case 'multiply':
      result = multiply(a, b);
      console.log(a + ' * ' + b + ' = ' + result);
      return result;
      break;
    case 'divide':
      result = divide(a, b);
      console.log(a + ' / ' + b + ' = ' + result);
      return result;
      break;
    default:
      alert("wraong");
  }
}
/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  }
  return false;
}
/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
function isLessThan(a, b){
  if (a < b) {
    return true;
  }
  return false;
}
/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function areEqual(a, b) {
  if (a === b) {
    return true;
  }
  return false;
}
/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
function minimum(a, b) {
  if (a > b) {
    return b;
  }
  return a;
}
/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
function maximum(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}
/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}
/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function isOdd(number) {
  if (number % 2 !== 0) {
    return true;
  }
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
function letterGrade(score, max_score) {
  var result = score / max_score;
  if (result > 0.89) {
    return "A";
  }

  if (result <= 0.89 && result > 0.79) {
    return "B";
  }

  if (result <= 0.79 && result > 0.69999) {
    return "C";
  }

  if (result <= 0.69998 && result > 0.59) {
    return "D";
  }

  return "F";
}

/**
 * Checks if a `restaurant` object has a `reviews` field.
 * If it does, increase it by 1. If it does not,
 * set itsreviews` field to 1.
 * @param {object} restaurant represents a restaurant
 */
function incrementReviews(restaurant) {
  if (restaurant.reviews) {
    restaurant.reviews++;
  } else {
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
function combine(str1, str2) {
  return str1 + ' ' + str2;
}
/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */
function createCircle(radius) {
  var circle = {};
  circle.circumference = 2 * Math.PI * radius;
  circle.area = Math.PI * radius * radius;
  return circle;
}
