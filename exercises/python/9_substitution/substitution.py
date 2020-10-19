# Write your regular expressions inside the raw string.
#      for example: r'a+'
# Add flags in a (?) string at the beginning of the regex.
#      for example r'(?m)a+'
# Group contents can be accessed with the syntax \groupnumber
#      for example, to reference the first group, use \1
#
# IMPORTANT NOTE: in python, the 'g' flag does not exist, and instead
# the notion of one match vs all matches is designated by
# which method you use. If a g flag is required, you may omit it;
# I will take care of the proper method in the tests. We will
# talk about methods in the python-specific section at the
# end of the course.

# Exercise 35: Replace all email addresses (using the
# simplified pattern description from exercises in
# character categories section) with the text
# `<<redacted>>` (no quotes)
#
# For reference, here's the description of the exercise for
# simplified email address:
# One or more word characters or . before the @, and at
# least one period after the @
#
# NOTE: In this exercise, the string may contain text other
# than the email address(es).
email_regex = r'\b[\w\.]+@[\w\.]+\.[\w]+\b'
email_replacement = r'<<redacted>>'

# Exercise 37: Strip html tags out of text
# For example, <b>bold statement</b> should become
# "bold statement" (no quotes).
# Note: strings may be multi-line
html_tag_regex = r'(?m)<.+?>'
html_tag_replacement = r''

# Exercise 38: Substitute any multiple whitespace
# characters (including newlines) with a single
# space character
multiple_whitespace_regex = r'(?s)\s{2,}'
multiple_whitespace_replacement = r' '


# Exercise 39: Strip off any whitespace characters
# from the beginning or end of a string, but let the
# whitespace in the middle stand.
# You may assume single-line strings
# This one is tricky! How do you keep the "middle"
# part from gobbling up the outer space, and yet
# still respect spaces in the middle?
outer_whitespace_regex = r'^\s*(.*\S)\s*$'
outer_whitespace_replacement = r'\1'

# Exercise 40: Switch a list of names (separated by newlines)
# from "first last" to "last, first".
#
# Assume only each line has only two words, each made up of word
# characters or `-` or `'` (without quotes)
#
# Example input:
# Indira Ghandi
# Morgan Freeman
# Justin Finch-Fletchley
# Flannery O'Connor
#
# Example output:
#
# Ghandi, Indira
# Freeman, Morgan
# Finch-Fletchley, Justin
# O'Connor, Flannery
name_switch_regex = r'(?m)^(\w+) ([\w\-\']+)$'
name_switch_replacement = r'\2, \1'

# Exercise 41: Building on the last exercise: Put last name
# first even if there are more than two words in the name
# (you may assume last name is only the last word)
# For example,
#   Carlos Alberto Torres → Torres, Carlos Alberto
#   Harriet Beecher Stowe → Stowe, Harriet Beecher
multi_name_switch_regex = r'(?m)^([\w ]+) ([\w\-\']+)$'
multi_name_switch_replacement = r'\2, \1'
