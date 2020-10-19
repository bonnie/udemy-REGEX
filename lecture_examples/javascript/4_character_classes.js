// LECTURE EXAMPLE 14: leading whitespace
/**
 * @function matchLeadingWhitespace
 * Return true if the string has leading whitespace.
 * 
 * @param {string} string Input string for regex
 * 
 * @example
 *   matchLeadingWhitespace('\t leading whitespace')
 *   // => true
 *
 *   matchLeadingWhitespace(' leading whitespace')
 *   // => true
 *
 *   matchLeadingWhitespace('no leading whitespace')
 *   // => false
 *
 *   matchLeadingWhitespace('trailing whitespace\t')
 *   // => false
 * 
 * @returns {boolean} true if input matches regex, otherwise false
 */
const matchLeadingWhitespace = function(string) {
  const leadingWhitespaceRegex = /^\s+/;
  return leadingWhitespaceRegex.test(string);
}

// LECTURE EXAMPLE 15: no leading whitespace
/**
 * @function matchNoLeadingWhitespace
 * Return true if the string has no leading whitespace.
 * 
 * @param {string} string Input string for regex
 * 
 * @example
 *   matchNoLeadingWhitespace('\t leading whitespace')
 *   // => false
 *
 *   matchNoLeadingWhitespace(' leading whitespace')
 *   // => false
 *
 *   matchNoLeadingWhitespace('no leading whitespace')
 *   // => true
 *
 *   matchNoLeadingWhitespace('trailing whitespace\t')
 *   // => true
 * 
 * @returns {boolean} true if input matches regex, otherwise false
 */
const matchNoLeadingWhitespace = function(string) {
  const noLeadingWhitespaceRegex = /^\S+/;
  return noLeadingWhitespaceRegex.test(string);
}

// LECTURE EXAMPLE 16: 'stem' with word boundaries
/**
 * @function matchStemWithWordBoundaries
 * Return first matched part of the string that contains 'stem' as a word.
 * 
 * That is, 'stem' with word boundaries on either side.
 * Return null if there are no matches.
 * 
 * @param {string} string Input string for regex
 * 
 * @example
 *   matchStemWithWordBoundaries('That rose has a lovely stem!')
 *   // => 'stem'
 *
 *   matchStemWithWordBoundaries('stem')
 *   // => 'stem'
 *
 *   matchStemWithWordBoundaries('What is your favorite operating system?')
 *   // => null
 *
 *   matchStemWithWordBoundaries('Your regex brilliance stems from all of your hard work.')
 *   // => null
 *
 * @returns {boolean} true if input matches regex, otherwise false
 */
const matchStemWithWordBoundaries = function(string) {
  const stemWithWordBoundariesRegex = /\bstem\b/;
  return stemWithWordBoundariesRegex.test(string);
}

// LECTURE EXAMPLE 17: 'stem' with non-word characters
/**
 * @function matchStemFlankedByNonWordCharacters
 * Return first matched part of the string that contains 'stem' as a word.
 * 
 * That is, 'stem' with with non-word characters on either side.
 * Return null if there are no matches.
 * 
 * @param {string} string Input string for regex
 * 
 * @example
 *   matchStemFlankedByNonWordCharacters('That rose has a lovely stem!')
 *   // => ' stem!'
 *
 *   matchStemFlankedByNonWordCharacters('stem')
 *   // => null
 *
 *   matchStemFlankedByNonWordCharacters('What is your favorite operating system?')
 *   // => null
 *
 *   matchStemFlankedByNonWordCharacters('Your regex brilliance stems from all of your hard work.')
 *   // => null
 *
 * @returns {boolean} true if input matches regex, otherwise false
 */
const matchStemFlankedByNonWordCharacters = function(string) {
  const stemWithWordBoundariesRegex = /\Wstem\W/;
  return stemWithWordBoundariesRegex.test(string);
}

// LECTURE EXAMPLE 18: starts with word character, ends with non-digit
/**
 * @function matchWordStartNondigitEnd
 * Return true if string starts with a word character and ends with a non-digit.
 * 
 * @param {string} string Input string for regex
 * 
 * @example
 *   matchWordStartNondigitEnd('__')
 *   // => true
 *
 *   matchWordStartNondigitEnd('Who *are* you?')
 *   // => true
 *
 *   matchWordStartNondigitEnd(' 1234!')
 *   // => false
 *
 *   matchWordStartNondigitEnd('Pennsylvania 6-5000')
 *   // => false
 *
 *   matchWordStartNondigitEnd('q')
 *   // => false
 *
 * @returns {boolean} true if input matches regex, otherwise false
 */
const matchWordStartNondigitEnd = function(string) {
  const wordStartNondigitEndRegex = /^\w.*\D$/;
  return wordStartNondigitEndRegex.test(string);
}

module.exports = {
  matchLeadingWhitespace,
  matchNoLeadingWhitespace,
  matchStemWithWordBoundaries,
  matchStemFlankedByNonWordCharacters,
  matchWordStartNondigitEnd,
}