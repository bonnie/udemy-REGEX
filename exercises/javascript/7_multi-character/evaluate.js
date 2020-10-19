import {
  puppyOrPuppiesRegex,
  playingCardRegex,
  hexStringRegex,
  errorFatalRegex,
} from '.';

describe('EvaluatePuppiesRegex', function () {
  it('matches puppy', function () {
    const match = puppyOrPuppiesRegex.test('puppy');
    expect(match).toBe(true);
  });
  it('matches puppies', function () {
    const match = puppyOrPuppiesRegex.test('puppies');
    expect(match).toBe(true);
  });
  it('does not match kittens', function () {
    const match = puppyOrPuppiesRegex.test('kittens');
    expect(match).toBe(false);
  });
  it('matches puppies_and_kittens', function () {
    const match = puppyOrPuppiesRegex.test('puppies and kittens');
    expect(match).toBe(true);
  });
});
describe('EvaluatePlayingCardRegex', function () {
  it('matches ten_of_clubs', function () {
    const match = playingCardRegex.test('10 of clubs');
    expect(match).toBe(true);
  });
  it('matches ace_of_hearts', function () {
    const match = playingCardRegex.test('A of hearts');
    expect(match).toBe(true);
  });
  it('matches three_of_spades', function () {
    const match = playingCardRegex.test('3 of spades');
    expect(match).toBe(true);
  });
  it('does not match eleven_of_diamonds', function () {
    const match = playingCardRegex.test('11 of diamonds');
    expect(match).toBe(false);
  });
  it('does not match 23_of_hearts', function () {
    const match = playingCardRegex.test('23 of hearts');
    expect(match).toBe(false);
  });
  it('does not match J_of_dots', function () {
    const match = playingCardRegex.test('J of dots');
    expect(match).toBe(false);
  });
  it('does not match two_cards', function () {
    const match = playingCardRegex.test('3 of hearts, Q of clubs');
    expect(match).toBe(false);
  });
});
describe('EvaluateHexStringRegex', function () {
  it('matches three_chars', function () {
    const match = hexStringRegex.test('#ab4');
    expect(match).toBe(true);
  });
  it('matches six_chars', function () {
    const match = hexStringRegex.test('#AB4B72');
    expect(match).toBe(true);
  });
  it('does not match four_chars', function () {
    const match = hexStringRegex.test('#ab43');
    expect(match).toBe(false);
  });
  it('does not match nine_chars', function () {
    const match = hexStringRegex.test('#aaaaaaaaa');
    expect(match).toBe(false);
  });
  it('does not match illegal_chars', function () {
    const match = hexStringRegex.test('#ahl');
    expect(match).toBe(false);
  });
});

const logFile =
  '2012-02-03 18:35:34 SampleClass6 [INFO] everything normal for id 577725851\n2012-02-03 18:35:34 SampleClass4 [FATAL] system problem at id 1991281254\n2012-02-03 18:35:34 SampleClass3 [DEBUG] detail for id 1304807656\n2012-02-03 18:35:34 SampleClass3 [WARN] missing id 423340895\n2012-02-03 18:35:34 SampleClass5 [TRACE] verbose detail for id 2082654978\n2012-02-03 18:35:34 SampleClass0 [ERROR] incorrect id  1886438513\n2012-02-03 18:35:34 SampleClass9 [TRACE] verbose detail for id 438634209\n2012-02-03 18:35:34 SampleClass8 [DEBUG] detail for id 2074121310';

describe('EvaluateErrorFatalRegex', function () {
  it('finds error and fatal lines', function () {
    const matches = logFile.match(errorFatalRegex);
    expect(matches).toEqual([
      '2012-02-03 18:35:34 SampleClass4 [FATAL] system problem at id 1991281254',
      '2012-02-03 18:35:34 SampleClass0 [ERROR] incorrect id  1886438513',
    ]);
  });
});
