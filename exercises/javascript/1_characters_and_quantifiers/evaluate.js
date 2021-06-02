import { callRegex, hissRegex, yayRegex, yeehawRegex } from ".";

// adding string boundaries so regexes behave as expected
const yeehawRegexComplete = RegExp(`^${yeehawRegex.source}$`);
const hissRegexComplete = RegExp(`^${hissRegex.source}$`);
const yayRegexComplete = RegExp(`^${yayRegex.source}$`);
const callRegexComplete = RegExp(`^${callRegex.source}$`);

describe("yeehaw regex", function () {
  it('should match yeehaw with two "e"s and no !', function () {
    expect(yeehawRegexComplete.test("yeehaw")).toBe(true);
  });
  it('should match yeehaw with four "e"s and one !', function () {
    expect(yeehawRegexComplete.test("yeeeehaw!")).toBe(true);
  });
  it("should not match yeehaw with one e", function () {
    expect(yeehawRegexComplete.test("yehaw")).toBe(false);
  });
  it('should not match yeehaw with two "e"s and four !', function () {
    expect(yeehawRegexComplete.test("yeehaw!!!!")).toBe(false);
  });
});

describe("hiss regex", function () {
  it('should match hiss with two "s"s', function () {
    expect(hissRegexComplete.test("hiss")).toBe(true);
  });
  it('should match hiss with five "s"s', function () {
    expect(hissRegexComplete.test("hisssss")).toBe(true);
  });
  it('should not match hiss with one "s"', function () {
    expect(hissRegexComplete.test("his")).toBe(false);
  });
});

describe("yay regex", function () {
  it("should not match Yay with two !s", function () {
    expect(yayRegexComplete.test("Yay!!")).toBe(false);
  });
  it("should match Yay with three !s", function () {
    expect(yayRegexComplete.test("Yay!!!")).toBe(true);
  });
  it("should match Yay with six !s", function () {
    expect(yayRegexComplete.test("Yay!!!!!!")).toBe(true);
  });
  it("should match Yay with seven !s", function () {
    expect(yayRegexComplete.test("Yay!!!!!!!")).toBe(false);
  });
});

describe("call regex", function () {
  it("should match Call me maybe with no ?s", function () {
    expect(callRegexComplete.test("Call me maybe")).toBe(true);
  });
  it("should match Call me maybe with one ?", function () {
    expect(callRegexComplete.test("Call me maybe?")).toBe(true);
  });
  it("should match Call me maybe with twelve ?s", function () {
    expect(callRegexComplete.test("Call me maybe????????????")).toBe(true);
  });
});
