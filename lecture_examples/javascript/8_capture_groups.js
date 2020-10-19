// LECTURE EXAMPLE 34: Extract filename for certain image files
/**
 * @function extractFilenameForCertainImageFiles
 * Return the filename for files that end with png, jpg, jpeg, or pdf.
 * 
 * @param {string} string Input string to match against regex
 * 
 * @example
 *   extractFilenameForCertainImageFiles('cuteKittens.pdf')
 *   // => 'cuteKittens'
 *
 *   extractFilenameForCertainImageFiles('adorablePuppies.jpg')
 *   // => 'adorablePuppies'
 *
 *   extractFilenameForCertainImageFiles('lots-of-toasters.png')
 *   // => 'lots-of-toasters'
 *
 *   extractFilenameForCertainImageFiles('greedyVsLazy.py')
 *   // => null
 * 
 * @returns {string} String representing filename
 */
const extractFilenameForCertainImageFiles = function(string) {
  const filenameRegex = /(.+)\.(png|jpe?g|pdf)/;
  const match = filenameRegex.exec(string);
  return match ? match[1] : null;  // match[1] represents the first capture group
}

// LECTURE EXAMPLE 35: Extract filename with non-capturing group for extension
/**
 * @function extractFilenameForCertainImageFiles
 * Return the filename for files that end with png, jpg, jpeg, or pdf.
 *    The result is the same as the previous function
 *    (extractFilenameForCertainImageFiles), but the mechanism is different
 *    since we don't capture the group we're not interested in
 * 
 * @param {string} string Input string to match against regex
 * 
 * @example
 *   extractFilenameForCertainImageFilesNoncatpureExtension('cuteKittens.pdf')
 *   // => 'cuteKittens'
 *
 *   extractFilenameForCertainImageFilesNoncatpureExtension('adorablePuppies.jpg')
 *   // => 'adorablePuppies'
 *
 *   extractFilenameForCertainImageFilesNoncatpureExtension('lots-of-toasters.png')
 *   // => 'lots-of-toasters'
 *
 *   extractFilenameForCertainImageFilesNoncatpureExtension('greedyVsLazy.py')
 *   // => null
 * 
 * @returns {string} String representing filename
 */
const extractFilenameForCertainImageFilesNoncatpureExtension = function(string) {
  const filenameRegex = /(.+)\.(?:png|jpe?g|pdf)/;
  const match = filenameRegex.exec(string);
  return match ? match[1] : null;  // match[0] represents the entire capture string
}

// LECTURE EXAMPLE 36: matching HTML tags
/**
 * @function findAllOuterHtmlElements
 * Find all outer HTML elements.
 *    If there are nested elements, the outermost element will be returned.
 *    If there are no HTML elements, return an empty array.
 * 
 * @param {string} string Input string to match against regex
 * 
 * @example
 *   findAllOuterHtmlElements('<span>Regular expressions are the <b>best</b></span>')
 *   // => ['<span>Regular expressions are the <b>best</b></span>']
 *
 *   findAllOuterHtmlElements("<span>I'm a span!</span><span>I'm another span!</span>")
 *   // => ["<span>I'm a span!</span>", "<span>I'm another span!</span>"]
 * 
 * @returns {array} Array of strings representing matches
 */
const findAllOuterHtmlElements = function(string) {
  const outerHtmlRegex = /<(.+?)>.*?<\/\1>/g;
  return string.match(outerHtmlRegex);
}

// LECTURE EXAMPLE 37: extract named groups for root filename and extension
/**
 * @function findRootnameAndExtensionForCertainImageFiles
 * Return a dictionary with keys 'rootname', 'extension' for that end with png, jpg, jpeg, or pdf.
 *
 *  Assuming the string is a single filename.
 *  If there's no match, return null.
 *
 * @param {string} filename
 *
 * @example
 *   findRootnameAndExtensionForCertainImageFiles('cute_kittens.pdf')
 *   // => {'rootname': 'cute_kittens', 'extension': 'pdf'}
 *
 *   findRootnameAndExtensionForCertainImageFiles('adorable_puppies.jpg')
 *   // => {'rootname': 'adorable_puppies', 'extension': 'jpg'}
 *
 *   findRootnameAndExtensionForCertainImageFiles('lots-of-toasters.png')
 *   // => {'rootname': 'lots-of-toasters', 'extension': 'png'}
 *
 *   findRootnameAndExtensionForCertainImageFiles('greedy_vs_lazy.py')
 *   // => null
 * 
 * @returns {object} Object with properties 'rootname' and 'extension'
 */
const findRootnameAndExtensionForCertainImageFiles = function(filename) {
  const rootNameExtensionNamedGroupRegex = /(?<rootname>.+)\.(?<extension>png|jpe?g|pdf)/;
  const match = rootNameExtensionNamedGroupRegex.exec(filename);
  return match ? match.groups : null;
}

module.exports = {
  extractFilenameForCertainImageFiles,
  extractFilenameForCertainImageFilesNoncatpureExtension,
  findAllOuterHtmlElements,
  findRootnameAndExtensionForCertainImageFiles,
}