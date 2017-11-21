#Javascript Function Exercises

Create 20 functions by following the comments in `functions.js`.
*Write all of functions below in `functions.js`*

## Getting Started

1. Clone this repository and change your current working directory to this repository.
1. Install all dependencies by running the command: `npm install`
1. Run the command `npm start` and then visit [localhost:8080](http://127.0.0.1:8080/) to see all the failing tests.
1. Your work will be done in the file named: `functions.js`
1. Your tests are broken, fix them!
1. Refresh the page to see passing tests.
1. Repeat until all tests pass.

---

numberToString(_Number_)
-----------------------------
Converts a number a string.

**Parameters**

**n**: number

**Returns**: string, the number as a string

increase(n)
-----------------------------
Adds one to a given number

**Parameters**

**n**: number

**Returns**: number

decrease(n)
-----------------------------
Subtracts one from a given number

**Parameters**

**n**: number

**Returns**: number

add(x, y)
-----------------------------
Adds two numbers.

**Parameters**

**x**: number

**y**: number

**Returns**: number, the sum

subtract(x, y)
-----------------------------
Subtracts the second number from the first.

**Parameters**

**x**: number

**y**: number

**Returns**: number, the difference

multiply(x, y)
-----------------------------
Multiplies two numbers.

**Parameters**

**x**: number

**y**: number

**Returns**: number, the product

divide(x, y)
-----------------------------
Divides the first number by the second.

**Parameters**

**x**: number

**y**: number

**Returns**: number, the quotient

square(x)
-----------------------------
Multiplies a number by itself.

**Parameters**

**x,**: number, number to be squared

**Returns**: number, squared

calculate(operation, x, y)
-----------------------------
Prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
Returns the result.

**Parameters**

**operation**: string, "add", "subtract", "multiply", or "divide"

**x**: number

**y**: number

**Returns**: number, the result

isGreaterThan(a, b)
-----------------------------
Returns true if `a` is greater than `b`

**Parameters**

**a**: number

**b**: number

**Returns**: boolean, `a` is larger than `b`

isLessThan(a, b)
-----------------------------
Returns true if `a` is less than `b`

**Parameters**

**a**: number

**b**: number

**Returns**: boolean, `a` is smaller than `b`

areEqual(a, b)
-----------------------------
Returns true if `a` and `b` are equal

**Parameters**

**a**: number

**b**: number

**Returns**: boolean, the numbers are equal

minimum(x, y)
-----------------------------
Returns the smallest value of two numbers.

**Parameters**

**a**: number

**b**: number

**Returns**: number, the smallest number

maximum(x, y)
-----------------------------
Returns the largest value of two numbers.

**Parameters**

**a**: number

**b**: number

**Returns**: number, the largest number

isEven(n)
-----------------------------
Returns true if `n` is even.

**Parameters**

**n**: number

**Returns**: boolean, the number is even

isOdd(n)
-----------------------------
Returns true if `n` is odd.

**Parameters**

**n**: number

**Returns**: boolean, the number is odd

letterGrade(score, total)
-----------------------------
Returns a letter grade.
"A": 90-100%
"B": 80-89%
"C": 70-79%
"D": 60-69%
"F": 0-59%

**Parameters**

**score**: number

**total**: number, maximum possible score

**Returns**: string, the score represented as a letter grade

incrementReviews(restaurant)
-----------------------------
Checks if a `restaurant` object has a `reviews` field.
If it does, increase it by 1. If it does not,
set its `reviews` field to 1.

**Parameters**

**restaurant**: object, represents a restaurant

**Returns**: object, the modified object


combine(word1, word2)
-----------------------------
Joins two strings with a space.

**Parameters**

**word1**: string

**word2**: string

**Returns**: string, joined the words joined with a space

createCircle(radius)
-----------------------------
Returns a circle object with the properties `circumferance` and `area`.

Use [Math.PI](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI) for the value π.

**Parameters**

**radius**: number

**Returns**: object, circle

-----------------------------

![js-functions](http://i.imgur.com/HmYgp37.jpg)

After all your tests pass, practice calling functions by following the comments in `script.js`.
