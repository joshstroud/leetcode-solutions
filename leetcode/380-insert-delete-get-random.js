// insert 1, array, hash have insert of O(1)
// remove(1), array has O(n), hash has O(1) deletion time
// random, choose an index using Math.rand within Hash parameters and return. O(1) access

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.obj = {};
  this.array = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.obj[val] !== undefined) {
    return false;
  } else {
    this.array.push(val);
    this.obj[val] = this.array.length - 1;
    return true;
  }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.obj[val] !== undefined) {
    const lastVal = this.array.pop();
    const valIdx = this.obj[val];
    this.array[valIdx] = lastVal;
    this.obj[lastVal] = valIdx;
    delete this.obj[val];
    return true;
  }

  return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randIdx = Math.round(Math.random() * (this.array.length - 1));
  return this.array[randIdx];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

// const obj = new RandomizedSet();
// console.log(obj.insert(1));
// console.log(obj.remove(2));
// console.log(obj.insert(2));
// obj.remove(1);
// console.log(obj.getRandom());
