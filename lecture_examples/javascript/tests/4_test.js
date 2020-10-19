// tests generated automatically using `jsdoctest -s` https://www.npmjs.com/package/jsdoctest
require('should');
const regex = require('../4_character_classes');

describe('4_character_classes', function() {
  describe('matchLeadingWhitespace()', function() {
    it('matchLeadingWhitespace(\'\\t leading whitespace\')',
  function() {
      (regex.matchLeadingWhitespace('\t leading whitespace')).should.eql(
        true);
    });
    it('matchLeadingWhitespace(\' leading whitespace\')', function() {
      (regex.matchLeadingWhitespace(' leading whitespace')).should.eql(
        true);
    });
    it('matchLeadingWhitespace(\'no leading whitespace\')', function() {
      (regex.matchLeadingWhitespace('no leading whitespace')).should.eql(
        false);
    });
    it('matchLeadingWhitespace(\'trailing whitespace\\t\')',
  function() {
      (regex.matchLeadingWhitespace('trailing whitespace\t')).should.eql(
        false);
    });
  });
  describe('matchNoLeadingWhitespace()', function() {
    it('matchNoLeadingWhitespace(\'\\t leading whitespace\')',
    function() {
      (regex.matchNoLeadingWhitespace('\t leading whitespace')).should
        .eql(false);
    });
    it('matchNoLeadingWhitespace(\' leading whitespace\')', function() {
      (regex.matchNoLeadingWhitespace(' leading whitespace')).should.eql(
        false);
    });
    it('matchNoLeadingWhitespace(\'no leading whitespace\')',
  function() {
      (regex.matchNoLeadingWhitespace('no leading whitespace')).should
        .eql(true);
    });
    it('matchNoLeadingWhitespace(\'trailing whitespace\\t\')',
    function() {
      (regex.matchNoLeadingWhitespace('trailing whitespace\t')).should
        .eql(true);
    });
  });
  describe('matchStemWithWordBoundaries()', function() {
    it('matchStemWithWordBoundaries(\'That rose has a lovely stem!\')',
      function() {
        (regex.matchStemWithWordBoundaries('That rose has a lovely stem!'))
        .should.eql(true);
      });
    it('matchStemWithWordBoundaries(\'stem\')', function() {
      (regex.matchStemWithWordBoundaries('stem')).should.eql(true);
    });
    it('matchStemWithWordBoundaries(\'What is your favorite operating system?\')',
      function() {
        (regex.matchStemWithWordBoundaries(
          'What is your favorite operating system?')).should.eql(
          false);
      });
    it('matchStemWithWordBoundaries(\'Your regex brilliance stems from all of your hard work.\')',
      function() {
        (regex.matchStemWithWordBoundaries(
            'Your regex brilliance stems from all of your hard work.'
            )).should.eql(false);
      });
  });
  describe('matchWordStartNondigitEnd()', function() {
    it('matchWordStartNondigitEnd(\'7_\')', function() {
      (regex.matchWordStartNondigitEnd('7_')).should.eql(true);
    });
    it('matchWordStartNondigitEnd(\'Who *are* you?\')', function() {
      (regex.matchWordStartNondigitEnd('Who *are* you?')).should.eql(
      true);
    });
    it('matchWordStartNondigitEnd(\' 1234!\')', function() {
      (regex.matchWordStartNondigitEnd(' 1234!')).should.eql(false);
    });
    it('matchWordStartNondigitEnd(\'Pennsylvania 6-5000\')',
  function() {
      (regex.matchWordStartNondigitEnd('Pennsylvania 6-5000')).should.eql(
        false);
    });
    it('matchWordStartNondigitEnd(\'q\')', function() {
      (regex.matchWordStartNondigitEnd('q')).should.eql(false);
    });
  });
});
