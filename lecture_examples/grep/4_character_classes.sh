# Flags key (from `man grep`)
    #  -c, --count
    #          Only a count of selected lines is written to standard output.
    #  -E, --extended-regexp
    #          Interpret pattern as an extended regular expression (i.e. force grep
    #          to behave as egrep).
    # -o, --only-matching
    #         Prints only the matching part of the lines.

######## LECTURE EXAMPLE 14: leading whitespace ########
#   Return 1 if the string has leading whitespace, 0 otherwise.

echo '\t leading whitespace' | grep -Ec '^\s+'
# 1

echo ' leading whitespace' | grep -Ec '^\s+'
# 1

echo 'no leading whitespace' | grep -Ec '^\s+'
# 0

echo 'trailing whitespace\t' | grep -Ec '^\s+'
# 0


######## LECTURE EXAMPLE 15: no leading whitespace ########
#   Return 1 if the string has no leading whitespace, 0 otherwise.

echo '\t leading whitespace' | grep -Ec '^\S+'
# 0

echo ' leading whitespace' | grep -Ec '^\S+'
# 0

echo 'no leading whitespace' | grep -Ec '^\S+'
# 1

echo 'trailing whitespace\t' | grep -Ec '^\S+'
# 1


######## LECTURE EXAMPLE 16: "stem" with word boundaries ########
#   Return matched part of the string that contains "stem" as a word.
#   That is, "stem" with word boundaries on either side.
#
#   Return nothing otherwise.
echo 'That rose has a lovely stem!' | grep -Eo '\bstem\b'
# stem

echo 'stem' | grep -Eo '\bstem\b'
# stem

echo 'What is your favorite operating system?' | grep -Eo '\bstem\b'
#

echo 'Your regex brilliance stems from all of your hard work.' | grep -Eo '\bstem\b'
#


######## LECTURE EXAMPLE 17: "stem" with non-word characters ########
#   Return matched part of the string that contains "stem" as a word.
#   That is, "stem" with non-word characters on either side.
#
#   Return nothing otherwise.
echo 'That rose has a lovely stem!' | grep -Eo '\Wstem\W'
#  stem!

echo 'stem' | grep -Eo '\Wstem\W'
#

echo 'What is your favorite operating system?' | grep -Eo '\Wstem\W'
#

echo 'Your regex brilliance stems from all of your hard work.' | grep -Eo '\Wstem\W'
#


######## LECTURE EXAMPLE 18: starts with word character, ends with non-digit ########
#   Return 1 if string starts with a word character and ends with a non-digit, 0 otherwise.
echo '7_' | grep -Ec '^\w.*\D$'
# 1

echo 'Who *are* you?' | grep -Ec '^\w.*\D$'
# 1

echo ' 1234!' | grep -Ec '^\w.*\D$'
# 0

echo 'Pennsylvania 6-5000' | grep -Ec '^\w.*\D$'
# 0

echo 'q' | grep -Ec '^\w.*\D$'
# 0

