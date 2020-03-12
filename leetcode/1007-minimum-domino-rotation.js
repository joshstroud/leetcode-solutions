// Approach:
// Brute force: check every potential combination
// 2 options for each domino, so time complexity O(2^n), where n is number of dominos
// exponential is super-slow! What's a faster approach?

// Noticing that it's a sort of tree of possibilities, so maybe we could model dominos as a tree?
// Simpler approach: what if we use a frequency hash?
// Insight: to have all the numbers line up, the total frequency of a number of top plus bottom needs to be equal to total number of dominos
// So: we can check for which frequencies of top plus bottom equal total, and the smaller number is number of rotations.
// Assume: top and bottom can be different
// Time complexity: O(n) (create frequency hash), space complexity O(1) (since 6 * 2 potential options for frequency)
// Best concievable runtime is O(n), so this solution works.

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
  const topFrequency = {};
  const bottomFrequency = {};

  const topBottomSameCount = {};

  for (let i = 1; i <= 6; i++) {
    topFrequency[i] = 0;
    bottomFrequency[i] = 0;
    topBottomSameCount[i] = 0;
  }

  for (let idx = 0; idx < A.length; idx++) {
    let elA = A[idx];
    let elB = B[idx];

    topFrequency[elA]++;
    bottomFrequency[elB]++;

    if (elA === elB) {
      topBottomSameCount[elA]++;
    }
  }

  console.log(topFrequency, '\n', bottomFrequency);
  let dominoCount = A.length;

  for (let val = 1; val <= 6; val++) {
    let currentDominoTotal = topFrequency[val] + bottomFrequency[val];

    console.log(val, currentDominoTotal);
    if (currentDominoTotal - topBottomSameCount[val] === dominoCount) {
      return (
        Math.min(topFrequency[val], bottomFrequency[val]) -
        topBottomSameCount[val]
      );
    }
  }

  return -1;
};

const A = [3, 5, 1, 2, 3];
const B = [3, 6, 3, 3, 4];

console.log(minDominoRotations(A, B));
