/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
let numberToString = function(n) {
  return n.toString();
};

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
let increase = function(n) {
  return n + 1;
};

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
let decrease = function(n) {
  return n - 1;
};

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
let add = function(x, y) {
  return x + y;
};

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
let subtract = function(x, y) {
  return x - y;
};

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
let multiply = function(x, y) {
  return x * y;
};

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
let divide = function(x, y) {
  return x / y;
};

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
let square = function(x) {
  return (x * x);
};

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
function calculate(str, x, y) {
  if (str === "add") {
    let add = x + y;
    console.log(x + " + " + y + " = " + add);
    return add;
  } else if (str === "subtract") {
    let subtract = x - y;
    console.log(x + " - " + y + " = " + subtract);
    return subtract;
  } else if (str === "multiply") {
    let multiply = x * y;
    console.log(x + " * " + y + " = " + multiply);
    return multiply;
  } else if (str === "divide") {
    let divide = x / y;
    console.log(x + " / " + y + " = " + divide);
    return divide;
  }
};
/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
let isGreaterThan = function(a, b) {
  if (a > b) {
    return true
  } else
    return false
};

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
let isLessThan = function(a, b) {
  if (a < b) {
    return true
  } else
    return false
};

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
let areEqual = function(a, b) {
  if (a === b) {
    return true
  } else
    return false
};

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
let minimum = function(x, y) {
  return Math.min(x, y);

};

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
let maximum = function(x, y) {
  return Math.max(x, y);
};

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
let isEven = function(n) {
  return n % 2 === 0;
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
let isOdd = function(n) {
  return Math.abs(n % 2) === 1;
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
function letterGrade(score, total) {
  let grade = (score / total) * 100;
  switch (true) {

    case grade >= 90:
      return "A";
      break;

    case grade >= 80:
      return "B";
      break;

    case grade >= 70:
      return "C";
      break;

    case grade >= 60:
      return "D";
      break;

    default:
      return "F";
  }
};

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
function incrementReviews(restaurant) {
  if (restaurant.reviews >= 1) {
    restaurant.reviews++;
  } else if (restaurant.reviews === undefined) {
    restaurant.reviews = 1;
  }
  return restaurant;
};

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
let combine = function(word1, word2) {
  let words = word1 + " " + word2;
  return words;
};

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

function createCircle(radius) {
  let circle = {};
  circle.circumference = (2 * Math.PI * radius);
  circle.area = (Math.PI * radius * radius);
  return circle;
}
