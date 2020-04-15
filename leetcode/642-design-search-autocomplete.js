// Notes
// Sentence ends with a #
// Hot degree: numer of times a user has typed the same sentence before
// Return top 3 hot sentences sorted by hot degree, and then by ASCII-code order (smallest first)
// if <3 hot sentences exist, return as many as you can
// if input is special character, then sentence ends, return an empty list

// constructor, input is historical data, array of previous strings with times for each sentence.
// input function: next character in sentence, either a-z, space, or #. Sentence should be recorded in sentence
// output is top 3 hot sentences with same prefix as previous sentence

// Constraints:
// number of completee sentences to be searched won't exceed 100
// length of each sentence won't exceed 100
// Use double quotes

// Approaches: what's a brute force solution?
// Store each sentence in an array with times as array
// when character entered, search each element in sentences for prefix, sort found sentences by times, and return top 3
// when new sentence added, add sentence to array
// Time complexity: O(n log n), since we sort sentences by number of times
// Improve time complexity of search? Storing elements in object would be slightly faster, but still O(n * c operation)
// Could we store sentences as a graph, where each vertex is a character? Advantages of this approach: then do a breadth-first search
// TC of BFS is O(n * c). This approach doesn't seem like a good fit, because then we need to traverse the rest of the graph for each sentence, and get the times.
// Bottleneck for brute force approach is the sort. Could we keep the sentences pre-sorted by number of times and ascii character? Then we could simply search each sentence for prefix, and return in order
// So the creation of the list would be O(n log n), to sort the list. Then, when we insert a new sentence, we can use a binary search to find right place, which is O(log n) operation.
// One way to speed up time complexity: store every substring of every sentence in a hash pointing to full sentence. Then the lookup time would be O(1). Tradeoff time for space complexity. O(n * c^2). This would be 1 Gb in memory max, which seems reasonable.
// Generating substring would take O(n * c^c) which is exponential time, very slow. Tradeoff to consider
/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function (sentences, times) {
  const sentencesArray = sentences.map((sentence, index) => {
    return [sentence, times[index]];
  });
  this.sortedSentences = sentencesArray.sort(this.sortSentences);
  this.currentSentence = '';
};

/**
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function (c) {
  if (c === '#') {
    this.addSentence(this.currentSentence);
    this.currentSentence = '';
    return [];
  } else {
    this.currentSentence = `${this.currentSentence}${c}`;
  }

  const matchingSentences = this.findMatchingSentences();
  
  if (matchingSentences.length === 0) {
    return [];
  }

  const sortedMatchingSentences = sortSentencesByAsciiCode(matchingSentences);

  let topThreeSentences = [];

  while (topThreeSentences.length < 3 && sortedMatchingSentences.length > 0) {
    topThreeSentences = sortedMatchingSentences.shift();
  }

  return topThreeSentences;
};

AutocompleteSystem.prototype.findMatchingSentences = function () {
  return this.sortedSentences.reduce((sentence, matchedSentences) => {
    if (sentence.startsWith(this.currentSentence)) {
      matchedSentences.push(sentence);
    }

    return matchedSentences;
  }, []);
}

AutocompleteSystem.prototype.sortSentencesByAsciiCode = (matchingSentences) {
  

}

/**
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */

AutocompleteSystem.prototype.sortSentences = (a, b) => {
  const aTimes = a[1];
  const bTimes = b[1];

  if (aTimes > bTimes) {
    return -1;
  } else {
    return 1;
  }
};
