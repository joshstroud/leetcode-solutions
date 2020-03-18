// Approach:
// Brute force: iterate through every integer from min start time to max end time, and add number of intervals selected for integer. Max number of this array is number of conference rooms needed.
// Time complexity: O(n), space complexity: O(n)
// We could accelerate this algorithm if we just fill the array with 1 for every start and end time.
// slow, since we track every potential integer. Algorithm will fail if we have big starting and ending values
// Another brute-force algorithm: sort intervals by least to greatest start time, and then iterate through intervals comparing previous end time with current start time, and tracking number of overlap
// Might be faster in practice than the other brute force algorithm, but theoretically time complexity: O(n log n) because of sort. Space complexity of O(n) since we are creating array of intervals.

// Another brute force:

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  // const minTime = Math.min(intervals.flatten());

  if (intervals.length === 0) {
    return 0;
  }

  let flattenedIntervals = [];
  for (let i = 0; i < intervals.length; i++) {
    flattenedIntervals.push(intervals[i][0], intervals[i][1]);
  }

  const maxTime = Math.max(...flattenedIntervals);

  let conferenceRoomTimeList = new Array(maxTime);
  conferenceRoomTimeList.fill(0);

  intervals.forEach(interval => {
    for (let time = interval[0]; time < interval[1]; time++) {
      conferenceRoomTimeList[time]++;
    }
  });

  return Math.max(...conferenceRoomTimeList);
};

const m1 = [
  [0, 30],
  [5, 10],
  [15, 20]
];
const m2 = [
  [7, 10],
  [2, 4]
];

console.log(minMeetingRooms(m2));
