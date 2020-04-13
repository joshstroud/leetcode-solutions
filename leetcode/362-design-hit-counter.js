// Approach
// Simplest approach: store hit count in a hash. Create method that searches for last timestamp in hash to return number of hits. Calculate
// TC: O(1) read and write for writing and reading hits.
// SC: O(t), where t is number of seconds. This is best concievable runtime for SC since we will need to store the hit count for each timestamp.

// Notice that it resets after five minutes.

// Key questions:
// How to search for previous timestamp when getting timestamp after a hit? Brute force: just go through 1 to n timestamp. Key assumption: timestamp is always increasing. So we can just save greatest timestamp hit count and return that.
// How do we remove entries from hit count after five minutes? Brute force: search through hash and find all indices > 300 seconds from current timestamp, and remove from prev count. This is a TC O(t) op, since number of timestamps to remove is constant

// Another option: since only five minutes, just have an array of every timestamp, and store hit count for each one. TC: O(t) where t is max time. Need to set every time. How to avoid search when looking for timestamp?

// Summary:
// track all hit counts in a hash, as well as a greatest hit count with latest timestamp. TC: O(1), SC: O(t) where t is max timestamp
// Get greatest hit count by subtracting hit counts with timestamps > 300 from latest hit count, update variables, and return. TC: O(1) (300 entries max).

// Example: hit(1), hit(2), getHit(3), hit(301), getHit(303)

// Scaling consideration, if we have lots of hits over extended period of time then we might want to check to clear cache of previous five minutes, since we can assume timestamps are always increasing

/**
 * Initialize your data structure here.
 */
var HitCounter = function () {
  this.hitCount = {};
  this.maxHitCount = 0;
};

// maxhitCount = 1, {1: 1}
// maxHitCount = 2, {1: 1: 2: 2},
// maxHitCount = 3  {1: 1, 2: 2, 301: 3}

/**
 * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function (timestamp) {
  this.maxHitCount++;
  this.hitCount[timestamp] = this.maxHitCount;
};

/**
 * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {number}
 */

// getHit(3), getHit(303)
HitCounter.prototype.getHits = function (timestamp) {
  let startingTimestamp = timestamp - 300; // 3
  while (!this.hitCount[startingTimestamp] && timestamp !== startingTimestamp) {
    startingTimestamp++;
  }
  // startingTimestamp = 1, 301
  if (timestamp === startingTimestamp) {
    return 0;
  }

  const hitCount = this.maxHitCount - this.hitCount[startingTimestamp] + 1; // (3 - 3 + 1 = 1)
  console.log(`Hit count: ${hitCount}`);
  return hitCount; // 2, 1
};

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */

const counter = new HitCounter();

// hit at timestamp 1.
counter.hit(1);

// hit at timestamp 2.
counter.hit(2);

// hit at timestamp 3.
counter.hit(3);

// get hits at timestamp 4, should return 3.
counter.getHits(4);

// hit at timestamp 300.
counter.hit(300);

// get hits at timestamp 300, should return 4.
counter.getHits(300);

// get hits at timestamp 301, should return 3.
counter.getHits(301);
