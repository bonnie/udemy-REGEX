import {
  emailRegex,
  emailReplacement,
  htmlTagRegex,
  htmlTagReplacement,
  multipleWhitespaceRegex,
  multipleWhitespaceReplacement,
  outerWhitespaceRegex,
  outerWhitespaceReplacement,
  nameSwitchRegex,
  nameSwitchReplacement,
  multiNameSwitchRegex,
  multiNameSwitchReplacement,
} from '.';

describe('EvaluateEmailReplacement', function () {
  it('redacts whole string email', function () {
    const string = 'not.an.email@fakedomain.com';
    const output = string.replace(emailRegex, emailReplacement);
    expect(output).toBe('<<redacted>>');
  });
  it('redacts multiple_emails', function () {
    const string = 'Please send to a@b.com and c@d.com. Thanks!';
    const output = string.replace(emailRegex, emailReplacement);
    expect(output).toBe(
      'Please send to <<redacted>> and <<redacted>>. Thanks!'
    );
  });
  it('does not change string with no emails', function () {
    const string = 'This string has no emails!!';
    const output = string.replace(emailRegex, emailReplacement);
    expect(output).toBe('This string has no emails!!');
  });
});
describe('EvaluateHtmlReplacement', function () {
  const string = it('removes tags for single element', function () {
    const string = '<span>This is a span</span>';
    const output = string.replace(htmlTagRegex, htmlTagReplacement);
    expect(output).toBe('This is a span');
  });
  it('removes tags for multiple elements', function () {
    const string =
      '<span>This is a <b>span!</b></span><span>So is this.</span>';
    const output = string.replace(htmlTagRegex, htmlTagReplacement);
    expect(output).toBe('This is a span!So is this.');
  });
  it('multiline', function () {
    const string =
      '<h1>Regular Expressions</h1>\n<h2>Quantifiers</h2>\n<p>Quantifiers tell you how many of the preceding token are allowed.</p>';
    const output = string.replace(htmlTagRegex, htmlTagReplacement);
    expect(output).toBe(
      'Regular Expressions\nQuantifiers\nQuantifiers tell you how many of the preceding token are allowed.'
    );
  });
  it('does not change string with no tags', function () {
    const string = 'No tags. Absolutely none.';
    const output = string.replace(htmlTagRegex, htmlTagReplacement);
    expect(output).toBe('No tags. Absolutely none.');
  });
});
describe('EvaluateMultipleWhitespaceReplacement', function () {
  const string = 'hello,\t   my   name is  Bonnie';
  it('replaces multiple whitespac for a single-line string', function () {
    const output = string.replace(
      multipleWhitespaceRegex,
      multipleWhitespaceReplacement
    );
    expect(output).toBe('hello, my name is Bonnie');
  });
  it('multi_line', function () {
    const string =
      "it's   the\n\n      most   wonderful\t\t\t time\n      of the\tyear";
    const output = string.replace(
      multipleWhitespaceRegex,
      multipleWhitespaceReplacement
    );
    expect(output).toBe("it's the most wonderful time of the\tyear");
  });
  it('does not change string with no whitespace', function () {
    const string = 'no_multipleWhitespace__at____all';
    const output = string.replace(
      multipleWhitespaceRegex,
      multipleWhitespaceReplacement
    );

    expect(output).toBe('no_multipleWhitespace__at____all');
  });
});
describe('EvaluateOuterWhitespaceReplacement', function () {
  it('removes leading and trailing space', function () {
    const string = '   leading and trailing    \n\n';
    const output = string.replace(
      outerWhitespaceRegex,
      outerWhitespaceReplacement
    );
    expect(output).toBe('leading and trailing');
  });
  it('removes trailing space when preceded with punctuation', function () {
    const string = 'only trailing space!   \t';
    const output = string.replace(
      outerWhitespaceRegex,
      outerWhitespaceReplacement
    );
    expect(output).toBe('only trailing space!');
  });
  it('removes leading space when followed by punctuation', function () {
    const string = '\n"Get to the back of the ship!" Tom said sternly.\n';
    const output = string.replace(
      outerWhitespaceRegex,
      outerWhitespaceReplacement
    );
    expect(output).toBe('"Get to the back of the ship!" Tom said sternly.');
  });
  it('does not change string with no outer space', function () {
    const string = 'Do not launch me out of the atmosphere please!';
    const output = string.replace(
      outerWhitespaceRegex,
      outerWhitespaceReplacement
    );
    expect(output).toBe('Do not launch me out of the atmosphere please!');
  });
});
describe('EvaluateNameSwitchReplacement', function () {
  it('reverses names from the instructions example', function () {
    const string =
      "Indira Ghandi\nMorgan Freeman\nJustin Finch-Fletchley\nFlannery O'Connor";
    const output = string.replace(nameSwitchRegex, nameSwitchReplacement);
    expect(output).toBe(
      "Ghandi, Indira\nFreeman, Morgan\nFinch-Fletchley, Justin\nO'Connor, Flannery"
    );
  });
  it('reverses single single_name', function () {
    const string = 'Ghandi, Indira';
    const output = string.replace(nameSwitchRegex, nameSwitchReplacement);
    expect(output).toBe('Ghandi, Indira');
  });
  it('does not reverse single-word name', function () {
    const output = 'Pele'.replace(nameSwitchRegex, nameSwitchReplacement);
    expect(output).toBe('Pele');
  });
});
describe('EvaluateMultiNameSwitchReplacement', function () {
  it('reverses names from instructionsexample', function () {
    const string =
      "Indira Ghandi\nMorgan Freeman\nJustin Finch-Fletchley\nFlannery O'Connor\nCarlos Alberto Torres\nHarriet Beecher Stowe";
    const output = string.replace(
      multiNameSwitchRegex,
      multiNameSwitchReplacement
    );
    expect(output).toBe(
      "Ghandi, Indira\nFreeman, Morgan\nFinch-Fletchley, Justin\nO'Connor, Flannery\nTorres, Carlos Alberto\nStowe, Harriet Beecher"
    );
  });
  it('reverses single single_name', function () {
    const string = 'Ghandi, Indira';
    const output = string.replace(
      multiNameSwitchRegex,
      multiNameSwitchReplacement
    );
    expect(output).toBe('Ghandi, Indira');
  });
  it('does not reverse single-word name', function () {
    const output = 'Pele'.replace(
      multiNameSwitchRegex,
      multiNameSwitchReplacement
    );
    expect(output).toBe('Pele');
  });
});
