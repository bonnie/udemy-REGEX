from unittest import TestCase
import re

from flags import he_hey_regex
from flags import eep_regex
from flags import to_eep_regex
from flags import first_a_regex
from flags import and_bookends_regex
from flags import se_start_regex

frost_poem = """The woods are lovely, dark, and deep,
But I have promises to keep,
And miles to go before I sleep,
And miles to go before I sleep.
"""


def should_have_matched(regex, input_string, expected_match):
    return f'{regex} should have matched "{expected_match}"" for input string "{input_string}"'


def should_not_have_matched(regex, input_string):
    return f'{regex} matched input string "{input_string}" when it should not have.'


def empty_string_should_not_have_matched(regex):
    return f'{regex} should not have matched an empty input string'


class EvaluateHeHey(TestCase):
    regex_name = 'he_hey_regex'

    def test_hey(self):
        input_string = 'hey'
        expected_match = 'hey'
        matches = re.search(he_hey_regex, input_string)
        self.assertEqual(
            matches[0],
            expected_match,
            should_have_matched(self.regex_name, input_string, expected_match)
        )

    def test_she(self):
        input_string = 'SHE'
        expected_match = 'HE'
        matches = re.search(he_hey_regex, input_string)
        self.assertEqual(
            matches[0],
            expected_match,
            should_have_matched(self.regex_name, input_string, expected_match)
        )

    def test_they(self):
        input_string = 'theY LOVE Regex!'
        expected_match = 'heY'
        matches = re.search(he_hey_regex, input_string)
        self.assertEqual(
            matches[0],
            expected_match,
            should_have_matched(self.regex_name, input_string, expected_match)
        )

    def test_empty(self):
        matches = re.search(he_hey_regex, '')
        self.assertIsNone(
            matches,
            empty_string_should_not_have_matched(self.regex_name)
        )

    def test_no_he(self):
        input_string = 'eyeglasses'
        matches = re.search(he_hey_regex, input_string)
        self.assertIsNone(
            matches,
            should_not_have_matched(self.regex_name, input_string)
        )


class EvaluateFrostPoem(TestCase):

    def test_eep_period_line_end(self):
        matches = re.findall(eep_regex, frost_poem)
        expected_match = ['And miles to go before I sleep.']
        self.assertEqual(
            matches,
            expected_match,
            should_have_matched('eep_regex', frost_poem, expected_match))

    def test_single_line_to_eep(self):
        matches = re.search(to_eep_regex, frost_poem)
        expected_match = 'to keep'
        self.assertEqual(
            matches[0],
            expected_match,
            should_have_matched('to_eep_regex', frost_poem, expected_match))

    def test_first_a_regex(self):
        matches = re.search(first_a_regex, frost_poem)
        expected_match = 'are'
        self.assertEqual(
            matches[0],
            expected_match,
            should_have_matched('first_a_regex', frost_poem, expected_match))

    def test_and_bookends(self):
        matches = re.search(and_bookends_regex, frost_poem)
        expected_match = """and deep,
But I have promises to keep,
And miles to go before I sleep,
And"""
        self.assertEqual(
            matches[0],
            expected_match,
            should_have_matched('and_bookends_regex', frost_poem, expected_match))


class EvaluateSeStart(TestCase):
    regex_name = 'se_start_regex'

    def test_tongue_twister(self):
        input_string = 'She sells seashells by the seashore'
        expected_match = ['sells', 'seashells', 'seashore']
        matches = re.findall(se_start_regex, input_string)
        self.assertEqual(
            matches,
            expected_match,
            should_have_matched(self.regex_name, input_string, expected_match))

    def test_no_matches(self):
        input_string = 'Noses smell.'
        expected_match = []
        matches = re.findall(se_start_regex, input_string)
        self.assertEqual(
            matches,
            expected_match,
            should_have_matched(self.regex_name, input_string, expected_match))

    def test_capitalization(self):
        input_string = 'Sean, see if you can search for Selena.'
        expected_match = ['Sean', 'see', 'search', 'Selena']
        matches = re.findall(se_start_regex, input_string)
        self.assertEqual(
            matches,
            expected_match,
            should_have_matched(self.regex_name, input_string, expected_match))
