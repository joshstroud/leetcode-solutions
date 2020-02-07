/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  if (logs.length === 0) {
    return [];
  }

  let digitLogs, letterLogs;

  [digitLogs, letterLogs] = findLogs(logs);
  letterLogs = letterLogs.sort(sortLetterLogs);

  return letterLogs.concat(digitLogs);
};

const findLogs = logs => {
  let digitLogs = [];
  let letterLogs = [];

  let digitRegex = /[\w\d]+ \d+/;

  logs.forEach(log => {
    if (digitRegex.test(log)) {
      digitLogs.push(log);
    } else {
      letterLogs.push(log);
    }
  });

  return [digitLogs, letterLogs];
};

const sortLetterLogs = (a, b) => {
  let wordRegex = /\w+/g;

  const aWords = a.match(wordRegex);
  const bWords = b.match(wordRegex);

  const aIdentifier = aWords.shift();
  const bIdentifier = bWords.shift();

  const aLetters = aWords.join('');
  const bLetters = bWords.join('');

  if (aLetters === bLetters) {
    return aIdentifier > bIdentifier;
  }

  return aLetters > bLetters;
};

// const logs = [
//   'dig1 8 1 5 1',
//   'let1 art can',
//   'dig2 3 6',
//   'let2 own kit dig',
//   'let3 art zero'
// ];
// console.log(reorderLogFiles(logs));

// check that a and b are right

// input - alphanumeric identifier with letter-log and digit-log
// output - letter-logs in alphabetical order, followed by digit logs in original order
// identifier is used in tie for sorting
// can have zero logs, each str is 3 to 100 characters
// small number of logs, so ok to use n log n

// brute force approach:
// 1) seperate letter logs and digit logs using regular expressions O(n * k), where n is number of elements, k is number of characters in string
// 2) sort letter logs for alphabetical order using custom sort function, O(n log n) where n is number of letter elements
// 3) merge letter logs and digit logs and return O(n)
// TC: O(nlog(n*k))
// Can we optimize sorting algorithm, so we don't have to search for each character signature? Can't since alphabetical order requires k ops

// Look for bottle necks, unnecessary work, duplicated work
// What's best conceivable runtime? O(n), checking each element and moving once.

// Bottleneck: sorting. Can we sort as we go in constant time? Sort is always going to be O(nlogn). Maybe not.
// We can do sorting as we go, to save iterating through the array? Maybe, but more complex

// We don't need to search whole array for signature, just first two words (save time), but doesn't decrease time complexity from O(n * k)
