from unittest import TestCase
import re

from character_classes import middle_oo_regex
from character_classes import list_item_regex
from character_classes import trailing_whitespace_regex
from character_classes import blank_the_blank_regex
from character_classes import email_regex


def should_have_matched(regex, input_string, expected_match):
    return f'{regex} should have matched "{expected_match}"" for input string "{input_string}"'


def should_not_have_matched(regex, input_string):
    return f'{regex} matched input string "{input_string}" when it should not have.'


def empty_string_should_not_have_matched(regex):
    return f'{regex} should not have matched an empty input string'


class EvaluateMiddleOo(TestCase):
    regex_name = 'middle_oo_regex'

    def test_look_at_me(self):
        input_string = 'Look at me!'
        expected_match = 'oo'
        matches = re.search(middle_oo_regex, input_string)
        self.assertEqual(
            matches[0],
            expected_match,
            should_have_matched(self.regex_name, input_string, expected_match)
        )

    def test_boom(self):
        input_string = 'Booooom! That’s how it’s done!'
        expected_match = 'ooooo'
        matches = re.search(middle_oo_regex, input_string)
        self.assertEqual(
            matches[0],
            expected_match,
            should_have_matched(self.regex_name, input_string, expected_match)
        )

    def test_pretty(self):
        input_string = 'ooh, that’s pretty'
        matches = re.search(middle_oo_regex, input_string)
        self.assertIsNone(
            matches,
            should_not_have_matched(self.regex_name, input_string)
        )

    def test_yahoo(self):
        input_string = 'yahoo!'
        matches = re.search(middle_oo_regex, input_string)
        self.assertIsNone(
            matches,
            should_not_have_matched(self.regex_name, input_string)
        )

    def test_middle_and_end(self):
        input_string = 'Yahooooooooooo'
        expected_match = 'oooooooooo'
        matches = re.search(middle_oo_regex, input_string)
        self.assertEqual(
            matches[0],
            expected_match,
            should_have_matched(self.regex_name, input_string, expected_match)
        )


class EvaluateListItem(TestCase):
    regex_name = 'list_item_regex'

    def test_list_item(self):
        input_string = '1) Finish regex course'
        expected_match = '1) Finish regex course'
        matches = re.search(list_item_regex, input_string)
        self.assertEqual(
            matches[0],
            expected_match,
            should_have_matched(self.regex_name, input_string, expected_match)
        )

    def test_long_list_item(self):
        input_string = '223513) Go to bed'
        expected_match = '223513) Go to bed'
        matches = re.search(list_item_regex, input_string)
        self.assertEqual(
            matches[0],
            expected_match,
            should_have_matched(self.regex_name, input_string, expected_match)
        )

    def test_list_item_middle(self):
        input_string = 'I think it would be best to 1) stop, 2) drop, and 3) roll'
        matches = re.search(list_item_regex, input_string)
        self.assertIsNone(
            matches,
            should_not_have_matched(self.regex_name, input_string)
        )

    def test_list_with_period(self):
        input_string = '1. Wake up at noon'
        matches = re.search(list_item_regex, input_string)
        self.assertIsNone(
            matches,
            should_not_have_matched(self.regex_name, input_string)
        )

    def test_lettered_list(self):
        input_string = 'a) You don\'t talk about fight club'
        matches = re.search(list_item_regex, input_string)
        self.assertIsNone(
            matches,
            should_not_have_matched(self.regex_name, input_string)
        )


class EvaluateTrailingWhitespace(TestCase):
    regex_name = 'trailing_whitespace_regex'

    def test_trailing_tab_and_space(self):
        input_string = 'hi\t '
        expected_match = '\t '
        matches = re.search(trailing_whitespace_regex, input_string)
        self.assertEqual(
            matches[0],
            expected_match,
            should_have_matched(self.regex_name, input_string, expected_match)
        )

    def test_trailing_spaces_and_newline(self):
        input_string = 'hi            \n'
        expected_match = '            \n'
        matches = re.search(trailing_whitespace_regex, input_string)
        self.assertEqual(
            matches[0],
            expected_match,
            should_have_matched(self.regex_name, input_string, expected_match)
        )

    def test_ends_with_a_bang(self):
        input_string = 'hi\t !'
        matches = re.search(trailing_whitespace_regex, input_string)
        self.assertIsNone(
            matches,
            should_not_have_matched(self.regex_name, input_string)
        )

    def test_leading_whitespace(self):
        input_string = '         \t\thi'
        matches = re.search(trailing_whitespace_regex, input_string)
        self.assertIsNone(
            matches,
            should_not_have_matched(self.regex_name, input_string)
        )

    def test_empty_string(self):
        matches = re.search(trailing_whitespace_regex, '')
        self.assertIsNone(
            matches,
            empty_string_should_not_have_matched(self.regex_name)
        )

    def test_all_whitespace(self):
        input_string = '   \t     \n'
        expected_match = '   \t     \n'
        matches = re.search(trailing_whitespace_regex, input_string)
        self.assertEqual(
            matches[0],
            expected_match,
            should_have_matched(self.regex_name, input_string, expected_match)
        )


class EvaluateBlankTheBlank(TestCase):
    regex_name = 'blank_the_blank_regex'

    def test_seashells(self):
        input_string = 'She sells seashells by the seashore.'
        expected_match = 'by the seashore'
        matches = re.search(blank_the_blank_regex, input_string)
        self.assertEqual(
            matches[0],
            expected_match,
            should_have_matched(self.regex_name, input_string, expected_match)
        )

    def test_confusion(self):
        input_string = 'What the heck does this regular expression mean?'
        expected_match = 'What the heck'
        matches = re.search(blank_the_blank_regex, input_string)
        self.assertEqual(
            matches[0],
            expected_match,
            should_have_matched(self.regex_name, input_string, expected_match)
        )

    def test_phrase_with_punctuation(self):
        input_string = 'I said, the bees knees!'
        matches = re.search(trailing_whitespace_regex, input_string)
        self.assertIsNone(
            matches,
            should_not_have_matched(self.regex_name, input_string)
        )

    def test_phrase_in_middle(self):
        input_string = 'Is that what the walrus said?'
        expected_match = 'what the walrus'
        matches = re.search(blank_the_blank_regex, input_string)
        self.assertEqual(
            matches[0],
            expected_match,
            should_have_matched(self.regex_name, input_string, expected_match)
        )

    def test_incomplete_phrase(self):
        input_string = 'So then I was like, "What the...?!?"'
        matches = re.search(trailing_whitespace_regex, input_string)
        self.assertIsNone(
            matches,
            should_not_have_matched(self.regex_name, input_string)
        )

    def test_the_at_beginning_and_middle(self):
        input_string = 'The rain in spain falls mainly on the plain'
        expected_match = 'on the plain'
        matches = re.search(blank_the_blank_regex, input_string)
        self.assertEqual(
            matches[0],
            expected_match,
            should_have_matched(self.regex_name, input_string, expected_match)
        )

    def test_at_the_beginning(self):
        input_string = 'The lion sleeps tonight!'
        matches = re.search(trailing_whitespace_regex, input_string)
        self.assertIsNone(
            matches,
            should_not_have_matched(self.regex_name, input_string)
        )


class EvaluateEmail(TestCase):
    regex_name = 'email_regex'

    def test_valid_email(self):
        input_string = 'me@notarealemail.com'
        matches = re.search(email_regex, input_string)
        self.assertIsNotNone(matches, f'{self.regex_name} did not match {input_string} when it should have.')

    def test_email_with_underscore(self):
        input_string = 'not_real@im.so.fake.com'
        matches = re.search(email_regex, input_string)
        self.assertIsNotNone(matches, f'{self.regex_name} did not match {input_string} when it should have.')

    def test_email_with_dots(self):
        input_string = 'not.real@im.so.fake.com'
        matches = re.search(email_regex, input_string)
        self.assertIsNotNone(matches, f'{self.regex_name} did not match {input_string} when it should have.')

    def test_email_with_space(self):
        input_string = 'not real@im.so.fake.com'
        matches = re.search(email_regex, input_string)
        self.assertIsNone(matches, f'{self.regex_name} matched {input_string} when it should not have.')

    def test_email_without_at(self):
        input_string = 'not.real_at_im.so.fake.com'
        matches = re.search(email_regex, input_string)
        self.assertIsNone(matches, f'{self.regex_name} matched {input_string} when it should not have.')
