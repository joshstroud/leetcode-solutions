// Simplify the problem: just do justification for one line.

// Algorithm for justification
// Build array of words in line until "packed" (next word would overflow)
// Calculate number of spaces comparing word length and max width
// Split number of spaces amongst each gap between words, keeping in mind excess spaces start on the left
// Build sentence
// Build next sentence

// Algorithm for left justification:
// Build words with spaces in between, and then pad with spaces until max width

// Performance: ~O(n*l), where n is number of words and l is average length of characters of a word. Some off-ness because we are justifying, but a good approximation that this is linear.

// Example: ['This','is' ,'a' ,'test'], maxWidth = 4
// Output expected: ['This',
//                   'is a',
//                   'test']

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let remainingWords = words.slice();

  let justifiedSentences = [];
  while (remainingWords.length > 0) {
    const [wordsInSentence, isLeftJustified] = packSentence(
      remainingWords,
      maxWidth
    );
    justifiedSentences.push(
      buildSentence(wordsInSentence, maxWidth, isLeftJustified)
    );
  }

  return justifiedSentences;
};

const packSentence = (remainingWords, maxWidth) => {
  const sentenceWords = [];
  let wordCount = 0;

  while (
    remainingWords.length > 0 &&
    remainingWords[0].length + wordCount < maxWidth
  ) {
    const word = remainingWords.unshift();
    wordCount += word.length;
    sentenceWords.push(word);
  }

  if (remainingWords.length === 0) {
    return [sentenceWords, true];
  }

  return [sentenceWords, false];
};

const buildSentence = (wordsInSentence, maxWidth, leftJustified) => {
  if (leftJustified) {
    return leftJustify(wordsInSentence, maxWidth);
  } else {
    return centerJustify(wordsInSentence, maxWidth);
  }
};

const centerJustify = (wordsInSentence, maxWidth) => {
  const numSpaces = calculateNumberOfSpaces(wordsInSentence, maxWidth);

  const sentence = padWords(wordsInSentence, numSpaces);
  return sentence;
};

const calculateNumberOfSpaces = (wordsInSentence, maxWidth) => {
  const charCount = wordsInSentence.reduce(
    (word, total) => word.length + total,
    0
  );
  return maxWidth - charCount;
};

const padWords = (wordsInSentence, numSpaces) => {
  let spacesPerWord = Math.floor(numSpaces / (wordsInSentence.length - 1));
  let wordsWithExtraSpaces = numSpaces - spacesPerWord * wordsInSentence;
  const sentence = wordsInSentence.reduce((word, sentence, idx) => {
    sentence += word;

    if (idx < wordsInSentence.length - 1) {
      let numSpaces = spacesPerWord;
      if (wordsWithExtraSpaces > 0) {
        numSpaces++;
        wordsWithExtraSpaces--;
      }

      sentence += ' '.repeat(numSpaces);
    }
  }, '');

  return sentence;
};

const leftJustified = (wordsInSentence, maxWidth) => {
  const sentence = wordsInSentence.reduce((word, sentence) => {
    sentence += ` ${word}`;
  }, '');

  sentence += ' '.repeat(maxWidth - wordsInSentence.length);

  return sentence;
};

const words1 = ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'];
console.log(fullJustify(words1, 16));
