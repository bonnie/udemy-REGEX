from unittest import TestCase
import re

from substitution import email_regex
from substitution import email_replacement
from substitution import html_tag_regex
from substitution import html_tag_replacement
from substitution import multiple_whitespace_regex
from substitution import multiple_whitespace_replacement
from substitution import outer_whitespace_regex
from substitution import outer_whitespace_replacement
from substitution import name_switch_regex
from substitution import name_switch_replacement
from substitution import multi_name_switch_regex
from substitution import multi_name_switch_replacement


def output_does_not_match(regex_name, input_string, expected, actual):
    return f'{regex_name} applied to "{input_string}" produced "{actual}" when it should have been "{expected}".'


class EvaluateEmailReplacement(TestCase):
    regex_name = 'email_regex'

    def test_whole_string_email(self):
        input_string = 'not.an.email@fakedomain.com'
        expected_output = '<<redacted>>'

        output = re.sub(
            email_regex,
            email_replacement,
            input_string,
        )
        self.assertEqual(
            output,
            expected_output,
            output_does_not_match(self.regex_name, input_string, expected_output, output))

    def test_multiple_emails(self):
        input_string = 'Please send to a@b.com and c@d.com. Thanks!'
        expected_output = 'Please send to <<redacted>> and <<redacted>>. Thanks!'
        output = re.sub(
            email_regex,
            email_replacement,
            input_string
        )
        self.assertEqual(
            output,
            expected_output,
            output_does_not_match(self.regex_name, input_string, expected_output, output))

    def test_no_emails(self):

        input_string = 'This string has no emails!!'
        expected_output = 'This string has no emails!!'
        output = re.sub(
            email_regex,
            email_replacement,
            input_string
        )
        self.assertEqual(
            output,
            expected_output,
            output_does_not_match(self.regex_name, input_string, expected_output, output))


class EvaluateHtmlReplacement(TestCase):
    regex_name = 'html_tag_regex'

    def test_simple(self):
        input_string = '<span>This is a span</span>'
        expected_output = 'This is a span'
        output = re.sub(
            html_tag_regex,
            html_tag_replacement,
            input_string
        )
        self.assertEqual(
            output,
            expected_output,
            output_does_not_match(self.regex_name, input_string, expected_output, output)
        )

    def test_multiple(self):
        input_string = '<span>This is a <b>span!</b></span><span>So is this.</span>'
        expected_output = 'This is a span!So is this.'
        output = re.sub(
            html_tag_regex,
            html_tag_replacement,
            input_string
        )
        self.assertEqual(
            output,
            expected_output,
            output_does_not_match(self.regex_name, input_string, expected_output, output)
        )

    def test_multiline(self):
        html = """<h1>Regular Expressions</h1>
<h2>Quantifiers</h2>
<p>Quantifiers tell you how many of the preceding token are allowed.</p>
"""
        output = re.sub(
            html_tag_regex,
            html_tag_replacement,
            html
        )
        self.assertEqual(
            output,
            """Regular Expressions
Quantifiers
Quantifiers tell you how many of the preceding token are allowed.
"""
        )

    def test_no_tags(self):
        input_string = 'No tags. Absolutely none.'
        expected_output = 'No tags. Absolutely none.'
        output = re.sub(
            html_tag_regex,
            html_tag_replacement,
            input_string
        )
        self.assertEqual(
            output,
            expected_output,
            output_does_not_match(self.regex_name, input_string, expected_output, output)
        )


class EvaluateMultipleWhitespaceReplacement(TestCase):
    regex_name = 'multiple_whitespace_regex'

    def test_single_line(self):
        input_string = 'hello,\t   my   name is  Bonnie'
        expected_output = 'hello, my name is Bonnie'
        output = re.sub(
            multiple_whitespace_regex,
            multiple_whitespace_replacement,
            input_string
        )
        self.assertEqual(
            output,
            expected_output,
            output_does_not_match(self.regex_name, input_string, expected_output, output))

    def test_multi_line(self):
        output = re.sub(
            multiple_whitespace_regex,
            multiple_whitespace_replacement,
            """it's   the

        most   wonderful\t\t\t time
        of the\tyear"""
        )
        self.assertEqual(
            output,
            'it\'s the most wonderful time of the\tyear'
        )

    def test_no_whitespace(self):
        input_string = """no_multiple_whitespace__at____all"""
        expected_output = """no_multiple_whitespace__at____all"""
        output = re.sub(
            multiple_whitespace_regex,
            multiple_whitespace_replacement,
            input_string
        )
        self.assertEqual(
            output,
            expected_output,
            output_does_not_match(self.regex_name, input_string, expected_output, output)
        )


class EvaluateOuterWhitespaceReplacement(TestCase):
    regex_name = 'outer_whitespace_regex'

    def test_leading_and_trailing_space(self):
        input_string = '   leading and trailing    \n\n'
        expected_output = 'leading and trailing'
        output = re.sub(
            outer_whitespace_regex,
            outer_whitespace_replacement,
            input_string
        )
        self.assertEqual(
            output,
            expected_output,
            output_does_not_match(self.regex_name, input_string, expected_output, output)
        )

    def test_punctuation_before_trailing(self):
        input_string = 'only trailing space!   \t'
        expected_output = 'only trailing space!'
        output = re.sub(
            outer_whitespace_regex,
            outer_whitespace_replacement,
            input_string
        )
        self.assertEqual(
            output,
            expected_output,
            output_does_not_match(self.regex_name, input_string, expected_output, output)
        )

    def test_punctuation_before_leading(self):
        input_string = '\n"Get to the back of the ship!" Tom said sternly.\n'
        expected_output = '"Get to the back of the ship!" Tom said sternly.'
        output = re.sub(
            outer_whitespace_regex,
            outer_whitespace_replacement,
            input_string
        )
        self.assertEqual(
            output,
            expected_output,
            output_does_not_match(self.regex_name, input_string, expected_output, output)
        )

    def test_no_outer_space(self):
        input_string = 'Do not launch me out of the atmosphere please!'
        expected_output = 'Do not launch me out of the atmosphere please!'
        output = re.sub(
            outer_whitespace_regex,
            outer_whitespace_replacement,
            input_string
        )
        self.assertEqual(
            output,
            expected_output,
            output_does_not_match(self.regex_name, input_string, expected_output, output)
        )


class EvaluateNameSwitchReplacement(TestCase):
    regex_name = 'name_switch_regex'

    def test_instructions_example(self):
        input_string = """Indira Ghandi
Morgan Freeman
Justin Finch-Fletchley
Flannery O'Connor"""
        expected_output = """Ghandi, Indira
Freeman, Morgan
Finch-Fletchley, Justin
O'Connor, Flannery"""
        output = re.sub(name_switch_regex, name_switch_replacement, input_string)
        self.assertEqual(
            output,
            expected_output,
            output_does_not_match(self.regex_name, input_string, expected_output, output)
        )

    def test_single_name_string(self):
        input_string = 'Indira Ghandi'
        expected_output = 'Ghandi, Indira'
        output = re.sub(name_switch_regex, name_switch_replacement, input_string)
        self.assertEqual(
            output,
            expected_output,
            output_does_not_match(self.regex_name, input_string, expected_output, output))

    def test_single_word_name(self):
        input_string = 'Pele'
        expected_output = 'Pele'
        output = re.sub(name_switch_regex, name_switch_replacement, input_string)
        self.assertEqual(
            output,
            expected_output,
            output_does_not_match(self.regex_name, input_string, expected_output, output))


class EvaluateMultiNameSwitchReplacement(TestCase):
    regex_name = 'multi_name_switch_regex'

    def test_instructions_example(self):
        input_string = """Indira Ghandi
Morgan Freeman
Justin Finch-Fletchley
Flannery O'Connor
Carlos Alberto Torres
Harriet Beecher Stowe"""
        expected_output = """Ghandi, Indira
Freeman, Morgan
Finch-Fletchley, Justin
O'Connor, Flannery
Torres, Carlos Alberto
Stowe, Harriet Beecher"""
        output = re.sub(
            multi_name_switch_regex,
            multi_name_switch_replacement,
            input_string
        )
        self.assertEqual(
            output,
            expected_output,
            output_does_not_match(self.regex_name, input_string, expected_output, output))

    def test_single_name(self):
        input_string = 'Indira Ghandi'
        expected_output = 'Ghandi, Indira'
        output = re.sub(
            multi_name_switch_regex,
            multi_name_switch_replacement,
            input_string
        )
        self.assertEqual(
            output,
            expected_output,
            output_does_not_match(self.regex_name, input_string, expected_output, output))

    def test_single_word_string(self):
        input_string = 'Pele'
        expected_output = 'Pele'
        output = re.sub(
            multi_name_switch_regex,
            multi_name_switch_replacement,
            input_string
        )
        self.assertEqual(
            output,
            expected_output,
            output_does_not_match(self.regex_name, input_string, expected_output, output))
