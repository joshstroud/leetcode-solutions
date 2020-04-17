// given [7,2, 5,10,8]
// m = 2
// we can split into:
// [7], [2, 5, 10, 8], largest sum is array 2 [23]
// [7,2], [5, 10, 8], largest sum is array 2 [23]
// [7, 2, 5], [10, 8], largest sum is array 2 [18] <-- minimum largest sum

// Constraints: n <= 1000, m < min(50, n) (50 in worst case)

// Approaches:
// Brute force: compute every potential array sum and then compare
// worst cast: n = 100, m = 50, then TC: O((n*m)!), so this doesn't scale.

// Could we use a greedy algorithm to find local minimum with running sum?
// Find min and max number of numbers in a subarray (1 and 5 in example)

/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {};
