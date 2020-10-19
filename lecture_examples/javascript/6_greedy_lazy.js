// LECTURE EXAMPLE 24: "zero or more" greedy example
/**
 * @function matchGreStarGreedy
 * Match the string `gr` followed by as many e's as possible.
 * 
 * @param {string} string Input string to match against
 * 
 * @example
 *   matchGreStarGreedy('greeeeeeeeeeedy')
 *   // => 'greeeeeeeeeee'
 *
 *   matchGreStarGreedy('ogre')
 *   // => 'gre'
 *
 *   matchGreStarGreedy('grand piano')
 *   // => 'gr'
 *
 *   matchGreStarGreedy('potato')
 *   // => null
 * 
 * @returns {string} Substring that matches regex
 */
const matchGreStarGreedy = function(string) {
  const greedyRegex = /gre*/;
  const match = greedyRegex.exec(string);
  return match ? match[0] : null;
}


// LECTURE EXAMPLE 25: "zero or more" lazy example
/**
 * @function matchLaStarLazy
 * Match the string `la` followed by as few a's as possible.
 * 
 * @param {string} string Input string to match against
 * 
 * @example
 *   matchLaStarLazy('laaaaaaaaaaaaazy')
 *   // => 'l'
 *
 *   matchLaStarLazy('loop')
 *   // => 'l'
 *
 *   matchLaStarLazy('potato')
 *   // => null
 * 
 * @returns {string} Substring that matches regex
 */
const matchLaStarLazy = function(string) {
  const laLazyRegex = /la*?/;
  const match = laLazyRegex.exec(string);
  return match ? match[0] : null;
}

// LECTURE EXAMPLE 26: "one or more" lazy example
/**
 * @function matchLaPlusLazy
 * Match the string `l` followed by one or more `a`s, as few as possible.
 * 
 * @param {string} string Input string to match against
 * 
 * @example
 *   matchLaPlusLazy('laaaaaaaaaaaaazy')
 *   // => 'la'
 *
 *   matchLaPlusLazy('loop')
 *   // => null
 *
 *   matchLaPlusLazy('potato')
 *   // => null
 * 
 * @returns {string} Substring that matches regex
 */
const matchLaPlusLazy = function(string) {
  const laPlusLazyRegex = /la+?/;
  const match = laPlusLazyRegex.exec(string);
  return match ? match[0] : null;
}

// LECTURE EXAMPLE 28: Match sentence, lazy matching
/**
 * @function isSentenceLazy
 * Return true if the string represents a sentence.
 * 
 *  A sentence in this case means
 *   starting with a capital letter, and ending with a
 *   period, exclamation point, or question mark.
 * 
 * @param {string} string Input string to match against
 * 
 * @example
 *   isSentenceLazy("Do you want to get coffee with me?")
 *   // => true
 *
 *   isSentenceLazy("I love kittens!")
 *   // => true
 *
 *   // note, this is two sentences, so why does it work here when it didn't in
 *   // LECTURE EXAMPLE 10 (2_collections_and_range.js)?
 *   // Slight difference: lazy .*? CAN match a . ? ! if that's the only way to make
 *   // the regex work.
 *   isSentenceLazy("This is the best Udemy course ever. Why are you laughing?")
 *   // => true
 *
 *   isSentenceLazy("'sup?")
 *   // => false
 *
 *   isSentenceLazy("Kittens are")
 *   // => false
 * 
 * @returns {boolean} true if the string is a sentence by the definition above, false otherwise
 */
const isSentenceLazy = function(string) {
  const sentenceRegex = /^[A-Z].*?[\.!?]$/;
  return sentenceRegex.test(string);
}

// LECTURE EXAMPLE 28: Start with `Hello`, end with `bye`, lazy matching
// multi-line, global, case insensitive, and single-line ("dotall") flags
const exampleString = `Hello. Goodbye!
Hello, how are you doing today? Hope you’re having a good one. Goodbye!
Hello! It’s been great talking to you. Bye!
Hello, so good to see you. Seeya later!
Goodbye!`
/**
 * @function findHelloStartByeEndMultilineGlobalCaseInsensitiveSingleLineLazy
 * Return all strings that start with Hello and end with bye.
 * 
 * @param {string} string Input string to match against
 * 
 * @example
 *   findHelloStartByeEndMultilineGlobalCaseInsensitiveSingleLineLazy(exampleString)
 *   // => ['Hello. Goodbye!', 'Hello, how are you doing today? Hope you’re having a good one. Goodbye!', 'Hello! It’s been great talking to you. Bye!', 'Hello, so good to see you. Seeya later!\nGoodbye!']
 * 
 * @returns {array} Array of substrings that match the regex
 */
const findHelloStartByeEndMultilineGlobalCaseInsensitiveSingleLineLazy = function(string) {
  const helloByeRegex = /^Hello.*?bye!$/gmis;
  return string.match(helloByeRegex);
}

module.exports = {
  matchGreStarGreedy,
  matchLaStarLazy,
  matchLaPlusLazy,
  isSentenceLazy,
  findHelloStartByeEndMultilineGlobalCaseInsensitiveSingleLineLazy,
}
