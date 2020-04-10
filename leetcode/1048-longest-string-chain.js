/**
 * @param {string[]} words
 * @return {number}
 */

// Approaches:
// Brute force: try every potential combination of word chains and check if a word chain. 
// Time complexity: For each word, check N - 1 words, and check if predecessor (2 * m characters), total is TC: O((n*m)^2), where n is number of words and m is number of characters

// Brainstorm: 
// Create a graph of predecessors between words, and then find longest path in the graph. Downside: we need to compute predecessors between every word
// Seems complex. Performance: 
// Store all words in hash, and try to build a reversing word chain from longest in array. For each word, build a chain by removing one character at each place, and lookup in hash. Greedy algorithm. 
// Performance: Still O(m!)

// Seems key to find a performant way to find if two words are a predecessor. Then we can loop through.
// a, ba, we could build a regular expression. Searches the word, so O(j + k), where j and k are lengths of words. 
//

// Could we use a dynamic programming approach? Store words and the max word chain in hash. Only compare words with one length longer. 
// {
//   bdca: 1,
//   bda: 2,
//   bca: 2,
//   ba: 
// }


// ex: [a, b, ab, abc, abg]
var longestStrChain = function (words) {
  const wordChainCounts = {};

  const wordsSortedByLength = {};

  let maxWordChain = 0;

  words.forEach(word => {
    if (wordsSortedByLength[word.length]) {
      wordsSortedByLength[word.length].push(word); 
    } else {
      wordsSortedByLength[word.length] = [word];
    }
  })

  // {

  }

  words.forEach(word => {
    wordChainCounts[word] = 1;
  })

  const wordLengths = Object.keys(wordsSortedByLength);
  wordLengths.forEach(length => {
    const word = wordsSortedByLength[length];

    if (length > 1) {
      wordsSortedByLength[length - 1].forEach(prevWord => {
        if (isPredecessor(prevWord, word)) {
          wordChainCounts[word] = wordChainCounts[prevWord] + 1;
          maxWordChain = Math.max(maxWordChain, wordChainCounts[word]);
        }
      })
    }
  })

  return maxWordChain;
};

const ex1 = ["a","b","ba","bca","bda","bdca"];
