// tests generated automatically using `jsdoctest -s` https://www.npmjs.com/package/jsdoctest
require('should');
const regex = require('../3_whitespace_and_boundaries');

describe('3_whitespace_and_boundaries', function() {
  describe('findLeadingSpaces()', function() {
    it('findLeadingSpaces(\'  space in the middle\')', function() {
      (regex.findLeadingSpaces('  space in the middle')).should.eql(
        '  space in the middle');
    });
    it('findLeadingSpaces(\'no leading space\')', function() {
      // mocha 'should' does not have capability to test for null
      // https://stackoverflow.com/questions/18102152/should-js-cannot-read-property-should-of-null
      if (regex.findLeadingSpaces('no leading space') !== null) {
        throw('not equal to null');
      }
    });
  });
  describe('matchFullSentence()', function() {
    it('matchFullSentence(\'Do you want to get coffee with me?\')',
      function() {
        (regex.matchFullSentence('Do you want to get coffee with me?'))
        .should.eql(true);
      });
    it('matchFullSentence(\'I love kittens!\')', function() {
      (regex.matchFullSentence('I love kittens!')).should.eql(true);
    });
    it('matchFullSentence(\'This is the best Udemy course ever. Why are you laughing?\')',
      function() {
        (regex.matchFullSentence(
          'This is the best Udemy course ever. Why are you laughing?'
          )).should.eql(false);
      });
  });
  describe('matchFullSentenceMultiplePuncutation()', function() {
    it('matchFullSentenceMultiplePuncutation(\'Do you want to get coffee with me?\')',
      function() {
        (regex.matchFullSentenceMultiplePuncutation(
          'Do you want to get coffee with me?')).should.eql(true);
      });
    it('matchFullSentenceMultiplePuncutation(\'I love kittens!\')',
      function() {
        (regex.matchFullSentenceMultiplePuncutation('I love kittens!'))
        .should.eql(true);
      });
    it('matchFullSentenceMultiplePuncutation(\'Who do you think you are?!?\')',
      function() {
        (regex.matchFullSentenceMultiplePuncutation(
          'Who do you think you are?!?')).should.eql(true);
      });
    it('matchFullSentenceMultiplePuncutation(\'This is the best Udemy course ever. Why are you laughing?\')',
      function() {
        (regex.matchFullSentenceMultiplePuncutation(
          'This is the best Udemy course ever. Why are you laughing?'
          )).should.eql(false);
      });
  });
});
