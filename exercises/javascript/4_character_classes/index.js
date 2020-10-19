// Write your regular expressions within the // delimiters. Example: /a+/

// Exercise 14: Match two or more o’s, but only if they’re in the
// middle of a word.
// Do not include any characters other than the o’s in the match
export const middleOoRegex = /\Bo{2,}\B/;

// Exercise 15: Match list item strings that start with one or more digits
// followed by a ) .Example string to match:
// 1) make breakfast. 2) eat breakfast. 3) go to work.
// Match the entire contents of each list item string (not just the
// digit(s) and parenthesis).
export const listItemRegex = /^\d+\).*$/;

// Exercise 16: Match any whitespace at the end of a string
// Do not include characters other than the whitespace in the match
// Do not match strings that don’t have whitespace at the end
export const trailingWhitespaceRegex = /\s+$/;

// Exercise 17: Find any phrase that matches ____ the ____
// That is, one word before and after "the" (without quotes).
// Don't match any non-word characters before or after the matched
// string.
export const blankTheBlankRegex = /\w+ the \w+/;

// Exercise 18: Make a simplified email address matcher with these rules:
// - One or more word or period (.) characters before the @
// - At least one  period (.) after the @
// - The string should contain only the email address and no
//   surrounding characters
// 
// Interested in unsimplified? See http://emailregex.com/
export const emailRegex = /^[\w\.]+@[\w\.]+\.[\w]+$/;
