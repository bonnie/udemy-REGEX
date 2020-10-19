// LECTURE EXAMPLE 0: js filenames
/**
 * @function findJavascriptFiles
 * Return all filenames with no whitespace, ending in js, jsx or ts
 *
 * @param {array} fileList Array of strings representing filenames
 *
 * @example
 *   findJavascriptFiles(['regular-expressions.js', 'RegularExpressionInput.jsx', 'I-heart-kittens.ts', 'RegularExpressionOutput.jsx', 'even-more-regular-expressions.ts', 'Regex-for-fun-and-profit.js']);
 *   // => ['regular-expressions.js', 'RegularExpressionInput.jsx', 'I-heart-kittens.ts', 'RegularExpressionOutput.jsx', 'even-more-regular-expressions.ts', 'Regex-for-fun-and-profit.js']
 *
 * @returns {array} Array of strings that match the pattern.
 */
const findJavascriptFiles = function (fileList) {
  const jsFileRegex = /^\S+\.(jsx?|ts)$/;
  return fileList.map(function (file) {
    const match = jsFileRegex.exec(file);
    return match[0]; // match[0] is the complete string that matched
  });
};

// LECTURE EXAMPLE 1: hey
/**
 * @function isHey
 * Return True if string is 'hey'
 *   Could easily be done with string matching -- doesn't need regex!
 *
 * @param {string} string Input string for regex
 *
 * @example
 *   isHey('hey')
 *   // => true
 *
 *   isHey('heeeey')
 *   // => false
 *
 *   isHey('potato')
 *   // => false
 *
 * @returns {boolean} true if string matches; false otherwise
 */
const isHey = function (string) {
  const heyRegex = /hey/;
  return heyRegex.test(string);
};


// LECTURE EXAMPLE 2: hey
/**
 * @function isHeyWithOptionalEs
 * Return true if string is "hey" with one or more e's; otherwise false.
 *
 * @param {string} string Input string for regex
 *
 * @example
 *   isHeyWithOptionalEs('hey')
 *   // => true
 *
 *   isHeyWithOptionalEs('heeeey')
 *   // => true
 *
 *   isHeyWithOptionalEs('heeeeeeeeeeeeeeeey')
 *   // => true
 *
 *   isHeyWithOptionalEs('hy')
 *   // => false
 *
 * @returns {boolean} true if string matches; false otherwise
 */
const isHeyWithOptionalEs = function (string) {
  const heyRegex = /he+y/;
  return heyRegex.test(string);
};

// LECTURE EXAMPLE 3: Kitten! or Kittens!
/**
 * @function isKittenSWithBang
 * Return true if string is Kitten! or Kittens! otherwise return false.
 *
 * @param {string} string Input string for regex
 *
 * @example
 *    isKittenSWithBang('Kitten!')
 *    // => true
 *
 *    isKittenSWithBang('Kittens!')
 *    // => true
 *
 *    isKittenSWithBang('kitten!')
 *    // => false
 *
 *    isKittenSWithBang('Kittensssssssss!')
 *    // => false
 *
 * @returns {boolean} true if string matches; false otherwise
 */
const isKittenSWithBang = function (string) {
  const kittenRegex = /Kittens?!/;
  return kittenRegex.test(string);
};

// LECTURE EXAMPLE 4: Kittens with any number of !
/**
 * @function isKittensWithBangs
 * Return true if string is Kitten followed by any !s (including zero)
 *
 * @param {string} string Input string for regex.
 *
 * @example
 *  isKittensWithBangs('Kittens')
 *  // => true
 *
 *  isKittensWithBangs('Kittens!')
 *  // => true
 *
 *  isKittensWithBangs('Kittens!!!!!!!!')
 *  // => true
 *
 *  isKittensWithBangs('kittens.')
 *  // => false
 *
 * @returns {boolean} true if string matches; false otherwise
 */
const isKittensWithBangs = function (string) {
  const kittenBangRegex = /Kittens!*/;
  return kittenBangRegex.test(string);
};

// LECTURE EXAMPLE 5: meh kittens
/**
 * @function isMehKittens
 * Return true if string contains kitten followed by 1 or more periods.
 *
 * @param {string} string Input string for regex.
 *
 * @example
 *  isMehKittens('Kittens.')
 *  // => true
 *
 *  isMehKittens('Kittens..')
 *  // => true
 *
 *  isMehKittens('Kittens...')
 *  // => true
 *
 *  isMehKittens('Kittens...........................')
 *  // => true
 *
 *  isMehKittens('Kittens')
 *  // => false
 *
 *  isMehKittens('Kittens!')
 *  // => false
 *
 * @returns {boolean} true if string matches; false otherwise
 */
const isMehKittens = function (string) {
  const mehKittensRegex = /Kittens\.+/;
  return mehKittensRegex.test(string);
};

// LECTURE EXAMPLE 6: Kittens with 1 to 3 periods after
/**
 * @function isKittensWithOneToThreeDots
 * Return true if the string is Kittens followed by one to three dots.
 *
 * @param {string} string Input string for regex.
 *
 * @example
 *  isKittensWithOneToThreeDots('Kittens.')
 *  // => true
 *
 *  isKittensWithOneToThreeDots('Kittens..')
 *  // => true
 *
 *  isKittensWithOneToThreeDots('Kittens...')
 *  // => true
 *
 *  isKittensWithOneToThreeDots('Kittens')
 *  // => false
 *
 *  isKittensWithOneToThreeDots('Kittens.............')
 *  // => false
 * @returns {boolean} true if string matches; false otherwise
 */
const isKittensWithOneToThreeDots = function (string) {
  // adding $ for string boundary even though it hasn't been
  // covered yet, so results turn out as expected
  const kittenOneToThreeDotsRegex = /Kittens\.{1,3}$/;
  return kittenOneToThreeDotsRegex.test(string);
};

// LECTURE EXAMPLE 7: Kittens with exactly 3 dots
/**
 * @function isKittensWithThreeDots
 * Return true if the string is Kittens followed by exactly three dots.
 *
 * @param {string} string Input string for regex.
 *
 * @example
 *  isKittensWithThreeDots('Kittens.')
 *  // => false
 *
 *  isKittensWithThreeDots('Kittens...')
 *  // => true
 *
 *  isKittensWithThreeDots('Kittens')
 *  // => false
 *
 *  isKittensWithThreeDots('Kittens.............')
 *  // => false
 *
 * @returns {boolean} true if string matches; false otherwise
 */
const isKittensWithThreeDots = function (string) {
  // adding $ for string boundary even though it hasn't been
  // covered yet, so results turn out as expected
  const kittensThreeDotsRegex = /Kittens\.{3}$/;
  return kittensThreeDotsRegex.test(string);
};

// LECTURE EXAMPLE 8: Kittens with at least 3 dots
/**
 * @function isKittensWithAtLeastThreeDots
 * Return true if the string is Kittens followed by at least three dots.
 *
 * @param {string} string Input string for regex.
 *
 * @example
 *  isKittensWithAtLeastThreeDots('Kittens.')
 *  // => false
 *
 *  isKittensWithAtLeastThreeDots('Kittens...')
 *  // => true
 *
 *  isKittensWithAtLeastThreeDots('Kittens')
 *  // => false
 *
 *  isKittensWithAtLeastThreeDots('Kittens.............')
 *  // => true
 *
 * @returns {boolean} true if string matches; false otherwise
 */
const isKittensWithAtLeastThreeDots = function (string) {
  const kittensAtLeastThreeDotsRegex = /Kittens\.{3,}/;
  return kittensAtLeastThreeDotsRegex.test(string);
};

module.exports = {
  findJavascriptFiles,
  isHey,
  isHeyWithOptionalEs,
  isKittenSWithBang,
  isKittensWithBangs,
  isMehKittens,
  isKittensWithOneToThreeDots,
  isKittensWithThreeDots,
  isKittensWithAtLeastThreeDots,
}