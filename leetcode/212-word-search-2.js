// Approach
// Brute force: build every possible word: O(n * m^n), where n is width and m is height. Exponential. Put words in dictionary in a hash for quick lookup.

// Better approach: use a trie. Building trie of all combinations takes TC: O(n^2 * m^2) entries, SC: O(m^2 * n^2). Searching for each entry takes O(c) time, where c is average number of characters in word
// More efficient if we have a lot of words, only need to build tree once.

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const rootNode = new Trie();

  for (let rowIdx = 0; rowIdx < board.length; rowIdx++) {
    for (let colIdx = 0; colIdx < board[0].length; colIdx++) {
      buildTrie(board, rootNode, rowIdx, colIdx);
    }
  }

  let foundWords = [];
  console.log(JSON.stringify(rootNode));

  words.forEach((word) => {
    if (rootNode.search(word)) {
      foundWords.push(word);
    }
  });

  return foundWords;
};

const buildTrie = function (board, parentNode, rowIdx, colIdx) {
  if (
    rowIdx < 0 ||
    rowIdx >= board.length ||
    colIdx < 0 ||
    colIdx >= board[0].length
  ) {
    parentNode.endOfWord = true;
    return;
  }

  let char = board[rowIdx][colIdx];
  parentNode.children[char] = new Trie();

  console.log(parentNode);
  buildTrie(board, parentNode.children[char], rowIdx + 1, colIdx);
  buildTrie(board, parentNode.children[char], rowIdx - 1, colIdx);
  buildTrie(board, parentNode.children[char], rowIdx, colIdx + 1);
  buildTrie(board, parentNode.children[char], rowIdx, colIdx - 1);
};

/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.children = {};
  this.endOfWord = false;
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this;

  word.split('').forEach((char, index) => {
    let child = node.children[char];

    if (child === undefined) {
      child = new Trie();
      node.children[char] = child;
    }

    if (index === word.length - 1) {
      child.endOfWord = true;
    }

    node = child;
  });
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this;

  for (let index = 0; index < word.length; index++) {
    const char = word[index];

    let child = node.children[char];

    if (child === undefined) {
      return false;
    }

    if (index === word.length - 1 && child.endOfWord === true) {
      return true;
    }

    node = child;
  }

  return false;
};

const board = [
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v'],
];

const words = ['oath', 'pea', 'eat', 'rain'];
console.log(findWords(board, words));
