/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
function numberToString (number) {

  return number.toString();
 }
/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

function increase (number) {

  return number +1;
 }


/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

function decrease (n) {

  return n -1;
}


/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function add (x, y) {
  return x + y;
 }

add( 10, 20);

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
function subtract (x, y) {

  return x - y;
 }

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function multiply (x, y) {

  return x * y;
}


/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
function divide (x, y) {
  return x / y;
 }

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
function square (x) {
  return x * x;
 }

/*
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result*/

function calculate (operation, x, y) {

   if (operation === "add") {
    var sum = x + y;
    console.log (x + " + " + y + " = " + sum);
   return sum;
   }
   else if (operation === "subtract") {
    var minus = x - y;
    console.log (x + " - " + y + " = " + minus);
   return minus;
   }
   else if (operation === "multiply") {
   var times = x * y;
   console.log(x + " * " + y + " = " + times);
   return times;
   }
   else if (operation === "divide") {
   var divvy = x / y;
   console.log(x + " / " + y + " = " + divvy);
   return divvy;
  }
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

function isGreaterThan (a, b) {
  if (a > b) {
    return true;
  }
  else {return false;
  }
}
/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
function isLessThan (a, b) {
  if (a < b) {
    return true;
  }
  else {return false;
  }
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function areEqual (a, b) {
  if (a === b) {
    return true;
  }
  else {
  return false;
  }
}

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
function minimum (a, b) {

  var arr = [a, b];

  if (typeof number) {
   if (arr.sort()) {
     return arr[0];
   }
  }
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
function maximum (a, b) {

  //var arr = [1, 2, 24, 34, 100, -45];
  var arr = [a, b];

  //this e.g. arr.sort(function(a, b) {if (a > b) {return 1;} else if (b > a) {return -1;} else {return 0;}})
  //this function is returning in ascending, which is why arr[1]
  //able to switch operators, +1 or -1, or parameters to make array go in ascending or descending order
  arr.sort(function (a, b){
   return (a - b);
  });
   return arr[1];
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function isEven (number) {

 if (number % 2 === 0) {
  return true;
 }
 else {return false;
 }
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function isOdd (number) {

 if (number % 2 !== 0) {
  return true;
 }
 else {return false;
 }
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
function letterGrade (score, total) {

  var percentage = (score / total) * 100;
//<100 vs <= 100 as this will make you miss 99.89 etc etc
  if (percentage >= 90 && percentage < 100) {
    return "A";
  }
  else if (percentage >= 80 && percentage < 90) {
    return "B";
  }
  else if (percentage >= 70 && percentage < 80) {
    return "C";
  }
  else if (percentage >= 60 && percentage < 70) {
    return "D";
  }
  else if (percentage >= 0 && percentage < 60) {
    return "F";
  }
}

  // body...

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
/*function incrementReviews (restaurant) {

  var eatery = {

    reviews: 0,
    name: name,
    location:
  }
  for (var i = 0; i < eatery; i++) {

  }

};*/


/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */


/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

