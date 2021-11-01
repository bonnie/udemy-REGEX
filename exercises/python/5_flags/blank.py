# Write your regular expressions inside the raw string.
#      for example: r'a+'
# Add flags in the (?) part at the beginning of the regex.
#      for example r'(?m)a+'
# If no flags are required, remove the (?) part
#
#
# IMPORTANT NOTE: in python, the 'g' flag does not exist, and instead
# the notion of one match vs all matches is designated by
# which method you use. If a g flag is required, you may omit it;
# I will take care of the proper method in the tests. We will
# talk about methods in the python-specific section at the
# end of the course.


# Exercise 19: Match he or hey, with any capitalization.
# The he or hey may be anywhere in the string; only match
# the he / hey part.
he_hey_regex = r'(?)'

# Exercise 20: Capture all the words that start with "se"
# (without quotes) in a string (case insensitive)
se_start_regex = r'(?)'

# Exercise 21: Given this block of text (the last four
# lines of Robert Frost’s Stopping by the Woods on a
# Snowy Evening), find all the lines that end with eep.
# (including the period). Capture the entire line.
#
# The woods are lovely, dark, and deep,
# But I have promises to keep,
# And miles to go before I sleep,
# And miles to go before I sleep.
eep_regex = r'(?)'

# Exercise 22: Using the same poem lines as above, find only the
# first phrase on a single line that starts with "to" and
# ends with "eep" (without quotes).
to_eep_regex = r'(?)'

# Exercise 23: Using the same poem lines as above, capture only
# the first word that starts with an a (it could be a capital
# or lower case a)
first_a_regex = r'(?)'

# Exercise 24: Using the same poem lines as above, find the first
# phrase that starts and ends with "and" (no quotes, case
# doesn’t matter). The phrase may span multiple lines.
#
# Want to know how to find the *shortest* first phrase? That's
# next lecture: greedy vs lazy!
and_bookends_regex = r'(?)'

