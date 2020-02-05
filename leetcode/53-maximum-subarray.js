/**
 * @param {number[]} nums
 * @return {number}
 */

// brute force: sum every single combination. n! combinations, terrible performance
// Time complexity of O(n) is best conceivable runtime
// keep a running tally, and return biggest sum
var maxSubArray = function(nums) {
  let maxSum = 0;
  let sum = 0;

  if (nums.length === 1) {
    return nums[0];
  }

  nums.forEach(num => {
    sum = Math.max(num, sum + num);
    if (sum > maxSum) {
      maxSum = sum;
    }
  });

  return maxSum;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log('Sum: ' + maxSubArray(nums));
