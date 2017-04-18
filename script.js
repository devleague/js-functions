// Please make sure all your code is added inside the `runAfterTests` function.
function runAfterTests() {
  /**
   * Follow the comments below.
   * Feel free to use `console.log` to see what values are being returned.
   */

  // Create a variable called `myNumber`, and assign it to any number
	var myNumber = 3;
  /**
   * Create another variable called `stringValue`.
   * Assign it the value that's returned when you pass
   * `myNumber into the function `numberToString`.
   */
	var stringValue = numberToString(myNumber);
	console.log(stringValue);
  /**
   * If you pass `myNumber` and `stringValue` into `areEqual`,
   * what value will you get back? Why is that?
   */
	var value = areEqual(myNumber, stringValue);
	console.log(value);
   //I will get back a false because  and "myNumber" is a number and "stringValue" is a string.

  /**
   * You may have noticed that the `calculate` function combined
   * the functionality of `add`, `subtract`, `multiply`, and `divide`.
   * Did you try to use those functions _inside_ of `calculate`?
   * If you didn't go back and try it, this is called "reusability"!
   */
   //Example of the using of this function:
	var calculatedValue = MathematicalOperation('multiply', 3, 9);
	console.log(calculatedValue);
  // Do you see any other functions where code could be reused?
  //->I think we can reuse all functions in functions.js except those which returns a string value.
  
  /**
   * For your `letterGrade` function,
   * what happens if you provide a `score` that is less than 0,
   * or greater than the `total` value?
   * Does it still work as expected? If it doesn't, how could you improve this?
   */
   //Example to illustrate the question:
	var example = LetterGrade(-3, 20);
	console.log(example);
   //The code won't work as expected because we did'nt treat those conditions. So to resolve this, we can create a condition.

  /**
   * Your `combine` function looks okay,
   * but what if you wanted to join it with ANY string instead of a single space?
   * Create a new function called `improvedCombine`,
   * with the same parameters as `combine`, but also add a
   * third parameter called `glue` (a string value).
   */
	function ImprovedCombine(word1, word2, glue){
		var joined = word1 + glue + word2;
		return joined;
	}
  // What happens if you were to uncomment the following lines?
   combine = improvedCombine;
   console.log(combine('combine', 'improved!', ' is '));
 //After I have uncommented those lines, I get the result: "combine is improved!".
}
