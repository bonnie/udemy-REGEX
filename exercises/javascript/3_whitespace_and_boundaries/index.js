// Write your regular expressions within the // delimiters. Example: /a+/

// Exercise 9: Match all strings with one or more space
// characters at the end, preparing to replace them
// with an empty string. Contents of the string before
// the spaces is not important
export const trailingSpaceRegex = / +$/;

// Exercise 10: Match strings that contain at least two tabs in a row
// anywhere in the string. Contents of the string are unimportant.
export const twoConsecutiveTabsRegex = /\t\t/;

// Exercise 11: Match strings that contain at least two tabs, not
// necessarily in a row, anywhere in the string.
// Contents of the string are unimportant.
export const twoTabsRegex = /\t.*\t/;

// Exercise 12: Match strings that start with at least
// three digits from 0 to 5 (inclusive).
// Contents of the string are unimportant.
export const startWithThreeDigitsRegex = /^[0-5]{3,}/;

// Exercise 13: Match entire strings that are six characters or
// longer and don't contain the letter `E` (capital or lowercase)
export const stringsWithoutERegex = /^[^Ee]{6,}$/;
