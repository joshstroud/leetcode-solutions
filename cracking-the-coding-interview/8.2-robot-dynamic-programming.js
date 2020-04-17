const findRobotPath = matrix => {};

const findNextCell = (matrix, currentCell, failedPoints, path) => {
  if (currentCell[0] === matrix.length && currentCell[1] === matrix[0].length) {
    path.push(currentCell);
    return true;
  } else if (matrix[currentCell[0]][currentCell[1]] === false) {
    failedPoints[currentCell] = false;
    return false;
  }
};
