# Flags key (from `man grep`)
    #  -c, --count
    #          Only a count of selected lines is written to standard output.
    #  -E, --extended-regexp
    #          Interpret pattern as an extended regular expression (i.e. force grep
    #          to behave as egrep).


######## LECTURE EXAMPLE 11: leading spaces ########
# Return the input string if it starts with one or more space characters.
echo '  space in the middle' | grep -E '^ +.*'
#   space in the middle

echo 'no leading space' | grep -E '^ +.*'
# 


######## LECTURE EXAMPLE 12: Match full sentences ########
# Return 1 if string represents a sentence, 0 otherwise
#  In this case, a sentence is defined by starting with a capital
#  letter, and ending with sentence punctuation: ! . ?
#  There should be no sentence punctuation in the middle.
echo 'Do you want to get coffee with me?' | grep -Ec '^[A-Z][^\.!?]+[\.?!]$'
# 1

echo 'I love kittens!' | grep -Ec '^[A-Z][^\.!?]+[\.?!]$'
# 1

echo 'This is the best Udemy course ever. Why are you laughing?' | grep -Ec '^[A-Z][^\.!?]+[\.?!]$'
# 0


######## LECTURE EXAMPLE 13: full sentence with multiple punctuation ########
# Return 1 if string represents a sentence, 0 otherwise
#  In this case, a sentence is defined by starting with a capital
#  letter, and ending with sentence punctuation: ! . ?
#  There should be no sentence punctuation in the middle.
echo 'Do you want to get coffee with me?' | grep -Ec '^[A-Z][^\.!?]+[\.?!]+$'
# 1

echo 'I love kittens!' | grep -Ec '^[A-Z][^\.!?]+[\.?!]+$'
# 1

echo 'Who do you think you are?!?' | grep -Ec '^[A-Z][^\.!?]+[\.?!]+$'
# 1

echo 'This is the best Udemy course ever. Why are you laughing?' | grep -Ec '^[A-Z][^\.!?]+[\.?!]+$'
# 0

