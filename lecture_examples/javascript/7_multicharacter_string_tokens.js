// LECTURE EXAMPLE 29: Multi-character string options without groups
/**
 * @function findCuteAnimal
 * Return the first instance of kittens, foals or ducklings in the string.
 * 
 * @param {string} string Input string to match against regex
 * 
 * @example
 *   findCuteAnimal('Can never have enough kittens!')
 *   // => 'kittens'
 *
 *   findCuteAnimal('I love kittens and ducklings!')
 *   // => 'kittens'
 *
 *   findCuteAnimal('Those foals are so cute!')
 *   // => 'foals'
 *
 *   findCuteAnimal('I just bought a toaster.')
 *   // => null
 * 
 * @returns {string} String representing the first match
 */
const findCuteAnimal = function(string) {
  const cuteAnimalRegex = /kittens|foals|ducklings/;
  const match = cuteAnimalRegex.exec(string);
  // match is an array; the first element is the entire matched string.
  return match ? match[0] : null;
}

// LECTURE EXAMPLE 30: Multi-character string options inside larger regex
/**
 * @function findCuteAnimalLove
 * Return string that professes love for a group of cute animals.
 * 
 * @param {string} string Input string to match against regex
 * 
 * @example
 *   findCuteAnimalLove('Have you noticed how much I love kittens?')
 *   // => 'I love kittens'
 *
 *   findCuteAnimalLove('I love ducklings!')
 *   // => 'I love ducklings'
 *
 *   findCuteAnimalLove('I hate all cute animals. I cannot believe Bonnie is using this example.')
 *   // => null
 * 
 * @returns {string} String representing the first match
 */
const findCuteAnimalLove = function(string) {
  const cuteAnimalLoveRegex = /I love (kitten|foal|duckling)s/;
  const match = cuteAnimalLoveRegex.exec(string);
  // match is an array; the first element is the entire matched string.
  return match ? match[0] : null;
}

// LECTURE EXAMPLE 31: Multiple 'kittens'
/**
 * @function matchOneOrMoreKittens
 * Return all substrings that contain the string 'kittens' one or more times.
 * 
 * @param {string} string Input string to match against regex
 * 
 * @example
 *   matchOneOrMoreKittens('kittens')
 *   // => ['kittens']
 *
 *   // Note, the regex doesn't allow any characters between kittens repeats
 *   // So this will pick up all the kittens individually
 *   matchOneOrMoreKittens('I love kittens kittens kittens')
 *   // => ['kittens', 'kittens', 'kittens']
 *
 *   matchOneOrMoreKittens('puppies are the best!')
 *   // => null
 * 
 * @returns {array} Array of strings representing matches
 */
const matchOneOrMoreKittens = function(string) {
  const oneOrMoreKittensRegex = /(kittens)+/g;
  return string.match(oneOrMoreKittensRegex);
}

// LECTURE EXAMPLE 32: Multiple Wows
/**
 * @function findWows
 * Find strings made up entirely of or more W0W or WOW strings.
 * 
 * @param {string} string Input string to match against regex
 * 
 * @example
 *   findWows('W0WWOWW0W')
 *   // => true
 *
 *   findWows('WOWOWOW')
 *   // => false
 * 
 * @returns {boolean} true if regex matches input string; otherwise false
 */
const findWows = function(string) {
  const wowRegex = /^(W[0O]W)+$/;
  return wowRegex.test(string);
}

// LECTURE EXAMPLE 33: 24 hr clock
/**
 * @function match24HrClock
 * Return true if string is a valid time on a 24 hour clock.
 * 
 * @param {string} string Input string to match against regex
 * 
 * @example
 *   match24HrClock('5:43')
 *   // => true
 *
 *   match24HrClock('15:08')
 *   // => true
 *
 *   match24HrClock('23:12')
 *   // => true
 *
 *   match24HrClock('28:33')
 *   // => false
 *
 *   match24HrClock('12:89')
 *   // => false
 * 
 * @returns {boolean} true if the string is a valid 24-hr clock time; otherwise false
 */
const match24HrClock = function(string) {
  const clockRegex = /^(1?\d|2[0-3]):[0-5]\d$/;
  return clockRegex.test(string);
}

module.exports = {
  matchOneOrMoreKittens,
  findWows,
  findCuteAnimal,
  findCuteAnimalLove,
  match24HrClock,
}