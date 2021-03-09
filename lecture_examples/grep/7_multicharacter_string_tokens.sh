# Flags key (from `man grep`)
    #  -c, --count
    #          Only a count of selected lines is written to standard output.
    #  -E, --extended-regexp
    #          Interpret pattern as an extended regular expression (i.e. force grep
    #          to behave as egrep)
    #  -i, --ignore-case
    #         Perform case insensitive matching.  By default, grep is case sensitive.
    #  -o, --only-matching
    #         Prints only the matching part of the lines.

######## LECTURE EXAMPLE 29: Multiple 'kittens' ########
#  Return all substrings that contain the string 'kittens' one or more times.
#  Note: grep returns results on multiple lines, not in an array.

echo 'kittens' | grep -Eo '(kittens)+'
# kittens

# Note, the regex doesn't allow any characters between repeated 'kittens'.
# So this will pick up all the kittens individually
echo 'I love kittens kittens kittens' | grep -Eo '(kittens)+'
# kittens
# kittens
# kittens

echo 'puppies are the best!' | grep -Eo '(kittens)+'
# 


######## LECTURE EXAMPLE 30: Multiple Wows ########
#  Find strings made up entirely of or more non-overlapping W0W or WOW strings.

echo 'W0WWOWW0W' | grep -Ec '^(W[0O]W)+$'
# 1

echo 'WOWOWOW' | grep -Ec '^(W[0O]W)+$'
# 0


######## LECTURE EXAMPLE 31: Multi-character string options without groups ########
#  Return the first instance of kittens, foals or ducklings in the string.

echo 'Can never have enough kittens!' | grep -Eo 'kittens|foals|ducklings'
# kittens


# Unfortunately, the -m flag only restricts to the first *line*, not the first
# *match*. So, both matches are returned here. 
# 
# You can isolate the first match by piping to head 1, since each result
# is on its own line.
# 
# Only built-in grep is covered in this course, but you can stop searching
#     after the first match with awk (built-in to *nix systems) or 
#     pcre2grep (which you can download from http://www.pcre.org/
#     and compile).
echo 'I love kittens and ducklings!' | grep -Eo 'kittens|foals|ducklings' | head -1
# kittens

echo 'Those foals are so cute!' | grep -Eo 'kittens|foals|ducklings'
# foals

echo 'I just bought a toaster.' | grep -Eo 'kittens|foals|ducklings'
# 


######## LECTURE EXAMPLE 32: Multi-character string options inside larger regex ########
#  Return string that professes love for a group of cute animals.

echo 'Have you noticed how much I love kittens?' | grep -Eo 'I love (kitten|foal|duckling)s'
# I love kittens

echo 'I love ducklings!' | grep -Eo 'I love (kitten|foal|duckling)s'
# I love ducklings

echo 'I hate all cute animals. I cannot believe Bonnie is using this example.' | grep -Eo 'I love (kitten|foal|duckling)s'
# 


######## LECTURE EXAMPLE 33: 24 hr clock ########
#  Return 1 if string is a valid time on a 24 hour clock, 0 otherwise.

echo '5:43' | grep -Ec '^(1?\d|2[0-3]):[0-5]\d$'
# 1

echo '15:08' | grep -Ec '^(1?\d|2[0-3]):[0-5]\d$'
# 1

echo '23:12' | grep -Ec '^(1?\d|2[0-3]):[0-5]\d$'
# 1

echo '28:33' | grep -Ec '^(1?\d|2[0-3]):[0-5]\d$'
# 0

echo '12:89' | grep -Ec '^(1?\d|2[0-3]):[0-5]\d$'
# 0
