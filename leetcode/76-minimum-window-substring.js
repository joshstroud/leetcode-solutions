// Approaches
// Brute force: check every combination of letters in S to include letters of T, TC: O(n^3), where n is number of letters in 

// What if we store all the places where each of the characters in T are in the string, and then find the smallest window from these occurences? Could use a hash or an array. TC: O(n), since T is constant.
// So for example: 
// {
  // A: 0, 10
  // B: 3, 9
  // C: 5, 12
// }
// How would we find the smallest window where we have one of each of the numbers? We could just create combinations of 1 of each bucket, and find smallest window by comparing. Could we do this better? Worst case n! so not good. 
// What about building the string for each of the windows, 
// How can we use that there's only one unique window minimum window? Just guarantees that there will be only one answer.

// What if we do a sliding window, adding and subtracting from the window as we encounter new characters in T? Searching T is constant time.
// so start our window when we encounter the first letter in S in T,
// [A], then keep building it until we encounter B. Track letters we encounter in hash with last index encountered
// [ADOB]
// [ADOBEC], width is six so we capture and track it
// Keep going, update B in hash when we encounter
// encounter A, update window with last indices hash so now CODEBA
// finally, encounter C, and use previous indices hash to build BANC, 
// return smallest window or empty string

// Time complexity: O(n), since searching hash T times is constant. Or complexity O(n * t)

// When we hit first char in T, store building minimum window. Store char in index hash
// Build windowed string as we encounter more chars in T, storing chars in index hash.
// When we encounter a later char in T, update window with new smallest window from indices, and keep building
// return smallest window or empty string

// This is an O(n^2) solution
// Need a signature for T. We can use a frequency hash, better way? 
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const tCharIndices = {};
  let minWindowStr = '';

  const tCharCount = {};
  t.split('').forEach(char => {
    if (tCharCount[char]) {
      tCharCount[char]++;
    } else {
      tCharCount[char] = 1;
    }
  })

  s.split('').forEach(char => {
    if (t.includes())
  })
};
