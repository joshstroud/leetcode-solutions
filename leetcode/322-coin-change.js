/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const sortedCoins = coins.sort().reverse();
  let currentCoin = sortedCoins[0];
  let currentCoinIndex = 0;
  let currentAmount = 0;
  let seenCoins = [];

  while (currentCoin) {
    if (currentAmount + currentCoin > amount) {
      currentCoinIndex += 1;
      currentCoin = sortedCoins[currentCoinIndex];

      console.log(seenCoins);
      if (!currentCoin) {
        const lastSeenCoin = seenCoins.pop();

        if (lastSeenCoin) {
          currentAmount -= lastSeenCoin;
          currentCoinIndex = sortedCoins.indexOf(lastSeenCoin) + 1;
          currentCoin = sortedCoins[currentCoinIndex];
        }
      }
    } else {
      currentAmount += currentCoin;
      seenCoins.push(currentCoin);
    }

    if (currentAmount === amount) {
      console.log(currentAmount);
      return seenCoins.length;
    }
  }

  return -1;
};

// Approaches:
// Brute force: greedy approach
// Just choose the highest coin, until it doesn't fit, and then go to next one. Backtrack if a coin doesn't work.
// If we backtrack all the way back, then return -1

// We could model all possible solutions as a tree. We want to find shortest tree to satisfy constraints.
// Time complexity for generating tree increases exponentially by k, where k is number of coins
// Once we've generated a tree, we could do a breadth-first search to find shortest traversal of tree.

let coins = [2, 5];
let amount = 11;

console.log(`Result: ${coinChange(coins, amount)}`);
