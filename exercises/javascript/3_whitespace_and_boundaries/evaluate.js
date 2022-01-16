import {
  trailingSpaceRegex,
  twoConsecutiveTabsRegex,
  twoTabsRegex,
  startWithThreeDigitsRegex,
  stringsWithoutERegex,
} from ".";

describe("EvaluateTrailingSpace", function () {
  it("matches one_trailing_space", function () {
    expect(trailingSpaceRegex.test("trail ")).toBe(true);
  });
  it("matches four_trailing_spaces", function () {
    expect(trailingSpaceRegex.test("trail    ")).toBe(true);
  });
  it("does not match trailing_space_and_tab", function () {
    expect(trailingSpaceRegex.test("trail \t")).toBe(false);
  });
  it("does not match leading_space_no_trailing_space", function () {
    expect(trailingSpaceRegex.test("  hey, i have no space at the end")).toBe(
      false
    );
  });
});

describe("EvaluateConsecutiveTabs", function () {
  it("matches tabs_in_middle", function () {
    expect(twoConsecutiveTabsRegex.test("tab\t\ttab")).toBe(true);
  });
  it("matches tabs_at_beginning", function () {
    expect(twoConsecutiveTabsRegex.test("\t\ttwotabs")).toBe(true);
  });
  it("matches more_than_two_tabs", function () {
    expect(twoConsecutiveTabsRegex.test("tabs\t\t\t")).toBe(true);
  });
  it("does not match one_tab", function () {
    expect(twoConsecutiveTabsRegex.test("one\ttab")).toBe(false);
  });
  it("does not match no_tabs", function () {
    expect(twoConsecutiveTabsRegex.test("no  tabs")).toBe(false);
  });
  it("does not match separated_tabs", function () {
    expect(twoConsecutiveTabsRegex.test("\tseparated\ttabs")).toBe(false);
  });
});

describe("EvaluateTwoTabs", function () {
  it("matches separated_tabs", function () {
    expect(twoTabsRegex.test("\tseparated\ttabs")).toBe(true);
  });
  it("matches tabs_in_middle", function () {
    expect(twoTabsRegex.test("tab\t\ttab")).toBe(true);
  });
  it("matches tabs_at_beginning", function () {
    expect(twoTabsRegex.test("\t\ttwotabs")).toBe(true);
  });
  it("matches more_than_two_tabs", function () {
    expect(twoTabsRegex.test("\tta\tb\ts")).toBe(true);
  });
  it("does not match one_tab", function () {
    expect(twoTabsRegex.test("one\ttab")).toBe(false);
  });
  it("does not match no_tabs", function () {
    expect(twoTabsRegex.test("no  tabs")).toBe(false);
  });
});

describe("EvaluateThreeDigitStart", function () {
  it("matches three_correct_digits", function () {
    expect(startWithThreeDigitsRegex.test("321 yay!")).toBe(true);
  });
  it("matches more_than_three_correct_digits", function () {
    expect(startWithThreeDigitsRegex.test("54321 yay!")).toBe(true);
  });
  it("does not match two_correct_digits", function () {
    expect(startWithThreeDigitsRegex.test("21 yay!")).toBe(false);
  });
  it("does not match correct_digits_in_middle", function () {
    expect(startWithThreeDigitsRegex.test("yay! 321!")).toBe(false);
  });
  it("does not match incorrect_digits", function () {
    expect(startWithThreeDigitsRegex.test("987654321 yay!")).toBe(false);
  });
});

describe("EvaluateStringsWithoutE", function () {
  it("does not match Expressions", function () {
    expect(stringsWithoutERegex.test("Expressions")).toBe(false);
  });
  it("does not match lol", function () {
    expect(stringsWithoutERegex.test("lol")).toBe(false);
  });
  it("matches python", function () {
    expect(stringsWithoutERegex.test("Python")).toBe(true);
  });
  it("does not match unique_newyork", function () {
    expect(stringsWithoutERegex.test("unique New York")).toBe(false);
  });
  it("matches whazzup", function () {
    expect(stringsWithoutERegex.test("Whazzup????")).toBe(true);
  });
  it("matches empty", function () {
    expect(stringsWithoutERegex.test("")).toBe(false);
  });
});
