/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// Naive approach:
// move to right, go down to bottom, move to left, move up until previous layer, go right, etc
// SC: O(n), this is best concievable runtime since we need to check each el once. SC: O(n), best to store array

// Specific algorithm:
// store bounds indices
// go through four directions, following and updating bounds as we go
// repeat if additional elements

// Better example: 4 x 4 matrix
// [[1, 2, 3, 4][(5, 6, 7, 8)], [9, 10, 11, 12], [13, 14, 15, 16]];

// [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]

var spiralOrder = function (matrix) {
  topBound = 0;
  bottomBound = matrix.length - 1;
  leftBound = 0;
  rightBound = matrix[0].length - 1;

  let spiral = [];

  while (!(leftBound > rightBound && topBound > bottomBound)) {
    for (let n = leftBound; n <= rightBound; n++) {
      spiral.push(matrix[topBound][n]);
    }
    topBound++;

    for (let m = topBound; m <= bottomBound; m++) {
      spiral.push(matrix[m][rightBound]);
    }
    rightBound--;

    for (let n = rightBound; n >= leftBound; n--) {
      spiral.push(matrix[bottomBound][n]);
    }
    bottomBound--;

    for (let m = bottomBound; m >= topBound; m--) {
      spiral.push(matrix[m][leftBound]);
    }

    leftBound++;
    console.log(leftBound, rightBound);
  }

  return spiral;
};

let matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log(spiralOrder(matrix2));
// console.log(spiralOrder(matrix1));
