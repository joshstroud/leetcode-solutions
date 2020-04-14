// Approaches
// Brute force: simply use a sorted array, and scan through array to find median. Time complexity of O(n log n) because of sort, with SC of O(n) since we store all the elements once.
// Above doesn't work, because we need an ORDERED integer list. We want the middle of the list.
// Simpler brute force: simply scan through array to find median TC: O(1) (since we know middle), SC: O(n) since we store all elements.

/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.nums = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.nums.push(num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const middleIndex = this.nums.length / 2;

  // console.log(middleIndex);
  if (this.nums.length % 2 === 0) {
    const leftNum = this.nums[middleIndex - 1];
    const rightNum = this.nums[middleIndex];
    return (leftNum + rightNum) / 2;
  } else {
    return this.nums[Math.floor(middleIndex)];
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
const mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian());
mf.addNum(3);
console.log(mf.findMedian());
