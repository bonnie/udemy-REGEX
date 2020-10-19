from unittest import TestCase
import re

from lookaround import commands_regex
from lookaround import name_regex
from lookaround import meta_tag_regex
from lookaround import word_before_semi_regex
from lookaround import non_pyfile_regex


def should_have_matched(regex, input_string, expected_match):
    return f'{regex} should have matched "{expected_match}"" for input string "{input_string}"'


def should_not_have_matched(regex, input_string):
    return f'{regex} matched input string "{input_string}" when it should not have.'


def empty_string_should_not_have_matched(regex):
    return f'{regex} should not have matched an empty input string'


class EvaluateCommandsRegex(TestCase):
    regex_name = 'commands_regex'

    def test_sample_matches(self):
        input_string = """udemy-regex git:(master) $ cd exercises
exercises git:(master) $ ls
js     python
exercises git:(master) $ cd python
python git:(master) $ ls
1_characters_and_quantities 5_flags                     9_lookaround
2_collections_and_ranges    6_greedy_vs_lazy            run_tests.sh
3_whitespace_and_boundaries 7_groups
4_character_categories      8_substitution
python git:(master) $ cd 9_lookaround
9_lookaround git:(master) $ ls
__pycache__ evaluate.py
9_lookaround git:(master) $ touch lookaround.py
"""
        expected_output = [
                'cd exercises',
                'ls',
                'cd python',
                'ls',
                'cd 9_lookaround',
                'ls',
                'touch lookaround.py'
            ]
        matches = re.findall(commands_regex, input_string)
        self.assertEqual(
            matches,
            expected_output,
            should_have_matched(self.regex_name, input_string, expected_output))


class NameRegex(TestCase):
    regex_name = 'name_regex'

    def test_sample_matches(self):
        input_string = """Name: Nanny McPhee
Email: nanny.mcphee@notarealdomain.com

Name: Muhammad Ali
Email: muhammad.ali@notarealemaildomain.com
"""
        expected_output = ['Nanny McPhee', 'Muhammad Ali']
        matches = re.findall(name_regex, input_string)
        self.assertEqual(
            matches,
            expected_output,
            should_have_matched(self.regex_name, input_string, expected_output))


class EvaluateMetaTagRegex(TestCase):
    regex_name = 'meta_tag_regex'

    def test_sample_tags(self):
        input_string = 'a_tag, meta__another_tag, meta__third_tag, fourth_tag'
        expected_output = ['another_tag', 'third_tag']
        matches = re.findall(meta_tag_regex, input_string)
        self.assertEqual(
            matches,
            expected_output,
            should_have_matched(self.regex_name, input_string, expected_output))


class EvaluteWordBeforeSemicolonRegex(TestCase):
    regex_name = word_before_semi_regex

    def test_word_before_semicolon(self):
        input_string = 'I love the semicolon; it\'s unnecessary, but graceful and sophtisticated'
        expected_output = ['semicolon']
        matches = re.findall(word_before_semi_regex, input_string)
        self.assertEqual(
            matches,
            expected_output,
            should_have_matched(self.regex_name, input_string, expected_output))

    def test_many_semicolons(self):
        input_string = 'He was bald, or mostly bald – a crop of white stubble gilded his ears – and gave off an air of pent-up energy, of emotions kept in check; the same sense Lamb had had watching the video of him, shot eighteen years ago, through a two-way mirror in one of Regent’s Park’s luxury suites. Joke. These were underground, and were where the Service’s more serious debriefings took place; those which it might later prove politic to deny had happened.'
        expected_output = ['check', 'place']
        matches = re.findall(word_before_semi_regex, input_string)
        self.assertEqual(
            matches,
            expected_output,
            should_have_matched(self.regex_name, input_string, expected_output))

    def test_multiline(self):
        input_string = """Mabel the Cat had made a big pot of goulash; it was simmering on the stove.

Goulash was Harry the Dog's favorite; the scent drew him to the kitchen.

As Mabel's culinary efforts continued, with bread baking in the oven and a cabbage dish just begun, she admonished Harry to keep out of her way; but Harry's ability to remain at a decent distance from the stove was severely challenged.

Mabel did not take kindly to the encroachment of Harry into her personal cooking space; indeed, she at one point responded to the sudden appearance of his muzzle at her elbow with a distinct and species-appropriate hiss.

Harry was an animal driven by primal need to gain immediate access to the goulash; his options for achieving that aim were, however, limited.

Mabel's cooking prowess, honed through years of complex feasts, was formidable; the interruption of its application ill-advised.

The scent of the baking bread was sublime, the perfume of the goulash intoxicating.

On one important point Harry and Mabel agreed; that is, it would be better for all if Harry found somewhere else to be while Mabel finished cooking."""
        expected_output = [
                'goulash',
                'favorite',
                'way',
                'space',
                'goulash',
                'formidable',
                'agreed'
            ]
        matches = re.findall(word_before_semi_regex, input_string)
        self.assertEqual(
            matches,
            expected_output,
            should_have_matched(self.regex_name, input_string, expected_output))


class EvaluteNonPyfileRegex(TestCase):
    regex_name = 'non_pyfile_regex'

    def test_sample_files(self):
        input_string = """happy.js
happy.py
sad.sh
sad.py
pyrite.go
"""
        expected_match = ['happy.js', 'pyrite.go']
        matches = re.findall(non_pyfile_regex, input_string)
        self.assertEqual(
            matches,
            expected_match,
            should_have_matched(self.regex_name, input_string, expected_match))
