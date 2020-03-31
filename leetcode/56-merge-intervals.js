/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// Brainstorm of approaches
// What's the brute force approach?
// For each interval, check against every other interval to see if overlap, and merge if so.
// So 1-3, check against 2-6, and merge. Now check 1-6 against 8-10, and 15-18. Then 8-10 against 15-18, etc.
// Time complexity: O(N^2), since we check every element against N elements worst case
// Space complexity: O(1), if we do merges in-place.

// If we knew all of the intervals were in order, we wouldn't need to backtrack. We could just compare start and end of interval.
// So: sort the intervals, and then compare start and end of them to next one to find merged ones. This would be TC: O(n log n) and SC: O(n)

// Could we get it to O(n)? That's the best concievable runtime, because we need to look at each interval at least once. Can we look at absolutely?
// One clunky solution is to just track every point from 0 to the max interval val, one by one, check whether we are in an interval, and merge them if so. This would give us TC: O(n), and SC: O(n)
// Downside is that if max interval value is very large, then takes forever to check every interval. So not performant in that case. Also, space complexity would be huge if we have large interval max values.

// Could we just compare min and max

// Let's go with clunky O(n) solution
// create array of every point from 0 to max interval value
// for each interval, fill array with start and end point of that interval. If we see an interval, where an array starts or ends, merge the array
// return the merged arrays
// seems clunky.

// I'm going to assume sort n log n is ok, because space complexity will get too much
// sort intervals least to greatest
// go through each interval, comparing to next interval. If next interval start time is equal or before previous end time, merge intervals
// Don't do in place so it's easier to map into a new array

// Could we merge as we sort?

var merge = function(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }

  const sortedIntervals = intervals.sort(compareIntervals);
  let mergedIntervals = [sortedIntervals[0]];

  let firstInterval = sortedIntervals[0];
  for (let i = 0; i < sortedIntervals.length - 1; i++) {
    const secondInterval = sortedIntervals[i + 1];

    console.log(firstInterval, secondInterval);
    if (firstInterval[1] >= secondInterval[0]) {
      if (mergedIntervals[.length === 1]) {
        mergedIntervals = [];
      }

      const mergedInterval = mergeTwoIntervals(firstInterval, secondInterval);
      mergedIntervals.push(mergedInterval);
      firstInterval = mergedInterval;
    } else {
      mergedIntervals.push(secondInterval);
      firstInterval = secondInterval;
    }
  }

  return mergedIntervals;
};

const compareIntervals = (a, b) => {
  if (a[0] < b[0]) {
    return -1;
  } else if (a[0] === b[0] && a[1] < b[1]) {
    return -1;
  } else {
    return 1;
  }
};

const mergeTwoIntervals = (a, b) => {
  const min = Math.min(...a, ...b);
  const max = Math.max(...a, ...b);
  return [min, max];
};

const ex1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
];

const ex2 = [
  [1, 4],
  [4, 5]
];

const ex3 = [
  [2, 3],
  [2, 2],
  [3, 3],
  [1, 3],
  [5, 7],
  [2, 2],
  [4, 6]
];
// console.log(merge(ex1));
// console.log(merge(ex2));
console.log(merge(ex3));
