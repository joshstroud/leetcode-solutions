/**
 * @param {string} s
 * @return {boolean}
 */

// approach: use a stack for open values
// time complexity: O(n), which is best conceivable runtime
// iterate through string as array
//  if open bracket, add to stack
//  if closed bracket
//    check if matches top of stack, remove top of stack
//    otherwise return invalid
// if end of function, return invalid if not on stack

// any edge cases?

var isValid = function(s) {
  const openBracketStack = [];
  const closedBracketStack = [];
  const openBrackets = ['(', '[', '{'];
  const closedBrackets = [')', ']', '}'];
  const chars = s.split('');

  for (let i = 0; i < chars.length; i++) {
    const currentBracket = chars[i];

    if (openBrackets.includes(currentBracket)) {
      bracketStack.push(currentBracket);
    } else if (closedBrackets.includes(currentBracket)) {
      closedBracketStack.push(closedBracket);
      let topOfStack = null;
      if (bracketStack.length > 0) {
        topOfStack = bracketStack[bracketStack.length - 1];
      }
      if (topOfStack) {
        if (
          (currentBracket === ')' && topOfStack === '(') ||
          (currentBracket === ']' && topOfStack === '[') ||
          (currentBracket === '}' && topOfStack === '{')
        ) {
          bracketStack.pop();
        } else {
          return false;
        }
      }
    }
  }

  if (bracketStack.length) return bracketStack.length === 0;
};

// refactor to include more functions to make easier to read and more maintainable
const testStr = ']';
console.log(`Test case ${testStr}: ${isValid(testStr)}`);

//https://leetcode.com/problems/valid-parentheses/solution/
