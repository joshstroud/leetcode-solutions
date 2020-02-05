// 202 Happy Number
/**
 * @param {number} n
 * @return {boolean}
 */

// approach: use recursion. Define method to calculate each loop, and then check final loop. Use a hash to track numbers we've already seen, to check if it's a cycle.
// base case 1: number is a 1
// base case 2: check hash, return false if number is a repeat
// inductive: call calcSquare on digits

// we could also do iteratively, try both!
// Set has two methods we want: #add(value) and get(key)

var isHappy = function(n) {
  const seenSums = new Set();
  let isHappyObj = { isHappy: false };

  calcHappyNumber(n, seenSums, isHappyObj);

  return isHappyObj.isHappy;
};

const calcHappyNumber = function(n, seenSums, isHappyObj) {
  if (n === 1) {
    isHappyObj.isHappy = true;
    return;
  }

  const sum = String(n)
    .split('')
    .reduce((sum, num) => sum + Math.pow(Number(num), 2), 0);

  if (seenSums.has(sum)) {
    return;
  }

  seenSums.add(sum);

  calcHappyNumber(sum, seenSums, isHappyObj);
};

console.log(isHappy(19));
console.log(isHappy(20));
