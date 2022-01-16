from unittest import TestCase
import re

from whitespace_and_boundaries import trailing_space_regex
from whitespace_and_boundaries import two_consecutive_tabs_regex
from whitespace_and_boundaries import two_tabs_regex
from whitespace_and_boundaries import start_with_three_digits_regex
from whitespace_and_boundaries import strings_without_e_regex


class EvaluateTrailingSpace(TestCase):

    def test_one_trailing_space(self):
        matches = re.search(trailing_space_regex, 'trail ')
        self.assertIsNotNone(
            matches,
            'trailing_space_regex did not match "trail " when it should have.'
        )

    def test_four_trailing_spaces(self):
        matches = re.search(trailing_space_regex, 'trail    ')
        self.assertIsNotNone(
            matches,
            'trailing_space_regex did not match "trail    " when it should have.'
        )

    def test_trailing_space_and_tab(self):
        matches = re.search(trailing_space_regex, 'trail \t')
        self.assertIsNone(
            matches,
            'trailing_space_regex matched "trail \t" when it should not have.'
        )

    def test_leading_space_no_trailing_space(self):
        matches = re.search(trailing_space_regex, '  hey, i have no space at the end')
        self.assertIsNone(
            matches,
            'trailing_space_regex matched "  hey, i have no space at the end" when it should not have.'
        )


class EvaluateConsecutiveTabs(TestCase):

    def test_tabs_in_middle(self):
        matches = re.search(two_consecutive_tabs_regex, 'tab\t\ttab')
        self.assertIsNotNone(
            matches,
            'two_consecutive_tabs_regex did not match "tab\t\ttab" when it should have.'
        )

    def test_tabs_at_beginning(self):
        matches = re.search(two_consecutive_tabs_regex, '\t\ttwotabs')
        self.assertIsNotNone(
            matches,
            'two_consecutive_tabs_regex did not match "\t\ttwotabs" when it should have.'
        )

    def test_more_than_two_tabs(self):
        matches = re.search(two_consecutive_tabs_regex, 'tabs\t\t\t')
        self.assertIsNotNone(
            matches,
            'two_consecutive_tabs_regex did not match "tabs\t\t\t" when it should have.'
        )

    def test_one_tab(self):
        matches = re.search(two_consecutive_tabs_regex, 'one\ttab')
        self.assertIsNone(
            matches,
            'two_consecutive_tabs_regex matched "one\ttab" when it should not have.'
        )

    def test_no_tabs(self):
        matches = re.search(two_consecutive_tabs_regex, 'no  tabs')
        self.assertIsNone(
            matches,
            'two_consecutive_tabs_regex matched "no  tabs" when it should not have.'
        )

    def test_separated_tabs(self):
        matches = re.search(two_consecutive_tabs_regex, '\tseparated\ttabs')
        self.assertIsNone(
            matches,
            'two_consecutive_tabs_regex matched "\tseparated\ttabs" when it should not have.'
        )


class EvaluateTwoTabs(TestCase):

    def test_separated_tabs(self):
        self.assertTrue(two_tabs_regex, '\tseparated\ttabs')

    def test_tabs_in_middle(self):
        matches = re.search(two_tabs_regex, 'tab\t\ttab')
        self.assertIsNotNone(
            matches,
            'two_tabs_regex did not match "tab\t\ttab" when it should have.'
        )

    def test_tabs_at_beginning(self):
        matches = re.search(two_tabs_regex, '\t\ttwotabs')
        self.assertIsNotNone(
            matches,
            'two_tabs_regex did not match "\t\ttwotabs" when it should have.'
        )

    def test_more_than_two_tabs(self):
        matches = re.search(two_tabs_regex, '\tta\tb\ts')
        self.assertIsNotNone(
            matches,
            'two_tabs_regex did not match "\tta\tb\ts" when it should have.'
        )

    def test_one_tab(self):
        matches = re.search(two_tabs_regex, 'one\ttab')
        self.assertIsNone(
            matches,
            'two_tabs_regex matched "one\ttab" when it should not have.'
        )

    def test_no_tabs(self):
        matches = re.search(two_tabs_regex, 'no  tabs')
        self.assertIsNone(
            matches,
            'two_tabs_regex matched "no  tabs" when it should not have.'
        )


class EvaluateThreeDigitStart(TestCase):

    def test_three_correct_digits(self):
        matches = re.search(start_with_three_digits_regex, '321 yay!')
        self.assertIsNotNone(
            matches,
            'start_with_three_digits_regex did not match "321 yay" when it should have.'
        )

    def test_more_than_three_correct_digits(self):
        matches = re.search(start_with_three_digits_regex, '54321 yay!')
        self.assertIsNotNone(
            matches,
            'start_with_three_digits_regex did not match "54321 yay" when it should have.'
        )

    def test_two_correct_digits(self):
        matches = re.search(start_with_three_digits_regex, '21 yay!')
        self.assertIsNone(
            matches,
            'start_with_three_digits_regex matched "21 yay!" when it should not have.'
        )

    def test_correct_digits_in_middle(self):
        matches = re.search(start_with_three_digits_regex, 'yay! 321!')
        self.assertIsNone(
            matches,
            'start_with_three_digits_regex matched "yay! 321!" when it should not have.'
        )

    def test_incorrect_digits(self):
        matches = re.search(start_with_three_digits_regex, '987654321 yay!')
        self.assertIsNone(
            matches,
            'start_with_three_digits_regex matched "987654321 yay!" when it should not have.'
        )


class EvaluateStringsWithoutE(TestCase):

    def test_regex(self):
        matches = re.search(strings_without_e_regex, 'Expressions')
        self.assertIsNone(
            matches,
            'strings_without_e_regex matched "Expressions" when it should not have.'
        )

    def test_python(self):
        matches = re.search(strings_without_e_regex, 'Python')
        self.assertIsNotNone(
            matches,
            'strings_without_e_regex did not match "Python" when it should have.'
        )

    def test_unique_newyork(self):
        matches = re.search(strings_without_e_regex, 'unique New York')
        self.assertIsNone(
            matches,
            'strings_without_e_regex matched "unique New York" when it should not have.'
        )

    def test_lol(self):
        matches = re.search(strings_without_e_regex, 'lol')
        self.assertIsNone(
            matches,
            'strings_without_e_regex matched "lol" when it should not have.'
        )

    def test_whazzup(self):
        matches = re.search(strings_without_e_regex, 'Whazzup????')
        self.assertIsNotNone(
            matches,
            'strings_without_e_regex did not match "Whazzup????" when it should have.'
        )

    def test_empty(self):
        matches = re.search(strings_without_e_regex, '')
        self.assertIsNone(
            matches,
            'strings_without_e_regex matched an empty string when it should not have.'
        )
