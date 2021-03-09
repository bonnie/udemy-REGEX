# Flags key (from `man grep`)
    #  -c, --count
    #          Only a count of selected lines is written to standard output.
    #  -E, --extended-regexp
    #          Interpret pattern as an extended regular expression (i.e. force grep
    #          to behave as egrep)
    #  -i, --ignore-case
    #         Perform case insensitive matching.  By default, grep is case sensitive.
    #  -m num, --max-count=num
    #         Stop reading the file after num matches.
    #  -o, --only-matching
    #         Prints only the matching part of the lines.

######## LECTURE EXAMPLE 24: zero or more greedy example ########
#   Match the string 'gr' followed by as many e's as possible.

echo 'greeeeeeeeeeedy' | grep -Eo 'gre*'
# greeeeeeeeeee

echo 'ogre' | grep -Eo 'gre*'
# gre

echo 'grand piano' | grep -Eo 'gre*'
# gr

echo 'potato' | grep -Eo 'gre*'
# 


######## LECTURE EXAMPLE 25: 'zero or more' lazy example ########
#   Match the string 'la' followed by as few a's as possible.

echo 'laaaaaaaaaaaaazy' | grep -Eo 'la*?'
# l

echo 'loop' | grep -Eo 'la*?'
# l

echo 'potato' | grep -Eo 'la*?'
# 


######## LECTURE EXAMPLE 26: 'one or more' lazy example ########
#   Match the string 'l' followed by one or more 'a's, as few as possible.

echo 'laaaaaaaaaaaaazy' | grep -Eo 'la+?'
# la

echo 'loop' | grep -Eo 'la+?'
# 

echo 'potato' | grep -Eo 'la+?'
# 


######## LECTURE EXAMPLE 28: Match sentence, lazy matching ########
#   Return 1 if the string represents a sentence, 0 otherwise.
#   A sentence in this case means starting with a capital letter,
#   and ending with a period, exclamation point, or question mark.

echo 'Do you want to get coffee with me?' | grep -Ec '^[A-Z].*?[\.!?]$'
# 1

echo 'I love kittens!' | grep -Ec '^[A-Z].*?[\.!?]$'
# 1

#  note, this is two sentences, so why does it match here when it didn't in
#  lecture example 10 (2_collections_and_range.sh)?
#  Slight difference: lazy .*? CAN match a . ? ! if that's the only way to make
#  the regex work.
echo 'This is the best Udemy course ever. Why are you laughing?' | grep -Ec '^[A-Z].*?[\.!?]$'
# 1

echo "'sup?" | grep -Ec '^[A-Z].*?[\.!?]$'
# 0

echo 'Kittens are' | grep -Ec '^[A-Z].*?[\.!?]$'
# 0


######## LECTURE EXAMPLE 28: Start with "Hello", end with "bye", lazy matching ########
#   Return all strings that start with Hello and end with bye.
#   NOTE: lazy does not make a difference here since grep does not match
#   multi-line strings.

grep -Ei '^Hello.*?bye!$' files/hello_goodbye.txt
# Hello. Goodbye!
# Hello, how are you doing today? Hope you’re having a good one. Goodbye!
# Hello! It’s been great talking to you. Bye!]

