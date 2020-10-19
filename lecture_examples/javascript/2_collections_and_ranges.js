// LECTURE EXAMPLE 9: hex numbers
/**
 * @function isHexNumber
 * Return true if the string is a hex number.
 * Letter digits must be capitalized.
 * 
 * @param {string} string Input string for regex
 * 
 * @example
 *   isHexNumber('1F')
 *   // => true
 *
 *   isHexNumber('C70')
 *   // => true
 *
 *   isHexNumber('3NA')
 *   // => false
 *
 *   isHexNumber('')
 *   // => false
 * 
 * @returns {boolean} true if input string matches; false otherwise
 */
const isHexNumber = function(string) {
  // adding ^ and $ for string boundaries even though they haven't been
  // covered yet, so results turn out as expected
  const hexNumberRegex = /^[0-9A-F]+$/;
  return hexNumberRegex.test(string);
}

// LECTURE EXAMPLE 10: match sentence
/**
 * @function isSentence
 * Return true if the string represents a sentence.
 * 
 * @param {string} string Input string for regex
 * 
 * @example
 *   isSentence("Do you want to get coffee with me?")
 *   // => true
 *
 *   isSentence("I love kittens!")
 *   // => true
 *
 *  // note, this is two sentences, so the way we have the function set up
 *  // this will return false. How would you update the function to make
 *  // this return true?
 *   isSentence("This is the best Udemy course ever. Why are you laughing?")
 *   // => false
 *
 *   isSentence("'sup?")
 *   // => false
 *
 *   isSentence("Kittens are")
 *   // => false
 * 
 * @returns {boolean} true if input string matches; false otherwise
 */
const isSentence = function(string) {
  const sentenceRegex = /^[A-Z][^\.!?]*[\.!?]$/;
  return sentenceRegex.test(string);
}

module.exports = {
  isHexNumber,
  isSentence,
}