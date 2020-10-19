import {
  middleOoRegex,
  listItemRegex,
  trailingWhitespaceRegex,
  blankTheBlankRegex,
  emailRegex,
} from '.';

describe('EvaluateMiddleOo', function () {
  it('finds group for look_at_me', function () {
    const match = middleOoRegex.exec('Look at me!');
    expect(match[0]).toBe('oo');
  });
  it('finds group for boom', function () {
    const match = middleOoRegex.exec('Booooom! That’s how it’s done!');
    expect(match[0]).toBe('ooooo');
  });
  it("does not find group for `ooh, that's pretty`", function () {
    const match = middleOoRegex.exec('ooh, that’s pretty');
    expect(match).toBe(null);
  });
  it('does not find group for yahoo', function () {
    const match = middleOoRegex.exec('yahoo!');
    expect(match).toBe(null);
  });
  it('finds group for middle_and_end', function () {
    const match = middleOoRegex.exec('Yahooooooooooo');
    expect(match[0]).toBe('oooooooooo');
  });
});

describe('EvaluateListItem', function () {
  it('finds group for list_item', function () {
    const match = listItemRegex.exec('1) Finish regex course');
    expect(match[0]).toBe('1) Finish regex course');
  });
  it('finds group for long_list_item', function () {
    const match = listItemRegex.exec('223513) Go to bed');
    expect(match[0]).toBe('223513) Go to bed');
  });
  it('does not find group for list_item_middle', function () {
    const match = listItemRegex.exec(
      'I think it would be best to 1) stop, 2) drop, and 3) roll'
    );
    expect(match).toBe(null);
  });
  it('does not find group for list_with_period', function () {
    const match = listItemRegex.exec('1. Wake up at noon');
    expect(match).toBe(null);
  });
  it('does not find group for lettered_list', function () {
    const match = listItemRegex.exec("a) You don't talk about fight club");
    expect(match).toBe(null);
  });
});
describe('EvaluateTrailingWhitespace', function () {
  it('finds group for trailing_tab_and_space', function () {
    const match = trailingWhitespaceRegex.exec('hi\t ');
    expect(match[0]).toBe('\t ');
  });
  it('finds group for trailing_spaces_and_newline', function () {
    const match = trailingWhitespaceRegex.exec('hi            \n');
    expect(match[0]).toBe('            \n');
  });
  it('does not find group for ends_with_a_bang', function () {
    const match = trailingWhitespaceRegex.exec('hi\t !');
    expect(match).toBe(null);
  });
  it('does not find group for leading_whitespace', function () {
    const match = trailingWhitespaceRegex.exec('         \t\thi');
    expect(match).toBe(null);
  });
  it('does not find group for empty_string', function () {
    const match = trailingWhitespaceRegex.exec('');
    expect(match).toBe(null);
  });
  it('finds group for all_whitespace', function () {
    const match = trailingWhitespaceRegex.exec('   \t     \n');
    expect(match[0]).toBe('   \t     \n');
  });
});
describe('EvaluateBlankTheBlank', function () {
  it('finds group for seashells', function () {
    const match = blankTheBlankRegex.exec(
      'She sells seashells by the seashore.'
    );
    expect(match[0]).toBe('by the seashore');
  });
  it('finds group for confusion', function () {
    const match = blankTheBlankRegex.exec(
      'What the heck does this regular expression mean?'
    );
    expect(match[0]).toBe('What the heck');
  });
  it('does not find group for phrase_with_punctuation', function () {
    const match = blankTheBlankRegex.exec('I said, the bees knees!');
    expect(match).toBe(null);
  });
  it('finds group for phrase_in_middle', function () {
    const match = blankTheBlankRegex.exec('Is that what the walrus said?');
    expect(match[0]).toBe('what the walrus');
  });
  it('does not find group for incomplete_phrase', function () {
    const match = blankTheBlankRegex.exec(
      'So then I was like, "What the...?!?"'
    );
    expect(match).toBe(null);
  });
  it('finds group for the_at_beginning_and_middle', function () {
    const match = blankTheBlankRegex.exec(
      'The rain in spain falls mainly on the plain'
    );
    expect(match[0]).toBe('on the plain');
  });
  it('does not find group for at_the_beginning', function () {
    const match = blankTheBlankRegex.exec('The lion sleeps tonight!');
    expect(match).toBe(null);
  });
});
describe('EvaluateEmail', function () {
  it('matches valid_email', function () {
    const match = emailRegex.test('me@notarealemail.com');
    expect(match).toBe(true);
  });
  it('matches email_with_underscore', function () {
    const match = emailRegex.test('not_real@im.so.fake.com');
    expect(match).toBe(true);
  });
  it('matches email_with_dots', function () {
    const match = emailRegex.test('not.real@im.so.fake.com');
    expect(match).toBe(true);
  });
  it('does not match email_with_space', function () {
    const match = emailRegex.test('not real@im.so.fake.com');
    expect(match).toBe(false);
  });
  it('does not match email_without_at', function () {
    const match = emailRegex.test('not.real_at_im.so.fake.com');
    expect(match).toBe(false);
  });
});
