// LECTURE EXAMPLE 37: replace cute animal with 'cutie'
/**
 * @function replaceCuteAnimalWithCutie
 * Replace any instance of one of the below cute animals with 'cutie'.
 *  kitten
 *  puppy
 *  piglet
 *  foal
 *  fawn
 *  duckling
 *  chick
 * 
 * @param {string} string Input string for replacement.
 * 
 * @example
 *   const string = 'I brought home a kitten and a puppy yesterday. Then I went to the petting zoo and saw a piglet, a foal and a chick.'
 *   replaceCuteAnimalWithCutie(string)
 *   // => 'I brought home a cutie and a cutie yesterday. Then I went to the petting zoo and saw a cutie, a cutie and a cutie.'
 *
 *   replaceCuteAnimalWithCutie("I don't like any of those animals. They aren't cute to me.")
 *   // => "I don't like any of those animals. They aren't cute to me."
 * 
 * @returns {string} String with the regex replaced.
 */
const replaceCuteAnimalWithCutie = function(string) {
  const cuteAnimalRegex = /kitten|puppy|piglet|foal|fawn|duckling|chick/g;
  const replacement = 'cutie';
  return string.replace(cuteAnimalRegex, replacement);
}

// LECTURE EXAMPLE 38: Add "cute little" before each cute animal
/**
 * @function addCuteLittleBeforeAnimals
 * For any of the animal strings below, add "cute little" before it.
 *  kitten
 *  puppy
 *  piglet
 *  foal
 *  fawn
 *  duckling
 *  chick
 * 
 * @param {string} string Input string for replacement.
 * 
 * @example
 *   const string = 'I brought home a kitten and a puppy yesterday. Then I went to the petting zoo and saw a piglet, a foal and a chick.'
 *   addCuteLittleBeforeAnimals(string)
 *   // => 'I brought home a cute little kitten and a cute little puppy yesterday. Then I went to the petting zoo and saw a cute little piglet, a cute little foal and a cute little chick.'

 *   addCuteLittleBeforeAnimals("I don't like any of those animals. They aren't cute to me.")
 *   // => "I don't like any of those animals. They aren't cute to me."
 * 
 * @returns {string} String with the regex replaced.
 */
const addCuteLittleBeforeAnimals = function(string) {
  const cuteLittleBeforeAnimalsRegex = /(kitten|puppy|piglet|foal|fawn|duckling|chick)/g;
  const replacement = 'cute little $1';
  return string.replace(cuteLittleBeforeAnimalsRegex, replacement);
}


// LECTURE EXAMPLE 40: Remove *s and _s from string
/**
 * @function removeAsterisksAndUnderscores
 * Return the string with any asterisks (*) removed.
 * 
 * @param {string} string Input string for replacement.
 * 
 * @example
 *   removeAsterisksAndUnderscores('Now _this_ is a *workout* for your brain!')
 *   // => 'Now this is a workout for your brain!'
 *
 *   removeAsterisksAndUnderscores('No asterisks here.')
 *   // => 'No asterisks here.'
 * 
 * @returns {string} String with the regex replaced.
 */
const removeAsterisksAndUnderscores = function(string) {
  const removeAsterisksAndUnderscoresRegex = /\*_/g;
  const replacement = '';
  return string.replace(removeAsterisksAndUnderscoresRegex, replacement);
}

module.exports = {
  replaceCuteAnimalWithCutie,
  addCuteLittleBeforeAnimals,
  removeAsterisksAndUnderscores,
}