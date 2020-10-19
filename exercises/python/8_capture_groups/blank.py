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

# Exercise 33: Match strings that start and end with the same word.
# We do want to capture the word.
# Assume all strings do not contain newlines.
word_bookend_regex = r''

# Exercise 34: Given a list of files in a directory (separated
# by newlines), identify which files have a vi swap file
# vi swap files look like this: .filename.swp
# So if there were a file in the directory called .favorite_regexes.txt.swp
# You would want to include favorite_regexes.txt in your results
vi_swap_regex = r''

# Exercise 35: Given data shaped like this:
#   03Sep2020 04:55:38 This is a message
#   03Oct2020 23:44:01 This is another message
# Extract:
#   the day as a group named day
#   the month as “month”
#   the year as “year”
#   the time as a group named “time”
#   the message as a group named “message”
#
# NOTE: you do not need to validate the date and time (for example, you don’t
# need to confirm that the date has a valid month or that the time is valid
# for a 24 hr clock) -- you can assume the data is clean. Simply extract the
# parts.
#
# Example result from the first line of sample data:
#   day=03
#   month=Sep
#   year=2020
#   time=04:55:38
#   message=This is a message
# SYNTAX: In python, named groups are designated by (?P<>)
# so a group named day would look like this: (?P<day>xxx)
# where xxx is the regex you would like to capture to this group
extract_log_parts_regex = r''
