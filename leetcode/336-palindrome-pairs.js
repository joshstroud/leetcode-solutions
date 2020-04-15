// Questions: constraints on number of words? Assume unlimited

// Approaches
// Brute force:
// Check all combinations of words for palindrome. TC: O(n^2 * c), where n is number of words and c is average number of characters in word

// How could we use a trie here?
// Build a trie of words combinations, with indices marked. If the word is a palindrome, mark indices.
// TC: O(n * c), SC: O(n^2 * c)

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  const rootTrieNode = new TrieNode();

  words.forEach((word, wordIndex) => {
    let node = rootTrieNode;
    word.split('').forEach((char, charIndex) => {
      child = node.children[char];

      if (child === undefined) {
        child = new TrieNode();
        node.children[char] = child;
      }

      if (charIndex === word.length - 1) {
        child.firstWordIndex = wordIndex;
        
      }

      node = child;
    });
  });

  return rootTrieNode;
};

const 

class TrieNode {
  constructor() {
    this.children = {};
    this.firstWordIndex = null;
    this.secondWordIndex = null;
  }

  print() {
    if (Object.keys(this.children).length === 0) {
      return;
    }

    const childrenArray = Object.keys(this.children);
    console.log(childrenArray);
    childrenArray.forEach((child) => this.children[child].print());
  }
}

const words1 = ['bat', 'tab', 'cat'];
const words2 = ['abcd', 'dcba', 'lls', 's', 'sssll'];
// console.log(JSON.stringify(palindromePairs(words2)));
console.log(palindromePairs(words2).print());
