// Write your regular expressions within the // delimiters.
//     Example: /a+/
// Add flags after the last / in the regular expression.
//     Example: /a+/gm
// Group contents *within the regex* can be accessed with the syntax \groupnumber
//     for example, to reference the first group within the regex, use $1
// Group contents *within the replacement string* can be accessed with the syntax $groupnumber
//     for example, to reference the first group within the replacement, use $1

// Exercise 36: Replace all email addresses (using the
// simplified pattern description from exercises in
// character categories section) with the text
// `<<redacted>>` (no quotes)
//
// For reference, here's the description of the exercise for
// simplified email address:
// One or more word characters or . before the @, and at
// least one period after the @
//
// NOTE: In this exercise, the string may contain text other
// than the email address(es).
export const emailRegex = /\b[\w\.]+@[\w\.]+\.[\w]+\b/g;
export const emailReplacement = "<<redacted>>";

// Exercise 37: Strip html tags out of text
// For example, <b>bold statement</b> should become
// "bold statement" (no quotes).
// Note: strings may be multi-line
export const htmlTagRegex = /<.+?>/gm;
export const htmlTagReplacement = "";

// Exercise 38: Substitute any multiple whitespace
// characters (including newlines) with a single
// space character
export const multipleWhitespaceRegex = /\s{2,}/gs;
export const multipleWhitespaceReplacement = " ";

// Exercise 39: Strip off any whitespace characters
// from the beginning or end of a string, but let the
// whitespace in the middle stand.
// You may assume single-line strings
// Note: This one is tricky! How do you keep the "middle"
// part from gobbling up the outer space, and yet
// still respect spaces in the middle?
export const outerWhitespaceRegex = /^\s*(.*\S)\s*$/;
export const outerWhitespaceReplacement = "$1";

// Exercise 40: Switch a list of names (separated by newlines)
// from "first last" to "last, first".
//
// Assume only each line has only two words, each made up of word
// characters or `-` or `'` (without quotes)
//
// Example input:
// Indira Ghandi
// Morgan Freeman
// Justin Finch-Fletchley
// Flannery O'Connor
//
// Example output:
//
// Ghandi, Indira
// Freeman, Morgan
// Finch-Fletchley, Justin
// O'Connor, Flannery
export const nameSwitchRegex = /^(\w+) ([\w\-\']+)$/gm;
export const nameSwitchReplacement = "$2, $1";

// Exercise 41: Building on the last exercise: Put last name
// first even if there are more than two words in the name
// (you may assume last name is only the last word)
// For example,
//   Carlos Alberto Torres → Torres, Carlos Alberto
//   Harriet Beecher Stowe → Stowe, Harriet Beecher
export const multiNameSwitchRegex = /^([\w ]+) ([\w\-\']+)$/gm;
export const multiNameSwitchReplacement = "$2, $1";
