// LECTURE EXAMPLE 11: leading spaces
/**
 * @function findLeadingSpaces
 * Return the input string if it starts with one or more space characters.
 * 
 * @param {string} string Input string for regex.
 * 
 * @example
 *   findLeadingSpaces('  space in the middle')
 *   // => '  space in the middle'
 * 
 *   findLeadingSpaces('no leading space')
 *   // => null
 * 
 * @returns {string} input string if regex matches; otherwise null.
 */
const findLeadingSpaces = function(string) {
  const leadingSpaceRegex = /^ +.*/;
  const match = leadingSpaceRegex.exec(string);

  if (!match) return null

  // exec returns an array whose first element is the complete match
  return match[0];
}

// LECTURE EXAMPLE 12: Match full sentences
/**
 * @function matchFullSentence
 * Return true if string represents a sentence.
 * 
 * In this case, a sentence is defined by starting with a capital
 * letter, and ending with sentence punctuation: ! . ?
 * There should be no sentence punctuation in the middle.
 *
 * @param {string} string Input string for regex.
 * 
 * @example
 *   matchFullSentence('Do you want to get coffee with me?')
 *   // => true
 * 
 *   matchFullSentence('I love kittens!')
 *   // => true
 * 
 *   matchFullSentence('This is the best Udemy course ever. Why are you laughing?')
 *   // => false
 * 
 * @returns {boolean} true if regex matches input string; otherwise false
 */
const matchFullSentence = function(string) {
  const fullSentenceRegex = /^[A-Z][^\.!?]+[\.?!]$/;
  return fullSentenceRegex.test(string);
}

// LECTURE EXAMPLE 13: full sentence with multiple punctuation
/**
 * @function matchFullSentenceMultiplePuncutation
 * Return true if string represents a sentence.
 * 
 * In this case, a sentence is defined by starting with a capital
 * letter, and ending with one or more sentence punctuation character: ! . ?
 * There should be no sentence punctuation in the middle.
 * 
 * @param {string} string Input string for regex.
 * 
 * @example
 *   matchFullSentenceMultiplePuncutation('Do you want to get coffee with me?')
 *   // => true
 * 
 *   matchFullSentenceMultiplePuncutation('I love kittens!')
 *   // => true
 * 
 *   matchFullSentenceMultiplePuncutation('Who do you think you are?!?')
 *   // => true
 * 
 *   matchFullSentenceMultiplePuncutation('This is the best Udemy course ever. Why are you laughing?')
 *   // => false
 *
 * @returns {boolean} true if regex matches input string; otherwise false
 */
const matchFullSentenceMultiplePuncutation = function(string) {
  const fullSentenceWithMultiplePuncutationRegex = /^[A-Z][^\.!?]+[\.?!]+$/;
  return fullSentenceWithMultiplePuncutationRegex.test(string);
}

module.exports = {
  findLeadingSpaces,
  matchFullSentence,
  matchFullSentenceMultiplePuncutation,
}