from unittest import TestCase
import re

from greedy_lazy import shortest_first_and_bookend_regex
from greedy_lazy import non_overlapping_se_strings_regex
from greedy_lazy import html_element_regex
from greedy_lazy import html_element_including_single_tags_regex

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


class EvaluateShortestFirstAndBookend(TestCase):
    regex_name = 'shortest_first_and_bookend_regex'

    def test_find_first_and_shortest_and_bookend(self):
        matches = re.search(shortest_first_and_bookend_regex, frost_poem)
        expected_match = """and deep,
But I have promises to keep,
And"""
        self.assertEqual(
            matches[0],
            expected_match,
            should_have_matched(self.regex_name, frost_poem, expected_match)
        )


class EvaluateNonOverlappingStoEStrings(TestCase):
    regex_name = 'non_overlapping_se_strings_regex'

    def test_tongue_twister(self):
        input_string = 'She sells seashells by the seashore'
        expected_match = ['se', 's se', 'she', 's by the', 'se', 'shore']
        matches = re.findall(non_overlapping_se_strings_regex, input_string)
        self.assertEqual(
            matches,
            expected_match,
            should_have_matched(self.regex_name, frost_poem, expected_match)
        )

    def test_empty_string(self):
        matches = re.findall(non_overlapping_se_strings_regex, '')
        self.assertEqual(
            matches,
            [],
            f'{self.regex_name} matched the empty string but should not have.')


class EvaluateHtmlRegex(TestCase):
    regex_name = 'html_element_regex'

    def test_span(self):
        input_string = '<span>Yowza! That’s a great regular expression.</span>'
        expected_match = ['<span>Yowza! That’s a great regular expression.</span>']
        matches = re.findall(html_element_regex, input_string)
        self.assertEqual(
            matches,
            expected_match,
            should_have_matched(self.regex_name, input_string, expected_match)
        )

    def test_two_elements(self):
        input_string = '<p>Learn about regular expressions here.</p><p>You\'re going to love them!</p>'
        expected_match = [
            '<p>Learn about regular expressions here.</p>',
            '<p>You\'re going to love them!</p>'
        ]
        matches = re.findall(html_element_regex, input_string)
        self.assertEqual(
            matches,
            expected_match,
            should_have_matched(self.regex_name, input_string, expected_match)
        )

    def test_multiline(self):
        input_string = """<h1>Regular Expressions</h1>
<h2>Quantifiers</h2>
<p>Quantifiers tell you how many of the preceding token are allowed.</p>
"""
        expected_match = [
            '<h1>Regular Expressions</h1>',
            '<h2>Quantifiers</h2>',
            '<p>Quantifiers tell you how many of the preceding token are allowed.</p>'
        ]
        matches = re.findall(html_element_regex, input_string)
        self.assertEqual(
            matches,
            expected_match,
            should_have_matched(self.regex_name, input_string, expected_match)
        )

    def test_not_html(self):
        input_string = 'I\'m not HTML!!'
        matches = re.findall(html_element_regex, input_string)
        self.assertEqual(
            matches,
            [],
            should_not_have_matched(self.regex_name, input_string))


class EvaluateHtmlRegexIncludingSingleTag(TestCase):
    regex_name = 'html_element_including_single_tags_regex'

    def test_span(self):
        input_string = '<span>Yowza! That’s a great regular expression.</span>'
        expected_match = ['<span>Yowza! That’s a great regular expression.</span>']
        matches = re.findall(html_element_including_single_tags_regex, input_string)
        self.assertEqual(
            matches,
            expected_match,
            should_have_matched(self.regex_name, input_string, expected_match)
        )

    def test_two_elements(self):
        input_string = '<p>Learn about regular expressions here.</p><p>You\'re going to love them!</p>'
        expected_match = [
            '<p>Learn about regular expressions here.</p>',
            '<p>You\'re going to love them!</p>'
        ]
        matches = re.findall(html_element_including_single_tags_regex, input_string)
        self.assertEqual(
            matches,
            expected_match,
            should_have_matched(self.regex_name, input_string, expected_match)
        )

    def test_multiline(self):
        input_string = """<h1>Regular Expressions</h1>
<h2>Quantifiers</h2>
<p>Quantifiers tell you how many of the preceding token are allowed.</p>
"""
        expected_match = [
                '<h1>Regular Expressions</h1>',
                '<h2>Quantifiers</h2>',
                '<p>Quantifiers tell you how many of the preceding token are allowed.</p>'
        ]
        matches = re.findall(html_element_including_single_tags_regex, input_string)
        self.assertEqual(
            matches,
            expected_match,
            should_have_matched(self.regex_name, input_string, expected_match)
        )

    def test_not_html(self):
        input_string = 'I\'m not HTML!!'
        matches = re.findall(html_element_including_single_tags_regex, input_string)
        self.assertEqual(
            matches,
            [],
            should_not_have_matched(self.regex_name, input_string))

    def test_single_tag(self):
        input_string = """<h1>Regular Expressions</h1>
    <img src=”http://placekitten.com/200/300” />"""
        expected_match = [
            '<h1>Regular Expressions</h1>',
            '<img src=”http://placekitten.com/200/300” />'
        ]
        matches = re.findall(html_element_including_single_tags_regex, input_string)
        self.assertEqual(
            matches,
            expected_match,
            should_have_matched(self.regex_name, input_string, expected_match)
        )
