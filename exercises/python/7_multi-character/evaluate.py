from unittest import TestCase
import re

from multi_character import puppy_or_puppies_regex
from multi_character import playing_card_regex
from multi_character import hex_string_regex
from multi_character import error_fatal_regex


def should_have_matched(regex, input_string, expected_match):
    return f'{regex} should have matched "{expected_match}"" for input string "{input_string}"'


def should_not_have_matched(regex, input_string):
    return f'{regex} matched input string "{input_string}" when it should not have.'


def empty_string_should_not_have_matched(regex):
    return f'{regex} should not have matched an empty input string'


class EvaluatePuppiesRegex(TestCase):
    regex_name = 'puppy_or_puppies_regex'

    def test_puppy(self):
        input_string = "puppy"
        matches = re.search(puppy_or_puppies_regex, input_string)
        self.assertIsNotNone(
            matches,
            f'{self.regex_name} should have matched {input_string} but did not.')

    def test_puppies(self):
        input_string = "puppies"
        matches = re.search(puppy_or_puppies_regex, input_string)
        self.assertIsNotNone(
            matches,
            f'{self.regex_name} should have matched {input_string} but did not.')

    def test_no_puppies(self):
        input_string = 'kittens'
        matches = re.search(puppy_or_puppies_regex, input_string)
        self.assertIsNone(
            matches,
            f'{self.regex_name} matched {input_string} but it should not have.')

    def test_puppies_and_kittens(self):
        input_string = 'puppies and kittens'
        matches = re.search(puppy_or_puppies_regex, input_string)
        self.assertIsNotNone(
            matches,
            f'{self.regex_name} should have matched {input_string} but did not.')


class EvaluatePlayingCardRegex(TestCase):
    regex_name = 'playing_card_regex'

    def test_ten_of_clubs(self):
        input_string = '10 of clubs'
        matches = re.search(playing_card_regex, input_string)
        self.assertIsNotNone(
            matches,
            f'{self.regex_name} should have matched {input_string} but did not.')

    def test_ace_of_hearts(self):
        input_string = 'A of hearts'
        matches = re.search(playing_card_regex, input_string)
        self.assertIsNotNone(
            matches,
            f'{self.regex_name} should have matched {input_string} but did not.')

    def test_three_of_spades(self):
        input_string = '3 of spades'
        matches = re.search(playing_card_regex, input_string)
        self.assertIsNotNone(
            matches,
            f'{self.regex_name} should have matched {input_string} but did not.')

    def test_eleven_of_diamonds(self):
        input_string = '11 of diamonds'
        matches = re.search(playing_card_regex, input_string)
        self.assertIsNone(
            matches,
            f'{self.regex_name} matched {input_string} but it should not have.')

    def test_23_of_hearts(self):
        input_string = '23 of hearts'
        matches = re.search(playing_card_regex, input_string)
        self.assertIsNone(
            matches,
            f'{self.regex_name} matched {input_string} but it should not have.')

    def test_J_of_dots(self):
        input_string = 'J of dots'
        matches = re.search(playing_card_regex, input_string)
        self.assertIsNone(
            matches,
            f'{self.regex_name} matched {input_string} but it should not have.')

    def test_two_cards(self):
        input_string = '3 of hearts, Q of clubs'
        matches = re.search(playing_card_regex, input_string)
        self.assertIsNone(
            matches,
            f'{self.regex_name} matched {input_string} but it should not have.')


class EvaluateHexStringRegex(TestCase):
    regex_name = 'hex_string_regex'

    def test_three_chars(self):
        input_string = '#ab4'
        matches = re.search(hex_string_regex, input_string)
        self.assertIsNotNone(
            matches,
            f'{self.regex_name} should have matched {input_string} but did not.')

    def test_six_chars(self):
        input_string = '#AB4B72'
        matches = re.search(hex_string_regex, input_string)
        self.assertIsNotNone(
            matches,
            f'{self.regex_name} should have matched {input_string} but did not.')

    def test_four_chars(self):
        input_string = '#ab43'
        matches = re.search(hex_string_regex, input_string)
        self.assertIsNone(
            matches,
            f'{self.regex_name} matched {input_string} but it should not have.')

    def test_nine_chars(self):
        input_string = '#aaaaaaaaa'
        matches = re.search(hex_string_regex, input_string)
        self.assertIsNone(
            matches,
            f'{self.regex_name} matched {input_string} but it should not have.')

    def test_illegal_chars(self):
        input_string = '#ahl'
        matches = re.search(hex_string_regex, input_string)
        self.assertIsNone(
            matches,
            f'{self.regex_name} matched {input_string} but it should not have.')


log_file = """2012-02-03 18:35:34 SampleClass6 [INFO] everything normal for id 577725851
2012-02-03 18:35:34 SampleClass4 [FATAL] system problem at id 1991281254
2012-02-03 18:35:34 SampleClass3 [DEBUG] detail for id 1304807656
2012-02-03 18:35:34 SampleClass3 [WARN] missing id 423340895
2012-02-03 18:35:34 SampleClass5 [TRACE] verbose detail for id 2082654978
2012-02-03 18:35:34 SampleClass0 [ERROR] incorrect id  1886438513
2012-02-03 18:35:34 SampleClass9 [TRACE] verbose detail for id 438634209
2012-02-03 18:35:34 SampleClass8 [DEBUG] detail for id 2074121310
"""


class EvaluateErrorFatalRegex(TestCase):
    regex_name = 'error_fatal_regex'

    def test_error_lines(self):
        matches = re.findall(error_fatal_regex, log_file)
        expected_match = [
                '2012-02-03 18:35:34 SampleClass4 [FATAL] system problem at id 1991281254',
                '2012-02-03 18:35:34 SampleClass0 [ERROR] incorrect id  1886438513'
        ]
        self.assertEqual(
            matches,
            expected_match,
            should_have_matched(self.regex_name, log_file, expected_match)
        )
