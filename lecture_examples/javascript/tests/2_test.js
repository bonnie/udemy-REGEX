// tests generated automatically using `jsdoctest -s` https://www.npmjs.com/package/jsdoctest
require('should');
const regex = require('../2_collections_and_ranges');

describe('2_collections_and_ranges', function() {
  describe('isHexNumber()', function() {
    it('isHexNumber(\'1F\')', function() {
      (regex.isHexNumber('1F')).should.eql(true);
    });
    it('isHexNumber(\'C70\')', function() {
      (regex.isHexNumber('C70')).should.eql(true);
    });
    it('isHexNumber(\'3NA\')', function() {
      (regex.isHexNumber('3NA')).should.eql(false);
    });
    it('isHexNumber(\'\')', function() {
      (regex.isHexNumber('')).should.eql(false);
    });
  });
  describe('isSentence()', function() {
    it('isSentence("Do you want to get coffee with me?")', function() {
      (regex.isSentence("Do you want to get coffee with me?")).should.eql(
        true);
    });
    it('isSentence("I love kittens!")', function() {
      (regex.isSentence("I love kittens!")).should.eql(true);
    });
    it('isSentence("This is the best Udemy course ever. Why are you laughing?")',
      function() {
        (regex.isSentence(
          "This is the best Udemy course ever. Why are you laughing?"
          )).should.eql(false);
      });
    it('isSentence("\'sup?")', function() {
      (regex.isSentence("'sup?")).should.eql(false);
    });
    it('isSentence("Kittens are")', function() {
      (regex.isSentence("Kittens are")).should.eql(false);
    });
  });
});
