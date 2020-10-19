const exampleString = `Hello. Goodbye!
Hello, how are you doing today? Hope you’re having a good one. Goodbye!
Hello! It’s been great talking to you. Bye!
Hello, so good to see you. Seeya later!
Goodbye!`;

// LECTURE EXAMPLE 19: Start with `Hello`, end with `bye`
// no flags
/**
 * @function findHelloStartByeEnd
 * Return first string that starts with Hello and ends with bye.
 * Do not allow newline characters in between.
 *
 * @example
 *   findHelloStartByeEnd(exampleString)
 *   // => null
 *
 * @param {string} string Input string to match against regex
 *
 * @returns {string} First match to regex
 */
const findHelloStartByeEnd = function(string) {
  const helloStartByeEndRegex = /^Hello.*bye!$/;
  const match = helloStartByeEndRegex.exec(string);
  return match ? match[0] : null;
};

// LECTURE EXAMPLE 20: Start with `Hello`, end with `bye`
// multi-line flag
/**
 * @function findHelloStartByeEndMultiline
 * Return first string that starts with Hello and ends with bye.
 * Multi-line flag matches ^ to start of line and $ to end of line.
 *
 * @example
 *   findHelloStartByeEndMultiline(exampleString)
 *   // => 'Hello. Goodbye!'
 *
 * @param {string} string Input string to match against regex
 *
 * @returns {string} First match to regex
 */
const findHelloStartByeEndMultiline = function(string) {
  const helloStartByeEndMultilineRegex = /^Hello.*bye!$/m;
  const match = helloStartByeEndMultilineRegex.exec(string);
  return match ? match[0] : null;
};

// LECTURE EXAMPLE 21: Start with `Hello`, end with `bye`
// multi-line and global flags
/**
 * @function findHelloStartByeEndMultilineGlobal
 * Return all strings that starts with Hello and ends with bye.
 *
 * @example
 *   findHelloStartByeEndMultilineGlobal(exampleString)
 *   // => ['Hello. Goodbye!', 'Hello, how are you doing today? Hope you’re having a good one. Goodbye!']
 *
 *
 * @param {string} string Input string to match against regex
 *
 * @returns {array} array of matched strings
 */
const findHelloStartByeEndMultilineGlobal = function(string) {
  const helloStartByeEndMultilineGlobalRegex = /^Hello.*bye!$/gm;
  return string.match(helloStartByeEndMultilineGlobalRegex);
};

// LECTURE EXAMPLE 22: Start with `Hello`, end with `bye`
// multi-line, global, case insensitive, and single-line flags
/**
 * @function findHelloStartByeEndMultilineGlobalCaseInsensitive
 * Return all strings that starts with Hello and ends with bye.
 *
 * @example
 *   findHelloStartByeEndMultilineGlobalCaseInsensitive(exampleString)
 *   // => ['Hello. Goodbye!', 'Hello, how are you doing today? Hope you’re having a good one. Goodbye!', 'Hello! It’s been great talking to you. Bye!']
 *
 * @param {string} string Input string to match against regex
 *
 * @returns {array} array of matched strings
 */
const findHelloStartByeEndMultilineGlobalCaseInsensitive = function(string) {
  const helloStartByeEndMultilineGlobalCaseInsensitiveRegex = /^Hello.*bye!$/gim;
  return string.match(helloStartByeEndMultilineGlobalCaseInsensitiveRegex);
};

// LECTURE EXAMPLE 23: Start with `Hello`, end with `bye`
// multi-line, global, case insensitive, and single-line flags
/**
 * @function findHelloStartByeEnd
 * Return all strings that starts with Hello and ends with bye.
 *
 * @example
 *   findHelloStartByeEndMultilineGlobalCaseInsensitiveSingleLine(exampleString)
 *   // => ['Hello. Goodbye!\nHello, how are you doing today? Hope you’re having a good one. Goodbye!\nHello! It’s been great talking to you. Bye!\nHello, so good to see you. Seeya later!\nGoodbye!']
 *
 * @param {string} string Input string to match against regex
 *
 * @returns {array} array of matched strings
 */
const findHelloStartByeEndMultilineGlobalCaseInsensitiveSingleLine = function (
  string
) {
  const helloStartByeEndMultilineGlobalCaseInsensitiveSingleLineRegex = /^Hello.*bye!$/gims;
  let match;
  const matches = [];
  while (
    (match = helloStartByeEndMultilineGlobalCaseInsensitiveSingleLineRegex.exec(
      string
    ))
  )
    matches.push(match[0]);
  return matches;
};

module.exports = {
  findHelloStartByeEnd,
  findHelloStartByeEndMultiline,
  findHelloStartByeEndMultilineGlobal,
  findHelloStartByeEndMultilineGlobalCaseInsensitive,
  findHelloStartByeEndMultilineGlobalCaseInsensitiveSingleLine,
};
