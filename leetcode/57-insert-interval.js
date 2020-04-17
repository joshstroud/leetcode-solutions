// intervals are sorted according to their start time, non-overlapping
// merge intervals if necessary

// Approach:
// Iterate through intervals until we find interval before new interval, and splice in interval
// if merge, iterate through each following interval until we are outside of the range, and merge using min and max indices
// Time complexity: worst-case O(n^2), iterate through each interval, and splice in merged interval. SC: O(n), where n is number of intervals
// Since intervals are sorted, we can improve interval search to O(log n) using binary search, for both finding intervals and finding end interval for merge. Still need to splice though, so O(n * log n)
// How could we speed up splicing? Need to insert element into array, so need to push everything back O(n)
// Best concievable runtime: if we binary search everything and merge in place, O(log n)

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const [startIntervalIndex, merge] = findStartInterval(intervals, newInterval);

  // if not merging intervals
  if (!merge) {
    intervals.splice(startIntervalIndex, 0, newInterval);
    return intervals;
  }

  const endMergeIntervalIndex = findEndMergeInterval(
    intervals,
    newInterval,
    startIntervalIndex
  );
  const mergedIntervals = mergeIntervals(
    intervals,
    startIntervalIndex,
    newInterval,
    endMergeIntervalIndex
  );

  return mergedIntervals;
};

const findStartInterval = (intervals, newInterval) => {
  const startIntervalIndex = bsearch(intervals, newInterval[0])

}

const startBsearch = (intervals, startIndex, endIndex, targetInterval) {
  const midIndex = Math.floor((start + end) / 2);

  const midIntervalStart = intervals[midIndex][0];
  const midIntervalEnd = intervals[midIndex][1];
  const targetIntervalStart = targetInterval[0];
  const targetIntervalEnd = targetInterval[1];

  if (midIntervalStart <= targetInterval[0] && midIntervalEnd >= targetInterval[1]) {
    return currentIndex;
  }

  if (midIntervalEnd < targetIntervalStart) {
    return startBsearch(intervals, midIndex + 1, endIndex)
  } else if (midIntervalStart > targetIntervalEnd) {
    return startBsearch(intervals, startIndex, midIndex - 1);
  }

  return -1;
}