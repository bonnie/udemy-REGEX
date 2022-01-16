# Write your regular expressions inside the raw string, for example: r'a+'

# Exercise 9: Match all strings with one or more space
# characters at the end, preparing to replace them
# with an empty string. Contents of the string before
# the spaces is not important
trailing_space_regex = r' +$'

# Exercise 10: Match strings that contain two tabs in a row
# anywhere in the string. Contents of the string are unimportant.
two_consecutive_tabs_regex = r'\t\t'

# Exercise 11: Match strings that contain two tabs, not
# necessarily in a row, anywhere in the string.
# Contents of the string are unimportant.
two_tabs_regex = r'\t.*\t'

# Exercise 12: Match strings that start with at least
# three digits from 0 to 5 (inclusive).
# Contents of the string are unimportant.
start_with_three_digits_regex = r'^[0-5]{3,}'

# Match entire strings that are six characters or longer and
# don't contain the letter `E` (capital or lowercase)
strings_without_e_regex = r'^[^Ee]{6,}$'
