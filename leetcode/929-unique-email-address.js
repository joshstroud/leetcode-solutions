/**
 * @param {string[]} emails
 * @return {number}
 */

//

// approach: iterate through each email, clean up, and add to hash.
// Check each email against the hash, increment counter if not in hash

//  clean up (with regex):
//  remove periods in local name in email
//  remove everything after first plus sign

// note: periods in hostname are different
// edge cases: local and domain name non-empty, no plus sign as first character
// Time complexity: O(n) since linear to iterate through and O(1) lookup time in hash

var numUniqueEmails = function(emails) {
  const uniqueEmails = new Map();

  for (let i = 0; i < emails.length; i++) {
    const cleanEmail = cleanAnEmail(emails[i]);

    if (!uniqueEmails.get(cleanEmail)) {
      uniqueEmails.set(cleanEmail, true);
    }
  }

  return uniqueEmails.size;
};

const cleanAnEmail = function(email) {
  let [localName, hostName] = email.split('@');

  localName = localName.replace(/\./g, '');
  localNameBeforePlus = localName.split('+')[0];

  return localNameBeforePlus + hostName;
};

const testEmails = [
  'test.email+alex@leetcode.com',
  'test.e.mail+bob.cathy@leetcode.com',
  'testemail+david@lee.tcode.com'
];
console.log(`Number of valid emails: ${numUniqueEmails(testEmails)}`);
