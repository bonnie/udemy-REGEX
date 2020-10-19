// tests generated automatically using `jsdoctest -s` https://www.npmjs.com/package/jsdoctest
require('should');
const regex = require('../1_characters_and_quantities');

describe('1_characters_and_quantities', function () {
  describe('findJavascriptFiles()', function () {
    it("findJavascriptFiles(['regular-expressions.js', 'RegularExpressionInput.jsx', 'I-heart-kittens.ts', 'RegularExpressionOutput.jsx', 'even-more-regular-expressions.ts', 'Regex-for-fun-and-profit.js'])", function () {
      regex
        .findJavascriptFiles([
          'regular-expressions.js',
          'RegularExpressionInput.jsx',
          'I-heart-kittens.ts',
          'RegularExpressionOutput.jsx',
          'even-more-regular-expressions.ts',
          'Regex-for-fun-and-profit.js',
        ])
        .should.eql([
          'regular-expressions.js',
          'RegularExpressionInput.jsx',
          'I-heart-kittens.ts',
          'RegularExpressionOutput.jsx',
          'even-more-regular-expressions.ts',
          'Regex-for-fun-and-profit.js',
        ]);
    });
  });
  describe('isHey()', function () {
    it("isHey('hey')", function () {
      regex.isHey('hey').should.eql(true);
    });
    it("isHey('heeeey')", function () {
      regex.isHey('heeeey').should.eql(false);
    });
    it("isHey('potato')", function () {
      regex.isHey('potato').should.eql(false);
    });
  });
  describe('isHeyWithOptionalEs()', function () {
    it("isHeyWithOptionalEs('hey')", function () {
      regex.isHeyWithOptionalEs('hey').should.eql(true);
    });
    it("isHeyWithOptionalEs('heeeey')", function () {
      regex.isHeyWithOptionalEs('heeeey').should.eql(true);
    });
    it("isHeyWithOptionalEs('heeeeeeeeeeeeeeeey')", function () {
      regex.isHeyWithOptionalEs('heeeeeeeeeeeeeeeey').should.eql(true);
    });
    it("isHeyWithOptionalEs('hy')", function () {
      regex.isHeyWithOptionalEs('hy').should.eql(false);
    });
  });
  describe('isKittenSWithBang()', function () {
    it("isKittenSWithBang('Kitten!')", function () {
      regex.isKittenSWithBang('Kitten!').should.eql(true);
    });
    it("isKittenSWithBang('Kittens!')", function () {
      regex.isKittenSWithBang('Kittens!').should.eql(true);
    });
    it("isKittenSWithBang('kitten!')", function () {
      regex.isKittenSWithBang('kitten!').should.eql(false);
    });
    it("isKittenSWithBang('Kittensssssssss!')", function () {
      regex.isKittenSWithBang('Kittensssssssss!').should.eql(false);
    });
  });
  describe('isKittensWithBangs()', function () {
    it("isKittensWithBangs('Kittens')", function () {
      regex.isKittensWithBangs('Kittens').should.eql(true);
    });
    it("isKittensWithBangs('Kittens!')", function () {
      regex.isKittensWithBangs('Kittens!').should.eql(true);
    });
    it("isKittensWithBangs('Kittens!!!!!!!!')", function () {
      regex.isKittensWithBangs('Kittens!!!!!!!!').should.eql(true);
    });
    it("isKittensWithBangs('kittens.')", function () {
      regex.isKittensWithBangs('kittens.').should.eql(false);
    });
  });
  describe('isMehKittens()', function () {
    it("isMehKittens('Kittens.')", function () {
      regex.isMehKittens('Kittens.').should.eql(true);
    });
    it("isMehKittens('Kittens..')", function () {
      regex.isMehKittens('Kittens..').should.eql(true);
    });
    it("isMehKittens('Kittens...')", function () {
      regex.isMehKittens('Kittens...').should.eql(true);
    });
    it("isMehKittens('Kittens...........................')", function () {
      regex.isMehKittens('Kittens...........................').should.eql(true);
    });
    it("isMehKittens('Kittens')", function () {
      regex.isMehKittens('Kittens').should.eql(false);
    });
    it("isMehKittens('Kittens!')", function () {
      regex.isMehKittens('Kittens!').should.eql(false);
    });
  });
  describe('isKittensWithOneToThreeDots()', function () {
    it("isKittensWithOneToThreeDots('Kittens.')", function () {
      regex.isKittensWithOneToThreeDots('Kittens.').should.eql(true);
    });
    it("isKittensWithOneToThreeDots('Kittens..')", function () {
      regex.isKittensWithOneToThreeDots('Kittens..').should.eql(true);
    });
    it("isKittensWithOneToThreeDots('Kittens...')", function () {
      regex.isKittensWithOneToThreeDots('Kittens...').should.eql(true);
    });
    it("isKittensWithOneToThreeDots('Kittens')", function () {
      regex.isKittensWithOneToThreeDots('Kittens').should.eql(false);
    });
    it("isKittensWithOneToThreeDots('Kittens.............')", function () {
      regex
        .isKittensWithOneToThreeDots('Kittens.............')
        .should.eql(false);
    });
  });
  describe('isKittensWithThreeDots()', function () {
    it("isKittensWithThreeDots('Kittens.')", function () {
      regex.isKittensWithThreeDots('Kittens.').should.eql(false);
    });
    it("isKittensWithThreeDots('Kittens...')", function () {
      regex.isKittensWithThreeDots('Kittens...').should.eql(true);
    });
    it("isKittensWithThreeDots('Kittens')", function () {
      regex.isKittensWithThreeDots('Kittens').should.eql(false);
    });
    it("isKittensWithThreeDots('Kittens.............')", function () {
      regex.isKittensWithThreeDots('Kittens.............').should.eql(false);
    });
  });
  describe('isKittensWithAtLeastThreeDots()', function () {
    it("isKittensWithAtLeastThreeDots('Kittens.')", function () {
      regex.isKittensWithAtLeastThreeDots('Kittens.').should.eql(false);
    });
    it("isKittensWithAtLeastThreeDots('Kittens...')", function () {
      regex.isKittensWithAtLeastThreeDots('Kittens...').should.eql(true);
    });
    it("isKittensWithAtLeastThreeDots('Kittens')", function () {
      regex.isKittensWithAtLeastThreeDots('Kittens').should.eql(false);
    });
    it("isKittensWithAtLeastThreeDots('Kittens.............')", function () {
      regex
        .isKittensWithAtLeastThreeDots('Kittens.............')
        .should.eql(true);
    });
  });
});
