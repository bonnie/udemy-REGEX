from unittest import TestCase
import re


from capture_groups import word_bookend_regex
from capture_groups import vi_swap_regex
from capture_groups import extract_log_parts_regex


def should_have_matched(regex, input_string, expected_match):
    return f'{regex} should have matched "{expected_match}"" for input string "{input_string}"'


def should_not_have_matched(regex, input_string):
    return f'{regex} matched input string "{input_string}" when it should not have.'


def empty_string_should_not_have_matched(regex):
    return f'{regex} should not have matched an empty input string'


class EvaluateWordBookendRegex(TestCase):
    regex_name = 'word_bookend_regex'

    def test_time_string(self):
        input_string = 'time time time'
        matches = re.search(word_bookend_regex, input_string)
        self.assertIsNotNone(
            matches,
            f'{self.regex_name} should have matched {input_string} but did not.')

    def test_I_string(self):
        input_string = 'I said no one is as lovely as I'
        matches = re.search(word_bookend_regex, input_string)
        self.assertIsNotNone(
            matches,
            f'{self.regex_name} should have matched {input_string} but did not.')

    def test_palindrome_string(self):
        input_string = 'madam I\'m Adam'
        matches = re.search(word_bookend_regex, input_string)
        self.assertIsNone(
            matches,
            f'{self.regex_name} matched {input_string} but it should not have.')

    def test_characters_not_words(self):
        input_string = 'ow, I don\'t know'
        matches = re.search(word_bookend_regex, input_string)
        self.assertIsNone(
            matches,
            f'{self.regex_name} matched {input_string} but it should not have.')

    def test_empty_string(self):
        input_string = ''
        matches = re.search(word_bookend_regex, input_string)
        self.assertIsNone(
            matches,
            f'{self.regex_name} matched {input_string} but it should not have.')


dir_list = """
.favorite_regexes.txt.swp
.practice.py.swp
.DS_Store
favorite_regexes.txt
practice.py
zippy.py
"""


class EvaluateViSwap(TestCase):
    regex_name = 'vi_swap_regex'

    def test_file_list(self):
        matches = re.findall(vi_swap_regex, dir_list)
        expected_match = ['favorite_regexes.txt', 'practice.py']
        self.assertEqual(
            matches,
            expected_match,
            should_have_matched(self.regex_name, dir_list, expected_match)
        )

    def test_empty_string(self):
        matches = re.findall(vi_swap_regex, '')
        self.assertEqual(
            matches,
            [],
            empty_string_should_not_have_matched(self.regex_name))

    def test_no_swpfiles(self):
        input_string = """file1.txt
file2.txt"""
        matches = re.findall(vi_swap_regex, input_string)
        self.assertEqual(
            matches,
            [],
            should_not_have_matched(self.regex_name, input_string))


class EvaluateLogPartsExtract(TestCase):

    def test_example_data(self):
        sample_data = """03Sep2020 04:55:38 This is a message
30Oct2020 23:44:01 This is another message"""
        match_objects = re.finditer(extract_log_parts_regex, sample_data)

        groupdicts = []
        if match_objects:
            for match in match_objects:
                groupdicts.append(match.groupdict())

        self.assertEqual(
            groupdicts,
            [
                {
                    'day': '03',
                    'month': 'Sep',
                    'year': '2020',
                    'time': '04:55:38',
                    'message': 'This is a message',
                },
                {
                    'day': '30',
                    'month': 'Oct',
                    'year': '2020',
                    'time': '23:44:01',
                    'message': 'This is another message',
                },
            ]
        )
