// tests generated automatically using `jsdoctest -s` https://www.npmjs.com/package/jsdoctest
require('should');
const regex = require('../9_substitution');

describe('8_substitution', function() {
  describe('regex.replaceCuteAnimalWithCutie()', function() {
    it('string = \'I brought home a kitten and a puppy yesterday. Then I went to the petting zoo and saw a piglet, a foal and a chick.\';  regex.replaceCuteAnimalWithCutie(string)',
      function() {
        const string =
          'I brought home a kitten and a puppy yesterday. Then I went to the petting zoo and saw a piglet, a foal and a chick.';
        (regex.replaceCuteAnimalWithCutie(string)).should.eql(
          'I brought home a cutie and a cutie yesterday. Then I went to the petting zoo and saw a cutie, a cutie and a cutie.'
          );
      });
    it('regex.replaceCuteAnimalWithCutie("I don\'t like any of those animals. They aren\'t cute to me.")',
      function() {
        (regex.replaceCuteAnimalWithCutie(
          "I don't like any of those animals. They aren't cute to me."
          )).should.eql(
          "I don't like any of those animals. They aren't cute to me."
          );
      });
  });
  describe('regex.addCuteLittleBeforeAnimals()', function() {
    it('string = \'I brought home a kitten and a puppy yesterday. Then I went to the petting zoo and saw a piglet, a foal and a chick.\';  regex.addCuteLittleBeforeAnimals(string)',
      function() {
        const string =
        'I brought home a kitten and a puppy yesterday. Then I went to the petting zoo and saw a piglet, a foal and a chick.';

        (regex.addCuteLittleBeforeAnimals(string)).should.eql(
          'I brought home a cute little kitten and a cute little puppy yesterday. Then I went to the petting zoo and saw a cute little piglet, a cute little foal and a cute little chick.'
          );
      });
    it('regex.addCuteLittleBeforeAnimals("I don\'t like any of those animals. They aren\'t cute to me.")',
      function() {
        (regex.addCuteLittleBeforeAnimals(
          "I don't like any of those animals. They aren't cute to me."
          )).should.eql(
          "I don't like any of those animals. They aren't cute to me."
          );
      });
  });
  describe('regex.removeAsterisks()', function() {
    it('regex.removeAsterisks(\'Now *this* is a workout for your brain!\')',
      function() {
        (regex.removeAsterisks('Now *this* is a workout for your brain!'))
        .should.eql('Now this is a workout for your brain!');
      });
    it('regex.removeAsterisks(\'No asterisks here.\')', function() {
      (regex.removeAsterisks('No asterisks here.')).should.eql(
        'No asterisks here.');
    });
  });
});
