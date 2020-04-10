/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Approaches
// Brute force: computer all possible permutations, and then rotate through list by one
// TC: O(n!), SC: O(n!). Not good because slow and we want in-place constant space.
// Notice we only need the *next* permutation, not all permutations.
// Hypothetically we could compute the next permutation by simply comparing the numbers from the back of the list, and swapping them if they are less. Worst case is a TC of O(n) swap, where n is number of numbers. We could do in constant space.
// Example: 1,2,3, compare 3 to 2, since > we swap and return
//          1,3, 2, compare 3 to 2, skip, and now compare these two with first, and swap, so 2, 1, 3, and then start over from back
//          2, 1, 3, compare 3 to 1 and swap so 2, 3, 1
//          2, 3, 1, compare 3 1 don't swap, compare 2 with 3, get 3, and then 

// Notice: calculating permutation of last pair and then increasing by 1 and running an algorithm on this
// 1,2,3,4
// 1,2,4,3 (math.max of last two, math.min of last two)
// 1,3,2,4 (math.min of last two swap with first, then math.min of last two, then math.max of last two)
// 1,3,4,2 (math.max of last two, then math.min of last two)
// 1,4,2,3 (math.max of last two, then math.min of last two, then math.max of last two)
// 1,4,3,2 (math.max of last two, then math.min of last two)
// 2,1,3,4 (math.min of last three, then math.min of last three, then, math.min of )

// Can we use info that we know will be in ascending order? Can we use a Math min/max/sort? Sort is too slow (nlogn), but Math.min/max is constant time so sounds promising.
// We know for the three-el we want to first swap min 2, and then swap next biggest num

// base case: one element, don't swap






 var nextPermutation = function (nums) {};
