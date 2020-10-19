import {
  binaryRegex as rawBinaryRegex,
  hawaiianRegex as rawHawaiianRegex,
  telephoneRegex as rawTelephoneRegex,
  sixPlusNoARegex as rawSixPlusNoARegex,
} from '.';

// adding string boundaries so regexes behave as expected
const binaryRegex = RegExp(`^${rawBinaryRegex.source}$`);
const hawaiianRegex = RegExp(`^${rawHawaiianRegex.source}$`);
const telephoneRegex = RegExp(`^${rawTelephoneRegex.source}$`);
const sixPlusNoARegex = RegExp(`^${rawSixPlusNoARegex.source}$`);

describe('EvaluateBinary', function () {
  it('matches zero', function () {
    expect(binaryRegex.test('0')).toBe(true);
  });
  it('does not match empty', function () {
    expect(binaryRegex.test('')).toBe(false);
  });
  it('matches long', function () {
    expect(binaryRegex.test('0110100110')).toBe(true);
  });
  it('does not match not_binary', function () {
    expect(binaryRegex.test('40')).toBe(false);
  });
});

describe('EvaluateHawaiian', function () {
  it('matches aloha', function () {
    expect(hawaiianRegex.test('Aloha')).toBe(true);
  });
  it('does not match empty', function () {
    expect(hawaiianRegex.test('')).toBe(false);
  });
  it('matches long', function () {
    expect(hawaiianRegex.test("humuhumunukunukuapua'a")).toBe(true);
  });
  it('does not match caps_in_middle', function () {
    expect(hawaiianRegex.test('HolOholo')).toBe(false);
  });
  it('does not match not_hawaiian', function () {
    expect(hawaiianRegex.test('Bacana')).toBe(false);
  });
});

describe('EvaluateTelephone', function () {
  it('matches valid', function () {
    expect(telephoneRegex.test('123-456-7890')).toBe(true);
  });
  it('does not match too_short', function () {
    expect(telephoneRegex.test('12-456-7890')).toBe(false);
  });
  it('does not match too_long', function () {
    expect(telephoneRegex.test('1234-456-7890')).toBe(false);
  });
  it('does not match not_numbers', function () {
    expect(telephoneRegex.test('abc-def-hijk')).toBe(false);
  });
  it('does not match no_dashes', function () {
    expect(telephoneRegex.test('1234567890')).toBe(false);
  });
});

describe('EvaluateSixPlusNoA', function () {
  it('does not match regex', function () {
    expect(sixPlusNoARegex.test('Regular Expressions')).toBe(false);
  });
  it('matches python', function () {
    expect(sixPlusNoARegex.test('Python')).toBe(true);
  });
  it('matches unique_newyork', function () {
    expect(sixPlusNoARegex.test('unique New York')).toBe(true);
  });
  it('does not match aloha', function () {
    expect(sixPlusNoARegex.test('ALOHA')).toBe(false);
  });
});
