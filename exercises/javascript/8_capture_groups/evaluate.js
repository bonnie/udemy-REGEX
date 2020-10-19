import { wordBookendRegex, viSwapRegex, extractLogPartsRegex } from '.';

describe('EvaluateWordBookendRegex', function () {
  it('matches time_string', function () {
    const match = wordBookendRegex.test('time time time');
    expect(match).toBe(true);
  });
  it('matches I_string', function () {
    const match = wordBookendRegex.test('I said no one is as lovely as I');
    expect(match).toBe(true);
  });
  it('does not match palindrome_string', function () {
    const match = wordBookendRegex.test("madam I'm Adam");
    expect(match).toBe(false);
  });
  it('does not match characters_not_words', function () {
    const match = wordBookendRegex.test("ow, I don't know");
    expect(match).toBe(false);
  });
  it('does not match empty_string', function () {
    const match = wordBookendRegex.test('');
    expect(match).toBe(false);
  });
});

const dirList =
  '.favorite_regexes.txt.swp\n.practice.py.swp\n.DS_Store\nfavorite_regexes.txt\npractice.py\nzippy.py';

describe('EvaluateViSwap', function () {
  it('finds swap files in file_list', function () {
    // the only way to get groups from multiple matches is to use RegExp.prototype.exec
    // (string.prototype.match will only return full matches, not groups)
    let match;
    const matches = [];
    while ((match = viSwapRegex.exec(dirList))) matches.push(match[1]); // match[0] is the complete match; match[1] is the group
    expect(matches).toEqual(['favorite_regexes.txt', 'practice.py']);
  });
  it('does not match empty_string', function () {
    const match = viSwapRegex.exec('');
    expect(match).toBe(null);
  });
  it('does not match no_swpfiles', function () {
    const match = viSwapRegex.exec('file1.txt\nfile2.txt');
    expect(match).toBe(null);
  });
});

describe('EvaluateExtractLogPartsRegex', function () {
  it('extracts the proper parts from the example', function () {
    const exampleLog =
      '03Sep2020 04:55:38 This is a message\n30Oct2020 23:44:01 This is another message';
    const matches = [...exampleLog.matchAll(extractLogPartsRegex)];
    const namedMatches = matches.map((match) => match.groups);
    expect(namedMatches).toEqual([
      {
        day: '03',
        month: 'Sep',
        year: '2020',
        time: '04:55:38',
        message: 'This is a message',
      },
      {
        day: '30',
        month: 'Oct',
        year: '2020',
        time: '23:44:01',
        message: 'This is another message',
      },
    ]);
  });
});
