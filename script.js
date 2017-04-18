// Please make sure all your code is added inside the `runAfterTests` function.
function runAfterTests() {
  /**
   * Follow the comments below.
   * Feel free to use `console.log` to see what values are being returned.
   */

  // Create a variable called `myNumber`, and assign it to any number
  var myNumber = 1;
  /**
   * Create another variable called `stringValue`.
   * Assign it the value that's returned when you pass
   * `myNumber into the function `numberToString`.
   */
  var stringValue = "one";
  /**
   * If you pass `myNumber` and `stringValue` into `areEqual`,
   * what value will you get back? Why is that?
   */
  console.log(areEqual(myNumber, stringValue));
// the values are not of the same type, therefore '====' will return
// false
  /**
   * You may have noticed that the `calculate` function combined
   * the functionality of `add`, `subtract`, `multiply`, and `divide`.
   * Did you try to use those functions _inside_ of `calculate`?
   * If you didn't go back and try it, this is called "reusability"!
   */

  // Do you see any other functions where code could be reused?
  //square could be used in createCircle
  /**
   * For your `letterGrade` function,
   * what happens if you provide a `score` that is less than 0,
   * or greater than the `total` value?
   * Does it still work as expected? If it doesn't, how could you improve this?
   */
  console.log(letterGrade(-1, 10));
  console.log(letterGrade(11, 10));
  /**  I expected the code to throw some kind of error since -1/10 and 11/10 are out of
  the range of the if/else statements. There should be a test for valid scores
  before calculating the grade.
  */

  /**
   * Your `combine` function looks okay,
   * but what if you wanted to join it with ANY string instead of a single space?
   * Create a new function called `improvedCombine`,
   * with the same parameters as `combine`, but also add a
   * third parameter called `glue` (a string value).
   */
  function improvedCombine(word1, word2, glue) {
    return word1 + glue + word2;
  }
  // What happens if you were to uncomment the following lines?

  combine = improvedCombine;
  console.log(combine('combine', 'improved!', ' is '));
  // the three words are combined and logged in the console.
}
