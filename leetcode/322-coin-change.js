/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function(coins, amount) {
//   const sortedCoins = coins.sort().reverse();
//   let currentCoin = sortedCoins[0];
//   let currentCoinIndex = 0;
//   let currentAmount = 0;
//   let seenCoins = [];

//   while (currentCoin) {
//     if (currentAmount + currentCoin > amount) {
//       currentCoinIndex += 1;
//       currentCoin = sortedCoins[currentCoinIndex];

//       console.log(seenCoins);
//       if (!currentCoin) {
//         const lastSeenCoin = seenCoins.pop();

//         if (lastSeenCoin) {
//           currentAmount -= lastSeenCoin;
//           currentCoinIndex = sortedCoins.indexOf(lastSeenCoin) + 1;
//           currentCoin = sortedCoins[currentCoinIndex];
//         }
//       }
//     } else {
//       currentAmount += currentCoin;
//       seenCoins.push(currentCoin);
//     }

//     if (currentAmount === amount) {
//       console.log(currentAmount);
//       return seenCoins.length;
//     }
//   }

//   return -1;
// };

// New approach:
// Brute force: calculate every possible solution, until we hit the right one. Time complexity is exponential: O(amount ^ k), since we need to backtrack
// Notice: we are accessing number of coins for previous amounts many times, so we can
// use a dynamic programming approach here.
// Iterative dynamic programming: calculate minimum number of coins to reach each amount from 1 to amount, memoizing as we go.
// Time complexity: O(amount * k), where k is number of coins, since we need to calculate number of coins for each amount once.

const coinChange = (coins, amount) => {
  const previousAmounts = new Array(amount + 1);
  previousAmounts.fill(amount + 1, 0, amount + 1);
  previousAmounts[0] = 0;

  console.log(previousAmounts);
  for (let currentAmount = 1; currentAmount < amount; currentAmount++) {
    coins.forEach(currentCoin => {
      if (currentCoin <= currentAmount) {
        previousAmounts[currentAmount] = Math.min(
          previousAmounts[currentAmount],
          previousAmounts[currentAmount - currentCoin] + 1
        );
      }
    });
  }

  console.log(previousAmounts);
  return previousAmounts[amount] > amount ? -1 : previousAmounts[amount];
};

// Approaches:
// Brute force: greedy approach
// Just choose the highest coin, until it doesn't fit, and then go to next one. Backtrack if a coin doesn't work.
// If we backtrack all the way back, then return -1

// We could model all possible solutions as a tree. We want to find shortest tree to satisfy constraints.
// Time complexity for generating tree increases exponentially by k, where k is number of coins
// Once we've generated a tree, we could do a breadth-first search to find shortest traversal of tree.

let coins = [2, 5];
let amount = 14;

console.log(`Result: ${coinChange(coins, amount)}`);
