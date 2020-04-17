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

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this;

  for (let index = 0; index < prefix.length; index++) {
    const char = prefix[index];

    let child = node.children[char];

    if (child === undefined) {
      return false;
    }

    if (index === prefix.length - 1) {
      return true;
    }

    node = child;
  }

  return false;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// word = 'abcd';
// var obj = new Trie();
// obj.insert(word);
// obj.insert('abcfgh');
// console.log(JSON.stringify(obj));
// console.log(obj.search(word));
// console.log(obj.startsWith('abd'));
