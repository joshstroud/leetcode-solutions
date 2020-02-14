/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let trappedWaterTotal = 0;

  let startTrappedHeight = [];
  let localTrappedTotal = 0;

  for (let i = 0; i < height.length; i++) {
    const prevHeight = height[i - 1];
    const currentHeight = height[i];

    if (currentHeight < prevHeight && !startTrappedHeight) {
      startTrappedHeight.push(prevHeight);
    }

    // console.log(startTrappedHeight, currentHeight);

    console.log('Start trapped height: ' + startTrappedHeight);
    if (startTrappedHeight) {
      if (currentHeight < startTrappedHeight) {
        localTrappedTotal += startTrappedHeight - currentHeight;
      } else {
        console.log('local total summed to total: ' + localTrappedTotal);
        trappedWaterTotal += localTrappedTotal;
        localTrappedTotal = 0;
        startTrappedHeight = null;
      }
    }
  }

  return trappedWaterTotal;
};

const h = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

console.log(`Total trapped water: ${trap(h)}`);
