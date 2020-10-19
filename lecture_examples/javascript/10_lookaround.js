// LECTURE EXAMPLE 41: currency lookbehind
/**
 * @function extractUSDValues
 * Return a list of values in a multiline string that are preceded with USD .
 * 
 * @param {string} string Input string to match against regex.
 * 
 * @example
 *   extractUSDValues('USD 34.75\nGBP 1.20\nBRL 15.91\nJPY 68.93\nUSD 22.03\nUSD 50\nBRL 120.33\nINR 879.21')
 *    // => ['34.75', '22.03', '50']
 *
 * @returns {array} Array of strings that match regex.
 */
const extractUSDValues = function(string) {
  const usdValuesRegex = /(?<=USD )\d+(?:\.\d\d)?/g;
  return string.match(usdValuesRegex);
}

// LECTURE EXAMPLE 42: Find capitalized words that don't start a sentence
/**
 * @function findCapsWithinSentence
 * Return a list of all capitalized words that don't start a sentence.
 * 
 * @param {string} string Input string to match against regex.
 * 
 * @example
 *   const passage = `It was a quarter past six when we left Baker Street, and it still wanted ten minutes to the hour when we found ourselves in Serpentine Avenue. It was already dusk, and the lamps were just being lighted as we paced up and down in front of Briony Lodge, waiting for the coming of its occupant. The house was just such as I had pictured it from Sherlock Holmes' succinct description, but the locality appeared to be less private than I expected. On the contrary, for a small street in a quiet neighbourhood, it was remarkably animated.
 * . 
 * . Excerpt From: Arthur Conan Doyle. "The Adventures of Sherlock Holmes." Apple Books.`
 *   findCapsWithinSentence(passage)
 *   // => ['Baker', 'Street', 'Serpentine', 'Avenue', 'Briony', 'Lodge', 'I', 'Sherlock', 'Holmes', 'I', 'From', 'Arthur', 'Conan', 'Doyle', 'The', 'Adventures', 'Sherlock', 'Holmes', 'Apple', 'Books']
 * 
 * @returns {array} Array of strings that match regex.
 */
const findCapsWithinSentence = function(string) {
  const capsWithinSentenceRegex = /(?<!^)(?<![\.?!]\s)[A-Z]\w*\b/gm;
  return string.match(capsWithinSentenceRegex);
}

// LECTURE EXAMPLE 43: Find date for log lines with particular time and error

/**
 * @function findLogDates
 * Return all dates where the "something happened" error ocurred at midnight.
 * 
 * @param {string} string Input string to match against regex.
 * 
 * @example
 *   const log = `sep 24 00:00:00 something happened
 * . sep 24 13:29:33 something else happened
 * . sep 24 28:42:07 yet another thing happened
 * . sep 25 00:00:00 something happened
 * . sep 25 09:08:56 you gotta see this
 * . sep 26 06:37:40 alert! alert!
 * . sep 26 10:22:49 this needs your attention
 * . sep 27 00:00:00 something happened
 * . sep 27 18:29:12 maybe you should look into this
 * . `
 *   findLogDates(log)
 *   // => ['sep 24', 'sep 25', 'sep 27']
 *
 * @returns {array} Array of strings that match regex.
 */
const findLogDates = function(string) {
  const logDatesRegex = /^\w\w\w \d\d(?= 00:00:00 something happened$)/mg;
  return string.match(logDatesRegex);
}

// LECTURE EXAMPLE 44: find all words not at end of line
/**
 * @function findAllWordsNotAtEndOfLine
 * Return a all words in multi-line string not at the end of the line.
 * 
 * @param {string} string Input string to match against regex.
 * 
 * @example
 *   const sillyLimerick = `There was a young fellow of Crete
 *   . Who was so exceedingly neat.
 *   . When he got out of bed,
 *   . He stood on his head
 *   . To make sure of not soiling his feet.`;
 *   findAllWordsNotAtEndOfLine(sillyLimerick)
 *   // => ['There', 'was', 'a', 'young', 'fellow', 'of', 'Who', 'was', 'so', 'exceedingly', 'When', 'he', 'got', 'out', 'of', 'He', 'stood', 'on', 'his', 'To', 'make', 'sure', 'of', 'not', 'soiling', 'his']
 * 
 * @returns {array} Array of strings that match regex.
 */
const findAllWordsNotAtEndOfLine = function(string) {
  const wordsNotAtEndOfLineRegex = /\w+\b(?![?!\.;,\)]?$)/mg;
  return string.match(wordsNotAtEndOfLineRegex);
}

module.exports = {
  extractUSDValues,
  findCapsWithinSentence,
  findLogDates,
  findAllWordsNotAtEndOfLine,
}