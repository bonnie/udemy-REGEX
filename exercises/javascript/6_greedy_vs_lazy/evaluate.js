import {
  shortestFirstAndBookendRegex,
  nonOverlappingSeStringsRegex,
  htmlElementRegex,
  htmlElementIncludingSingleTagsRegex,
} from ".";

const frostPoem =
  "The woods are lovely, dark, and deep,\nBut I have promises to keep,\nAnd miles to go before I sleep,\nAnd miles to go before I sleep.";

describe("EvaluateShortestFirstAndBookend", function () {
  it("finds first and shortest `and` bookend", function () {
    const match = shortestFirstAndBookendRegex.exec(frostPoem);
    expect(match[0]).toBe("and deep,\nBut I have promises to keep,\nAnd");
  });
});

describe("EvaluateNonOverlappingStoEStrings", function () {
  it("finds s-to-e strings in tongue_twister", function () {
    let match;
    const matches = [];
    while (
      (match = nonOverlappingSeStringsRegex.exec(
        "She sells seashells by the seashore"
      ))
    ) {
      matches.push(match[0]);
    }
    expect(matches).toEqual(["se", "s se", "she", "s by the", "se", "shore"]);
  });
  it("does not match empty string", function () {
    const match = nonOverlappingSeStringsRegex.exec("");
    expect(match).toBe(null);
  });
});

describe("EvaluateHtmlRegex", function () {
  it("matches single span", function () {
    let match;
    const matches = [];
    while (
      (match = htmlElementRegex.exec(
        "<span>Yowza! That’s a great regular expression.</span>"
      ))
    ) {
      matches.push(match[0]);
    }
    expect(matches).toEqual([
      "<span>Yowza! That’s a great regular expression.</span>",
    ]);
  });
  it("matches two paragraphs", function () {
    let match;
    const matches = [];
    while (
      (match = htmlElementRegex.exec(
        "<p>Learn about regular expressions here.</p><p>You're going to love them!</p>"
      ))
    ) {
      matches.push(match[0]);
    }
    expect(matches).toEqual([
      "<p>Learn about regular expressions here.</p>",
      "<p>You're going to love them!</p>",
    ]);
  });
  it("finds elements in multi-line string", function () {
    let match;
    const matches = [];
    while (
      (match = htmlElementRegex.exec(
        "<h1>Regular Expressions</h1>\n<h2>Quantifiers</h2>\n<p>Quantifiers tell you how many of the preceding token are allowed.</p>"
      ))
    ) {
      matches.push(match[0]);
    }
    expect(matches).toEqual([
      "<h1>Regular Expressions</h1>",
      "<h2>Quantifiers</h2>",
      "<p>Quantifiers tell you how many of the preceding token are allowed.</p>",
    ]);
  });
  it("does not match non-html", function () {
    const match = htmlElementRegex.exec("I'm not HTML!!");
    expect(match).toBe(null);
  });
});

describe("EvaluateHtmlRegexIncludingSingleTag", function () {
  it("matches single span", function () {
    let match;
    const matches = [];
    while (
      (match = htmlElementIncludingSingleTagsRegex.exec(
        "<span>Yowza! That’s a great regular expression.</span>"
      ))
    ) {
      matches.push(match[0]);
    }
    expect(matches).toEqual([
      "<span>Yowza! That’s a great regular expression.</span>",
    ]);
  });
  it("matches two paragraphs", function () {
    let match;
    const matches = [];
    while (
      (match = htmlElementIncludingSingleTagsRegex.exec(
        "<p>Learn about regular expressions here.</p><p>You're going to love them!</p>"
      ))
    ) {
      matches.push(match[0]);
    }
    expect(matches).toEqual([
      "<p>Learn about regular expressions here.</p>",
      "<p>You're going to love them!</p>",
    ]);
  });
  it("finds elements in multi-line string", function () {
    let match;
    const matches = [];
    while (
      (match = htmlElementIncludingSingleTagsRegex.exec(
        "<h1>Regular Expressions</h1>\n<h2>Quantifiers</h2>\n<p>Quantifiers tell you how many of the preceding token are allowed.</p>"
      ))
    ) {
      matches.push(match[0]);
    }
    expect(matches).toEqual([
      "<h1>Regular Expressions</h1>",
      "<h2>Quantifiers</h2>",
      "<p>Quantifiers tell you how many of the preceding token are allowed.</p>",
    ]);
  });
  it("does not match non-html", function () {
    const match = htmlElementIncludingSingleTagsRegex.exec("I'm not HTML!!");
    expect(match).toBe(null);
  });
});
it("matches single_tag", function () {
  let match;
  const matches = [];
  while (
    (match = htmlElementIncludingSingleTagsRegex.exec(
      "<h1>Regular Expressions</h1><hr /><img src=”http://placekitten.com/200/300” />"
    ))
  ) {
    matches.push(match[0]);
  }
  expect(matches).toEqual([
    "<h1>Regular Expressions</h1>",
    "<hr />",
    "<img src=”http://placekitten.com/200/300” />",
  ]);
});
