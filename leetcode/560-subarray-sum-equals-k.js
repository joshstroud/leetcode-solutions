/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Longer example:

// [1,2,3, 3, 5, 1, 3, 3], k = 6, result = 2
// [1,2,3], [5, 1], [3, 3]

// Approaches: brute force, try every potential subarray
// Time complexity: for each element, n subarrays, so O(n^2), SC: O(1) since we don't store arrays
// Best concievable runtime would be O(n), since we need to run through full array at least once
// Notice: we don't need to "know" the subarrays, just that they exist.
// Could we use a windowing solution?
// starting from 0, grow window by next element while < k, remove last element if > k. Still an O(n^2) solution though. Doesn't seem like it works.
// Other approach: track whether array sums to k, and keep moving forward
// so, try 1, 12, 123, reset, 35, reset and backup one, 51, reset, 33
// This works so far, and is an O(n) time complexity. SC of O(1)

// Code this
// Misread the problem, needs to include overlapping subarrays too
// modify, can we track collective sum using this method in an array?
// Use a growing window to track current sum, drop off last element if too big
// TC: O(n), since cutting out last el and adding new el is constant time
// Ran out of time

// After reading solution,
// approach: store running sum and number of sums in hash
// compare each num against currentSum - k to see if in hash. If so, then increment count
var subarraySum = function (nums, k) {
  let sums = {};
  let sum = 0;
  let count = 0;

  nums.forEach((num) => {
    sum += num;

    if (sums[sum]) {
      sums[sum]++;
    } else {
      sums[sum] = 1;
    }

    if (sums[sum - k]) {
      count++;
    }
  });

  return count;
};

const arr1 = [1, 2, 3, 7, 4, -5, 5, 1];
const arr2 = [1, 1, 1];
console.log(subarraySum(arr1, 6));
