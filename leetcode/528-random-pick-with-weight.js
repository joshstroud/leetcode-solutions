// Constraints
// w.length <= 100000
// w[i] <= 10^5
// pickIndex will be called up to 10^4 times

// Approaches
// Brute force approach: create an array where we add index weight times, and then pick random index from array
// TC: O(1). SC: O(n * w[i]), so for max space is 1000 GB which is too big for a computer. So this won't work.

// Instead of storing every index in an array, could we just store start and end intervals, and then compare picked random number to find which interval we are in?
// TC: O(n) for each pick, since we look through all intervals to find index, SC: O(n), where n is number of integers. Fits SC, but slow (need to search all intervals)

// Any properties we can notice about weights? We know total number of weighs is sum of all elements in array.
// Best concievable runtime is O(1), just picking a number directly.

// Ways to implement the pick:
// Choose a random number from 0 to sum(w[i])
// probability of an index is w[i] / sum(w[i])
// Do we need to know anything about weighted distributions?

/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.intervals = [];
  let endInterval = -1;

  w.forEach((weight, index) => {
    const startInterval = endInterval + 1;
    endInterval = startInterval + weight - 1;
    this.intervals.push([startInterval, endInterval]);
  });

  this.maxInterval = endInterval;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const pickedIndex = Math.round(Math.random() * this.maxInterval);

  for (let index = 0; index < this.intervals.length; index++) {
    const [startInterval, endInterval] = this.intervals[index];
    if (pickedIndex >= startInterval && pickedIndex <= endInterval) {
      return index;
    }
  }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

const sol = new Solution([1, 3, 100, 100, 100]);
console.log(sol.pickIndex());
console.log(sol.pickIndex());
console.log(sol.pickIndex());
console.log(sol.pickIndex());
console.log(sol.pickIndex());
console.log(sol.pickIndex());
console.log(sol.pickIndex());
console.log(sol.pickIndex());
console.log(sol.pickIndex());
console.log(sol.pickIndex());
console.log(sol.pickIndex());
console.log(sol.pickIndex());
console.log(sol.pickIndex());
console.log(sol.pickIndex());
console.log(sol.pickIndex());
console.log(sol.pickIndex());
console.log(sol.pickIndex());
console.log(sol.pickIndex());
console.log(sol.pickIndex());
console.log(sol.pickIndex());
console.log(sol.pickIndex());
console.log(sol.pickIndex());
console.log(sol.pickIndex());
console.log(sol.pickIndex());
