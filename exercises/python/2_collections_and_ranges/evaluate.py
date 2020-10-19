from unittest import TestCase
import re

from collections_and_ranges import binary_regex
from collections_and_ranges import hawaiian_regex
from collections_and_ranges import telephone_regex
from collections_and_ranges import six_plus_no_a_regex


class EvaluateBinary(TestCase):

    def test_zero(self):
        matches = re.fullmatch(binary_regex, '0')
        self.assertIsNotNone(
            matches,
            'binary_regex did not match "0" when it should have.'
        )

    def test_empty(self):
        matches = re.fullmatch(binary_regex, '')
        self.assertIsNone(
            matches,
            'binary_regex matched an empty string when it should not have.'
        )

    def test_long(self):
        matches = re.fullmatch(binary_regex, '0110100110')
        self.assertIsNotNone(
            matches,
            'binary_regex did not match "0110100110" when it should have.'
        )

    def test_not_binary(self):
        matches = re.fullmatch(binary_regex, '40')
        self.assertIsNone(
            matches,
            'binary_regex matched "40" when it should not have.'
        )


class EvaluateHawaiian(TestCase):

    def test_aloha(self):
        matches = re.fullmatch(hawaiian_regex, 'Aloha')
        self.assertIsNotNone(
            matches,
            'hawaiian_regex did not match "Aloha" when it should have.'
        )

    def test_empty(self):
        matches = re.fullmatch(hawaiian_regex, '')
        self.assertIsNone(
            matches,
            'hawaiian_regex matched an empty string when it should not have.'
        )

    def test_long(self):
        matches = re.fullmatch(hawaiian_regex, 'humuhumunukunukuapua\'a')
        self.assertIsNotNone(
            matches,
            'hawaiian_regex did not match "a" when it should have.'
        )

    def test_caps_in_middle(self):
        matches = re.fullmatch(hawaiian_regex, 'HolOholo')
        self.assertIsNone(
            matches,
            'hawaiian_regex matched "HolOholo" when it should not have.'
        )

    def test_not_hawaiian(self):
        matches = re.fullmatch(hawaiian_regex, 'Bacana')
        self.assertIsNone(
            matches,
            'hawaiian_regex matched "Bacana" when it should not have.'
        )


class EvaluateTelephone(TestCase):
    def test_valid(self):
        matches = re.fullmatch(telephone_regex, '123-456-7890')
        self.assertIsNotNone(
            matches,
            'telephone_regex did not match "7890" when it should have.'
        )

    def test_too_short(self):
        matches = re.fullmatch(telephone_regex, '12-456-7890')
        self.assertIsNone(
            matches,
            'telephone_regex matched "7890" when it should not have.'
        )

    def test_too_long(self):
        matches = re.fullmatch(telephone_regex, '1234-456-7890')
        self.assertIsNone(
            matches,
            'telephone_regex matched "7890" when it should not have.'
        )

    def test_not_numbers(self):
        matches = re.fullmatch(telephone_regex, 'abc-def-hijk')
        self.assertIsNone(
            matches,
            'telephone_regex matched "hijk" when it should not have.'
        )

    def test_no_dashes(self):
        matches = re.fullmatch(telephone_regex, '1234567890')
        self.assertIsNone(
            matches,
            'telephone_regex matched "1234567890" when it should not have.'
        )


class EvaluateSixPlusNoA(TestCase):
    def test_regex(self):
        matches = re.fullmatch(six_plus_no_a_regex, 'Regular Expressions')
        self.assertIsNone(
            matches,
            'six_plus_no_a_regex matched "Expressions" when it should not have.'
        )

    def test_python(self):
        matches = re.fullmatch(six_plus_no_a_regex, 'Python')
        self.assertIsNotNone(
            matches,
            'six_plus_no_a_regex did not match "Python" when it should have.'
        )

    def test_unique_newyork(self):
        matches = re.fullmatch(six_plus_no_a_regex, 'unique New York')
        self.assertIsNotNone(
            matches,
            'six_plus_no_a_regex did not match "York" when it should have.'
        )

    def test_aloha(self):
        matches = re.fullmatch(six_plus_no_a_regex, 'ALOHA')
        self.assertIsNone(
            matches,
            'six_plus_no_a_regex matched "ALOHA" when it should not have.'
        )
