# Write your regular expressions inside the raw string, for example: r'a+'

# Exercise 5: Match a string that represents a binary number
# (contains only 0s and 1s)
binary_regex = r'[01]+'

# Exercise 6: Match a potential Hawaiian word
# from this collection of letters: AEIOUHKLMNPW
# Apostrophe is an option for all but the first letter.
# First letter can be lowercase or capital; other
# letters must be lowercase. The word must contain one
# or more letters.
hawaiian_regex = r'[AEIOUHKLMNPWaeiouhklmnpw][aeiouhklmnpw\']*'

# Exercise 7: Match a telephone number of the format 555-555-5555
# (where each of the 5s could be any number)
telephone_regex = r'[0-9]{3}-[0-9]{3}-[0-9]{4}'

# Exercise 8: Match strings that are at least six characters
# and don’t contain the letter A (uppercase or lowercase)
six_plus_no_a_regex = r'[^aA]{6,}'
