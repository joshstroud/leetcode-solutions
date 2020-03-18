/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  let distanceTriples = points.map(pair => [...pair, calcDistance(...pair)]);
  let sortedDistanceTriples = distanceTriples.sort(tripleDistanceCompare);

  let kClosestPairs = sortedDistanceTriples
    .map(triple => [triple[0], triple[1]])
    .slice(0, K);

  return kClosestPairs;
};

const calcDistance = (x, y) => {
  return Math.sqrt(x ** 2 + y ** 2);
};

const tripleDistanceCompare = (a, b) => {
  const distA = a[2];
  const distB = b[2];

  if (distA > distB) {
    return 1;
  } else if (distA < distB) {
    return -1;
  } else {
    return 0;
  }
};

const points1 = [
  [1, 3],
  [-2, 2]
];
const K1 = 1;

// console.log(kClosest(points1, K1));

const points2 = [
  [3, 3],
  [5, -1],
  [-2, 4]
];
const K2 = 2;

console.log(kClosest(points2, K2));

// Approaches:
// Sort: calculate distance for each point, sort by least distance, and return k points from sorted list
// Time complexity: O(n log n), since sort takes n log n time. Space complexity of O(n), since we are sorting

// Look at constraints: Up to 10000 points, so sorting wouldn't take a hugely long time. Seems acceptable, but can we do better?

// Best concievable runtime: TC: O(n), since we need to compute distance for each point at least once. Can we do faster (without a sort)

// Implement this for now
