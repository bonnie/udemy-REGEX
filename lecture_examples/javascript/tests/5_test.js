// tests generated automatically using `jsdoctest -s` https://www.npmjs.com/package/jsdoctest
require('should');
const regex = require('../5_flags');

const exampleString = `Hello. Goodbye!
Hello, how are you doing today? Hope you’re having a good one. Goodbye!
Hello! It’s been great talking to you. Bye!
Hello, so good to see you. Seeya later!
Goodbye!`


describe('5_flags', function() {
  describe('findHelloStartByeEnd()', function() {
    it('findHelloStartByeEnd(exampleString)', function() {
      // mocha 'should' does not have capability to test for null
      // https://stackoverflow.com/questions/18102152/should-js-cannot-read-property-should-of-null
      if (regex.findHelloStartByeEnd(exampleString) !== null) {
        throw('not equal to null');
      }
    });
  });
  describe('findHelloStartByeEndMultiline()', function() {
    it('findHelloStartByeEndMultiline(exampleString)', function() {
      (regex.findHelloStartByeEndMultiline(exampleString)).should.eql(
        'Hello. Goodbye!');
    });
  });
  describe('findHelloStartByeEndMultilineGlobal()', function() {
    it('findHelloStartByeEndMultilineGlobal(exampleString)',
  function() {
      (regex.findHelloStartByeEndMultilineGlobal(exampleString)).should
        .eql(['Hello. Goodbye!',
          'Hello, how are you doing today? Hope you’re having a good one. Goodbye!'
        ]);
    });
  });
  describe('findHelloStartByeEndMultilineGlobalCaseInsensitive()',
  function() {
    it('findHelloStartByeEndMultilineGlobalCaseInsensitive(exampleString)',
      function() {
        (regex.findHelloStartByeEndMultilineGlobalCaseInsensitive(
          exampleString)).should.eql(['Hello. Goodbye!',
          'Hello, how are you doing today? Hope you’re having a good one. Goodbye!',
          'Hello! It’s been great talking to you. Bye!'
        ]);
      });
  });
  describe('findHelloStartByeEndMultilineGlobalCaseInsensitiveSingleLine()',
    function() {
      it('findHelloStartByeEndMultilineGlobalCaseInsensitiveSingleLine(exampleString)',
        function() {
          (regex.findHelloStartByeEndMultilineGlobalCaseInsensitiveSingleLine(
            exampleString)).should.eql([
            'Hello. Goodbye!\nHello, how are you doing today? Hope you’re having a good one. Goodbye!\nHello! It’s been great talking to you. Bye!\nHello, so good to see you. Seeya later!\nGoodbye!'
          ]);
        });
    });
});
