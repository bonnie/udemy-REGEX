// tests generated automatically using `jsdoctest -s` https://www.npmjs.com/package/jsdoctest
require('should');
const regex = require('../6_greedy_lazy');

describe('6_greedy_lazy', function() {
  describe('matchGreStarGreedy()', function() {
    it('matchGreStarGreedy(\'greeeeeeeeeeedy\')', function() {
      (regex.matchGreStarGreedy('greeeeeeeeeeedy')).should.eql(
        'greeeeeeeeeee');
    });
    it('matchGreStarGreedy(\'ogre\')', function() {
      (regex.matchGreStarGreedy('ogre')).should.eql('gre');
    });
    it('matchGreStarGreedy(\'grand piano\')', function() {
      (regex.matchGreStarGreedy('grand piano')).should.eql('gr');
    });
    it('matchGreStarGreedy(\'potato\')', function() {
      if ((regex.matchGreStarGreedy('potato')) !== null) {
        throw('result should be null');
      }
    });
  });
  describe('matchLaStarLazy()', function() {
    it('matchLaStarLazy(\'laaaaaaaaaaaaazy\')', function() {
      (regex.matchLaStarLazy('laaaaaaaaaaaaazy')).should.eql('l');
    });
    it('matchLaStarLazy(\'loop\')', function() {
      (regex.matchLaStarLazy('loop')).should.eql('l');
    });
    it('matchLaStarLazy(\'potato\')', function() {
      if ((regex.matchLaStarLazy('potato')) !== null) {
        throw('result should be null');
      }
    });
  });
  describe('matchLaPlusLazy()', function() {
    it('matchLaPlusLazy(\'laaaaaaaaaaaaazy\')', function() {
      (regex.matchLaPlusLazy('laaaaaaaaaaaaazy')).should.eql('la');
    });
    it('matchLaPlusLazy(\'loop\')', function() {
      if ((regex.matchLaPlusLazy('loop')) !== null) {
        throw('result should be null');
      }
    });
    it('matchLaPlusLazy(\'potato\')', function() {
      if ((regex.matchLaPlusLazy('potato')) !== null) {
        throw('result should be null');
      }
    });
  });
  describe('isSentenceLazy()', function() {
    it('isSentenceLazy("Do you want to get coffee with me?")',
    function() {
      (regex.isSentenceLazy("Do you want to get coffee with me?")).should
        .eql(true);
    });
    it('isSentenceLazy("I love kittens!")', function() {
      (regex.isSentenceLazy("I love kittens!")).should.eql(true);
    });
    it('isSentenceLazy("This is the best Udemy course ever. Why are you laughing?")',
      function() {
        (regex.isSentenceLazy(
          "This is the best Udemy course ever. Why are you laughing?"
          )).should.eql(true);
      });
    it('isSentenceLazy("\'sup?")', function() {
      (regex.isSentenceLazy("'sup?")).should.eql(false);
    });
    it('isSentenceLazy("Kittens are")', function() {
      (regex.isSentenceLazy("Kittens are")).should.eql(false);
    });
  });
  describe(
    'findHelloStartByeEndMultilineGlobalCaseInsensitiveSingleLineLazy()',
    function() {
      it('findHelloStartByeEndMultilineGlobalCaseInsensitiveSingleLineLazy(exampleString)',
        function() {
          const exampleString = `Hello. Goodbye!
Hello, how are you doing today? Hope you’re having a good one. Goodbye!
Hello! It’s been great talking to you. Bye!
Hello, so good to see you. Seeya later!
Goodbye!`;
          (regex.findHelloStartByeEndMultilineGlobalCaseInsensitiveSingleLineLazy(
            exampleString)).should.eql(['Hello. Goodbye!',
            'Hello, how are you doing today? Hope you’re having a good one. Goodbye!',
            'Hello! It’s been great talking to you. Bye!',
            'Hello, so good to see you. Seeya later!\nGoodbye!'
          ]);
        });
    });
});
