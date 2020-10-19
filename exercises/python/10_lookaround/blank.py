# Write your regular expressions inside the raw string.
#      for example: r'a+'
# Add flags in a (?) string at the beginning of the regex.
#      for example r'(?m)a+'
# Group contents can be accessed with the syntax \groupnumber
#      for example, to reference the first group, use \1
#
# IMPORTANT NOTE #1: in python, the 'g' flag does not exist, and instead
# the notion of one match vs all matches is designated by
# which method you use. If a g flag is required, you may omit it;
# I will take care of the proper method in the tests. We will
# talk about methods in the python-specific section at the
# end of the course.
#
# IMPORTANT NOTE #2:
# For performance reasons, Python does not allow lookbehinds
# that have non-fixed-width (that is, lookbehinds with quanitifers
# that could match a variable number of characters). If you find
# yourself wanting to use a negative lookbehind with variable
# quantifiers, you will need to instead match the tokens without
# a lookbehind, and use a group to capture the intended part of
# the string.

# Exercise 42: Given a file with command-line capture, find
# all the commands. The prompt looks like this:
#
# directoryname git:(branchname) $
#
# Where directoryname and branchname are the working directory
# and git branch, respectively.
#
# The regular expression should capture only commands,
# not output (which would be on lines that did not start with
# a prompt), and not the prompts themselves.
#
# Example string:
# udemy-regex git:(master) $ cd exercises
# exercises git:(master) $ ls
# js     python
# exercises git:(master) $ cd python
# python git:(master) $ ls
# 1_characters_and_quantities 5_flags                     9_lookaround
# 2_collections_and_ranges    6_greedy_vs_lazy            run_tests.sh
# 3_whitespace_and_boundaries 7_groups
# 4_character_categories      8_substitution
# python git:(master) $ cd 9_lookaround
# 9_lookaround git:(master) $ ls
# __pycache__ evaluate.py
# 9_lookaround git:(master) $ touch lookaround.py
commands_regex = r''

# Exercise 43: There's a document formatted so that each
# name is on its own line preceded by "Name: " (no quotes).
# Capture all the names, without the preceding "Name: " string.
# Example document:
#
# Name: Nanny McPhee
# Email: nanny.mcphee@notarealdomain.com
#
# Name: Muhammad Ali
# Email: muhammad.ali@notarealemaildomain.com
name_regex = r''

# Exercise 44: You have a string containing tags,
# separated by commas. Each tag contains only letters,
# numbers and underscores.
#
# Capture the tags that start with `meta__` (no quotes).
# Capture only the part of the tags AFTER the `meta__`
#
# Example tag string:
# a_tag, meta__another_tag, meta__third_tag, fourth_tag
meta_tag_regex = r''

# Exercise 45: Find each word directly before a semicolon
# in a block of text (but do not capture the semicolon).
# Text may be multi-line.
word_before_semi_regex = r''

# Exercise 45: Given a list of file names, capture files
# that contain `py` (without quotes) but NOT at the end of
# the string (that is, not python files)
# HINT: use negative lookbehind from the end of
# the string
#
# Example file list:
# happy.js
# happy.py
# sad.sh
# sad.py
#
# Output: happy.js
non_pyfile_regex = r''
