// tests generated automatically using `jsdoctest -s` https://www.npmjs.com/package/jsdoctest
require('should');
const regex = require('../10_lookaround');

describe('9_lookaround', function() {
  describe('extractUSDValues()', function() {
    it('extractUSDValues(\'USD 34.75\\nGBP 1.20\\nBRL 15.91\\nJPY 68.93\\nUSD 22.03\\nUSD 50\\nBRL 120.33\\nINR 879.21\')',
      function() {
        (regex.extractUSDValues(
          'USD 34.75\nGBP 1.20\nBRL 15.91\nJPY 68.93\nUSD 22.03\nUSD 50\nBRL 120.33\nINR 879.21'
          )).should.eql(['34.75', '22.03', '50']);
      });
  });
  describe('findCapsWithinSentence()', function() {
    it('const passage = `It was a quarter past six when we left Baker Street, and it still wanted ten minutes to the hour when we found ourselves in Serpentine Avenue. It was already dusk, and the lamps were just being lighted as we paced up and down in front of Briony Lodge, waiting for the coming of its occupant. The house was just such as I had pictured it from Sherlock Holmes\' succinct description, but the locality appeared to be less private than I expected. On the contrary, for a small street in a quiet neighbourhood, it was remarkably animated.\n\nExcerpt From: Arthur Conan Doyle. "The Adventures of Sherlock Holmes." Apple Books.`;  findCapsWithinSentence(passage)',
      function() {
        const passage = `It was a quarter past six when we left Baker Street, and it still wanted ten minutes to the hour when we found ourselves in Serpentine Avenue. It was already dusk, and the lamps were just being lighted as we paced up and down in front of Briony Lodge, waiting for the coming of its occupant. The house was just such as I had pictured it from Sherlock Holmes' succinct description, but the locality appeared to be less private than I expected. On the contrary, for a small street in a quiet neighbourhood, it was remarkably animated.

Excerpt From: Arthur Conan Doyle. "The Adventures of Sherlock Holmes." Apple Books.`;
        (regex.findCapsWithinSentence(passage)).should.eql(['Baker',
          'Street', 'Serpentine', 'Avenue', 'Briony', 'Lodge',
          'I', 'Sherlock', 'Holmes', 'I', 'From', 'Arthur',
          'Conan', 'Doyle', 'The', 'Adventures', 'Sherlock',
          'Holmes', 'Apple', 'Books'
        ]);
      });
  });
  describe('findLogDates()', function() {
    it('const log = `sep 24 00:00:00 something happened;. sep 24 13:29:33 something else happened;. sep 24 28:42:07 yet another thing happened;. sep 25 00:00:00 something happened;. sep 25 09:08:56 you gotta see this;. sep 26 06:37:40 alert! alert!;. sep 26 10:22:49 this needs your attention;. sep 27 00:00:00 something happened;. sep 27 18:29:12 maybe you should look into this;. `;  findLogDates(log)',
      function() {
        const log = `sep 24 00:00:00 something happened
sep 24 13:29:33 something else happened
sep 24 28:42:07 yet another thing happened
sep 25 00:00:00 something happened
sep 25 09:08:56 you gotta see this
sep 26 06:37:40 alert! alert!
sep 26 10:22:49 this needs your attention
sep 27 00:00:00 something happened
sep 27 18:29:12 maybe you should look into this
`;
        (regex.findLogDates(log)).should.eql(['sep 24', 'sep 25',
          'sep 27']);
      });
  });
  describe('findAllWordsNotAtEndOfLine()', function() {
    it('findAllWordsNotAtEndOfLine(sillyLimerick)', function () {
    const sillyLimerick = `There was a young fellow of Crete
Who was so exceedingly neat.
When he got out of bed,
He stood on his head
To make sure of not soiling his feet.`;
        (regex.findAllWordsNotAtEndOfLine(sillyLimerick)).should.eql([
          'There', 'was', 'a', 'young', 'fellow', 'of', 'Who',
          'was', 'so', 'exceedingly', 'When', 'he', 'got', 'out',
          'of', 'He', 'stood', 'on', 'his', 'To', 'make', 'sure',
          'of', 'not', 'soiling', 'his'
        ]);
      });
  });
});
