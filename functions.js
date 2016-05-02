/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
function numberToString(Number) {
  return Number.toString();
}
console.log(numberToString(11));
/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
function increase(n) {
  return n += 1;
}
console.log(increase(99));
/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function decrease(n) {
  return n -= 1;
}
console.log(decrease(101));
/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function add(x,y) {
  return x + y;
}
console.log(add(834012385237430, 348791598));
/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
function subtract(x,y) {
  return x - y;
}
console.log(subtract(122, 24));
/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function multiply(x,y) {
  return x * y;
}
console.log(483908423, 4621434915208941);
/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
function divide(x,y) {
  return x / y;
}
console.log(divide(804684560, 22));
/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
function square(x) {
  return x * x;
}
console.log(square(454156));
/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
function calculate(operation, x,y) {
  if (operation === 'add') {
      var sum = add(x,y);
      console.log(x + ' + ' + y + ' = ' + sum);
      return sum;
  } else if (operation === 'subtract'){
      var diff = subtract(x,y);
      console.log(x + ' - ' + y + ' = ' + diff);
      return diff;
  } else if (operation === 'multiply') {
      var prod = multiply(x,y);
      console.log(x + ' * ' + y + ' = ' + prod);
      return prod;
  } else if (operation === 'divide') {
      var quo = divide(x,y);
      console.log(x + ' / ' + y + ' = ' + quo);
      return quo;
  }
}
var whatDo = 'divide';
console.log(calculate(whatDo, 25767, 564));
/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  } else {
    return false;
  }
}
console.log(isGreaterThan(2456, 1));
/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
function isLessThan(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}
console.log(isLessThan(245845765187, 7));
/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function areEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
console.log(areEqual(12, 12));
/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
function minimum(x, y) {
  return Math.min(x, y);
}
console.log(minimum(12556, 1456));
/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
function maximum(x, y) {
  return Math.max(x, y);
}
console.log(maximum(456, 468732));
/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function isEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
  return false;
  }
}
console.log(isEven(4214));
/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function isOdd(n) {
  if (n % 2 !== 0) {
    return true;
  } else {
  return false;
  }
}
console.log(isOdd(4128971));
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
  var percent = score / total;
    if (percent >= 0.9) {
      return 'A';
    } else if (percent >= 0.8) {
      return 'B';
    } else if (percent >= 0.7) {
      return 'C';
    } else if (percent >= 0.6) {
      return 'D';
    } else {
      return 'F';
    }

}
var score = 9;
var total = 100;
console.log(letterGrade(score, total));
/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
function incrementReviews(restaurant) {
  if (restaurant.hasOwnProperty('reviews')){
    restaurant.reviews++;
    return restaurant;
  } else {
    restaurant.reviews = 1;
    return restaurant;
  }
}
var badDiner = {
  reviews: 2
};
console.log(incrementReviews(badDiner.reviews));
/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
function combine(word1, word2) {
  return word1 + ' ' + word2;
}
console.log('lol', 'hax');
/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

function createCircle(radius) {
  circle = {
    circumference: 2 * radius * Math.PI,
    area: Math.PI * radius * radius
  };
  return circle;
}
console.log(createCircle(20));