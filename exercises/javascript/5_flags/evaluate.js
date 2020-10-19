import {
  heHeyRegex,
  eepRegex,
  toEepRegex,
  firstARegex,
  andBookendsRegex,
  seStartRegex,
} from '.';

const frostPoem =
  'The woods are lovely, dark, and deep,\nBut I have promises to keep,\nAnd miles to go before I sleep,\nAnd miles to go before I sleep.';

describe('EvaluateHeHey', function () {
  it('matches hey', function () {
    const match = heHeyRegex.exec('hey');
    expect(match[0]).toBe('hey');
  });
  it('extracts `he` from she', function () {
    const match = heHeyRegex.exec('SHE');
    expect(match[0]).toBe('HE');
  });
  it('extracts `heY` from theY', function () {
    const match = heHeyRegex.exec('theY LOVE Regex!');
    expect(match[0]).toBe('heY');
  });
  it('does not match empty string', function () {
    const match = heHeyRegex.exec('');
    expect(match).toBe(null);
  });
  it('does not match string without `he`', function () {
    const match = heHeyRegex.exec('eyeglasses');
    expect(match).toBe(null);
  });
});

describe('EvaluateFrostPoem', function () {
  it('finds eep_period_line_end', function () {
    const matches = frostPoem.match(eepRegex);
    expect(matches).toEqual(['And miles to go before I sleep.']);
  });
  it('finds phrase from `to` to `eep` on single line', function () {
    const match = toEepRegex.exec(frostPoem);
    expect(match[0]).toBe('to keep');
  });
  it('finds first word starting with `a`', function () {
    const match = firstARegex.exec(frostPoem);
    expect(match[0]).toBe('are');
  });
  it('finds phrase starting and ending with `and`', function () {
    const match = andBookendsRegex.exec(frostPoem);
    expect(match[0]).toEqual(
      'and deep,\nBut I have promises to keep,\nAnd miles to go before I sleep,\nAnd'
    );
  });
});
describe('EvaluateSeStart', function () {
  it('finds `se` words in tongue twister', function () {
    const input = 'She sells seashells by the seashore';
    const matches = input.match(seStartRegex);
    expect(matches).toEqual(['sells', 'seashells', 'seashore']);
  });
  it('does not find any matches in `Noses smell`', function () {
    const match = seStartRegex.exec('Noses smell.');
    expect(match).toBe(null);
  });
  it('matches capitalized words (starting with `Se`', function () {
    let match;
    const matches = [];
    while (
      (match = seStartRegex.exec('Sean, see if you can search for Selena.'))
    ) {
      matches.push(match[0]);
    }
    expect(matches).toEqual(['Sean', 'see', 'search', 'Selena']);
  });
});
