/**
 * @param {character[][]} matrix
 * @return {number}
 */
// Brute force: check every potential square on a grid. TC: m * n for each element, total of O(m^2 * n^2)
// Notice: we can see if we build a square from every 1 corner, by checking three components: horizontal, vertical, diagonal, in each direction.
// 1 1 1
// 1 1 1
// 1 1 1

// simpler: check in each direction, so if we start at top right, then check horizontal and vertical, and create a seen as we build a chain. At each next element, check horizontal and vertical in direction
// Another approach, for each 1, try to build a successively bigger square in each direction

// After viewing solution, use dynamic programming approach
// notice how we build a square: check top, diagonal left, and left squares. So for each bottom right square, we simply check the min of these three, and add one to them, and save to a matrix. Save max side length and square for area.
// so matrix we build with previous example:
// 1 1 1
// 1 2 2
// 1 2 3

// 0 1 1
// 0 1 1

var maximalSquare = function (matrix) {
  if (matrix.length === 1 && matrix[0].length === 1) {
    return matrix[0][0];
  }

  const squareLengths = new Array(matrix.length);

  for (let i = 0; i < squareLengths.length; i++) {
    squareLengths[i] = [];
  }

  squareLengths[0][0] = matrix[0][0];
  squareLengths[0][1] = matrix[0][1];
  squareLengths[1][0] = matrix[1][0];

  // squareLengths = 0 1 1
  //                 0

  let maxSideLength = 0;
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      if (matrix[row][col] === 1) {
        const left = squareLengths[row][col - 1] || 0; //       1 1
        const diagonal = squareLengths[row - 1][col - 1] || 0; //       0 1
        const top = squareLengths[row - 1][col] || 0; //       0 1
        const current = Math.min(left, top, diagonal) + 1; //       0 2

        squareLengths[row][col] = current;
        maxSideLength = Math.max(maxSideLength, current); //   1 2
      }
    }
  }

  // console.log(squareLengths);
  return maxSideLength ** 2; // 4
};

const ex1 = [
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0],
];

console.log(maximalSquare(ex1));
