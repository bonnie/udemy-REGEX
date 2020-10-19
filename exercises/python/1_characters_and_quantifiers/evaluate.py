from unittest import TestCase
import re

from characters_regex import call_regex
from characters_regex import hiss_regex
from characters_regex import yay_regex
from characters_regex import yeehaw_regex


class EvaluateYeehaw(TestCase):

    def test_two_es_no_exclamation(self):
        matches = re.fullmatch(yeehaw_regex, 'yeehaw')
        self.assertIsNotNone(
            matches,
            'yeehaw_regex did not match "yeehaw" when it should have.'
        )

    def test_four_es_one_exclamation(self):
        matches = re.fullmatch(yeehaw_regex, 'yeeeehaw!')
        self.assertIsNotNone(
            matches,
            'yeehaw_regex did not match "yeeeehaw" when it should have.'
        )

    def test_one_e(self):
        matches = re.fullmatch(yeehaw_regex, 'yehaw')
        self.assertIsNone(
            matches,
            'yeehaw_regex matched "yehaw" when it should not have.'
        )

    def test_four_excalamtions(self):
        matches = re.fullmatch(yeehaw_regex, 'yeehaw!!!!')
        self.assertIsNone(
            matches,
            'yeehaw_regex matched "yeehaw!!!!" when it should not have.'
        )


class EvaluateHiss(TestCase):

    def test_two_s(self):
        matches = re.fullmatch(hiss_regex, 'hiss')
        self.assertIsNotNone(
            matches,
            'hiss_regex did not match "hiss" when it should have.'
        )

    def test_five_s(self):
        matches = re.fullmatch(hiss_regex, 'hisssss')
        self.assertIsNotNone(
            matches,
            'hiss_regex did not match "hisssss" when it should have.'
        )

    def test_one_s(self):
        matches = re.fullmatch(hiss_regex, 'his')
        self.assertIsNone(
            matches,
            'hiss_regex matched "his" when it should not have.'
        )


class EvaluateYay(TestCase):

    def test_two_bang(self):
        matches = re.fullmatch(yay_regex, 'Yay!!')
        self.assertIsNone(
            matches,
            'yay_regex did not match "Yay!!" when it should have.'
        )

    def test_three_bang(self):
        matches = re.fullmatch(yay_regex, 'Yay!!!')
        self.assertIsNotNone(
            matches,
            'yay_regex did not match "Yay!!!" when it should have.'
        )

    def test_six_bang(self):
        matches = re.fullmatch(yay_regex, 'Yay!!!!!!')
        self.assertIsNotNone(
            matches,
            'yay_regex did not match "Yay!!!!!!" when it should have.'
        )

    def test_seven_bang(self):
        matches = re.fullmatch(yay_regex, 'Yay!!!!!!!')
        self.assertIsNone(
            matches,
            'yay_regex matched "Yay!!!!!!!" when it should not have.'
        )


class EvaluateCall(TestCase):

    def test_no_q(self):
        matches = re.fullmatch(call_regex, 'Call me maybe')
        self.assertIsNotNone(
            matches,
            'call_regex did not match "Call me maybe" when it should have.'
        )

    def test_one_q(self):
        matches = re.fullmatch(call_regex, 'Call me maybe?')
        self.assertIsNotNone(
            matches,
            'call_regex did not match "Call me maybe?" when it should have.'
        )

    def test_twelve_q(self):
        matches = re.fullmatch(call_regex, 'Call me maybe????????????')
        self.assertIsNotNone(
            matches,
            'call_regex did not match "Call me maybe????????????" when it should have.'
        )
