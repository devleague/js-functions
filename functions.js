/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */


var number = 0;

function numberToString(number){
number = number.toString();
return number;
}
numberToString(4); 

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
 function increase(n){
 	n = n+1;
 	return n;

 }


/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
 function decrease(n){
 	n= n-1;
 	return n;

 }


/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
 function add(x,y){
 	var sum = x+y;
 	return sum;

 }


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
 function subtract(x,y){
 	var diff = x-y;
 	return diff;

 }


/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
 function multiply(x,y){
 	var mult = x*y;
 	return mult;

 }


/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
function divide(x,y){
 	var div = x/y;
 	return div;

 }


/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
 function square(x){
 	var squ = x*x;
 	return squ;

 }


/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
 function calculate(operation, x, y) {
 	var number;
 	var x;
 	var y;

 	if(operation === "add"){
 		number = x+y;
 		console.log(x + " + " + y + " = " + number);
 	}
 	else if(operation === "subtract"){
 		number = x-y;
 		console.log(x + " - " + y + " = " + number);
 	}
 	else if(operation === "multiply"){
 		number = x*y;
 		console.log(x + " * " + y + " = " + number);
 	}
 	else if(operation === "divide"){
 		number = x/y;
 		console.log(x + " / " + y + " = " + number);
 	}
 	return number;
 }
 calculate("add",1,2);


/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function isGreaterThan(a, b){
if (a > b){
	console.log("a" + " is larger than " + "b");
	return true;
}
else{
	return false;
}

}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
 function isLessThan(a, b){
if (a < b){
	console.log("a" + " is smaller than " + "b");
	return true;
}
else{
	return false;
}

}


/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
  function areEqual(a, b){
if (a === b){
	console.log("the numbers are equal");
	return true;
}
else{
	return false;
}

}


/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
 function minimum(x,y){
 	if(x<y){
 		console.log("the smallest number");
 		return x;
 	}
 	else{
 		console.log("the smallest number");
 		return y;
 	}
 
 	}


/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
 function maximum(x,y){
 	if(x>y){
 		console.log("the largest number");
 		return x;
 	}
 	else{
 		console.log("the largest number");
 		return y;
 	}
 
 	}


/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
 function isEven(n){
 	if(n%2 === 0){
 		console.log("the number is even");
 		return true;
 	}
 	else{
 		return false;
 	}



 }


/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
  function isOdd(n){
 	if(n%2 != 0){
 		console.log("the number is odd");
 		return true;
 	}
 	else{
 		return false;
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
 function letterGrade(score, total){
 	var grade = (score/total)*100;
 	if (grade >= 90){
 		return "A";
 	}
 	else if(grade <90 && grade >= 80){
 		return"B"
 	}
 	else if(grade <80 && grade >= 70){
 		return"C"
 	}
 	else if(grade <70 && grade >= 60){
 		return"D"
 	}
 	else if(grade <60 && grade >= 0){
 		return"F"
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
	 if (restaurant.reviews){
	 	 restaurant.reviews++;
	 }
	 else{
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
var join = word1 + " "+word2;
console.log(join);
return join;


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
 		circumference:2*Math.PI*radius,

 		area:Math.PI*(radius*radius)
 	}
return circle;
 }

