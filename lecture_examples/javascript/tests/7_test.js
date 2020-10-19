// tests generated automatically using `jsdoctest -s` https://www.npmjs.com/package/jsdoctest
require('should');
const regex = require('../7_multicharacter_string_tokens');

describe('7_groups', function () {
  describe('matchOneOrMoreKittens()', function () {
    it("matchOneOrMoreKittens('kittens')", function () {
      regex.matchOneOrMoreKittens('kittens').should.eql(['kittens']);
    });
    it("matchOneOrMoreKittens('I love kittens kittens kittens')", function () {
      regex
        .matchOneOrMoreKittens('I love kittens kittens kittens')
        .should.eql(['kittens', 'kittens', 'kittens']);
    });
    it("matchOneOrMoreKittens('puppies are the best!')", function () {
      if (regex.matchOneOrMoreKittens('puppies are the best!') !== null) {
        throw 'result should have been null';
      }
    });
  });
  describe('findWows()', function () {
    it("findWows('W0WWOWW0W')", function () {
      regex.findWows('W0WWOWW0W').should.eql(true);
    });
    it("findWows('WOWOWOW')", function () {
      regex.findWows('WOWOWOW').should.eql(false);
    });
  });
  describe('findCuteAnimal()', function () {
    it("findCuteAnimal('Can never have enough kittens!')", function () {
      regex
        .findCuteAnimal('Can never have enough kittens!')
        .should.eql('kittens');
    });
    it("findCuteAnimal('I love kittens and ducklings!')", function () {
      regex
        .findCuteAnimal('I love kittens and ducklings!')
        .should.eql('kittens');
    });
    it("findCuteAnimal('Those foals are so cute!')", function () {
      regex.findCuteAnimal('Those foals are so cute!').should.eql('foals');
    });
    it("findCuteAnimal('I just bought a toaster.')", function () {
      if (regex.findCuteAnimal('I just bought a toaster.') !== null) {
        throw 'result should have been null';
      }
    });
  });
  describe('findCuteAnimalLove()', function () {
    it("findCuteAnimalLove('Have you noticed how much I love kittens?')", function () {
      regex
        .findCuteAnimalLove('Have you noticed how much I love kittens?')
        .should.eql('I love kittens');
    });
    it("findCuteAnimalLove('I love ducklings!')", function () {
      regex
        .findCuteAnimalLove('I love ducklings!')
        .should.eql('I love ducklings');
    });
    it("findCuteAnimalLove('I hate all cute animals. I cannot believe Bonnie is using this example.')", function () {
      if (
        regex.findCuteAnimalLove(
          'I hate all cute animals. I cannot believe Bonnie is using this example.'
        ) !== null
      ) {
        throw 'result should have been null';
      }
    });
  });
  describe('match24HrClock()', function () {
    it("match24HrClock('5:43')", function () {
      regex.match24HrClock('5:43').should.eql(true);
    });
    it("match24HrClock('15:08')", function () {
      regex.match24HrClock('15:08').should.eql(true);
    });
    it("match24HrClock('23:12')", function () {
      regex.match24HrClock('23:12').should.eql(true);
    });
    it("match24HrClock('28:33')", function () {
      regex.match24HrClock('28:33').should.eql(false);
    });
    it("match24HrClock('12:89')", function () {
      regex.match24HrClock('12:89').should.eql(false);
    });
  });
});