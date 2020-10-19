import { 
  callRegex,
  hissRegex,
  yayRegex,
  yeehawRegex,
} from '.';

// to test numbers of characters at the end of the string
const yeehawRegexEnd = RegExp(yeehawRegex + '$');
const yayRegexEnd = RegExp(yayRegex + '$');

describe('yeehaw regex', function() {
  it('should match yeehaw with two "e"s and no !', function() {
      expect(yeehawRegex.test('yeehaw')).toBe(true);
  });
  it('should match yeehaw with four "e"s and one !', function() {
      expect(yeehawRegex.test('yeeeehaw!')).toBe(true);
  });
  it('should not match yeehaw with one e', function() {
      expect(yeehawRegex.test('yehaw')).toBe(false);
  });
  it('should not match yeehaw with two "e"s and four !', function() {
      expect(yeehawRegexEnd.test('yeehaw')).toBe(false);
  });
});

describe('hiss regex', function() {
  it('should match hiss with two "s"s', function() {
    expect(hissRegex.test('hiss')).toBe(true);
  });
  it('should match hiss with five "s"s', function() {
    expect(hissRegex.test('hisssss')).toBe(true);
  });
  it('should not match hiss with one "s"', function() {
    expect(hissRegex.test('his')).toBe(false);
  });
});

describe('yay regex', function() {
  it('should not match Yay with two !s', function() {
    expect(yayRegex.test('Yay!!')).toBe(false);
  });
  it('should match Yay with three !s', function() {
    expect(yayRegex.test('Yay!!!')).toBe(true);
  });
  it('should match Yay with six !s', function() {
    expect(yayRegex.test('Yay!!!!!!')).toBe(true);
  });
  it('should match Yay with seven !s', function() {
    expect(yayRegexEnd.test('Yay!!!!!!!')).toBe(false);
  });
});

describe('call regex', function() {
  it('should match Call me maybe with no ?s', function() {
    expect(callRegex.test('Call me maybe')).toBe(true);
  });
  it('should match Call me maybe with one ?', function() {
    expect(callRegex.test('Call me maybe?')).toBe(true);
  });
  it('should match Call me maybe with twelve ?s', function() {
    expect(callRegex.test('Call me maybe????????????')).toBe(true);
  });
});

