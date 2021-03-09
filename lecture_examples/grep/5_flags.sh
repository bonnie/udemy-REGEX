# Flags key (from `man grep`)
    #  -E, --extended-regexp
    #          Interpret pattern as an extended regular expression (i.e. force grep
    #          to behave as egrep).
    #
    #  -i, --ignore-case
    #         Perform case insensitive matching.  By default, grep is case sensitive.
    #
    #  -m num, --max-count=num
    #         Stop reading the file after num matches.

######## LECTURE EXAMPLE 19: Start with `Hello`, end with `bye`, no flags ########
#  Unfortunately, there is no grep equivalent to the multi-line flag.
#     with grep, multi-line flag (^ is beginning of line, not file; $ is
#     end of line, not file) is *always* applied.
#
#  Only built-in grep is covered in this course, but you can 
#     anchor ^ and $ to the start and end of the string (not each line)
#     with awk (built-in to *nix systems) or pcre2grep (which you
#     can download from http://www.pcre.org/ and compile).


######## LECTURE EXAMPLE 20: Start with `Hello`, end with `bye` ########
#  multiline flag
#     Return first line that starts with Hello and ends with bye.
#     Do not allow newline characters in between.
#     As noted above, multi-line is always applied with grep.

grep -E -m1 '^Hello.*bye!$' files/hello_goodbye.txt
# Hello. Goodbye!


######## LECTURE EXAMPLE 21: Start with `Hello`, end with `bye`,  ########
#  multiline and global flags
#  NOTE: multiline and global always applied with grep
#    so for this example we simply remove the -m1 flag.

grep -E '^Hello.*bye!$' files/hello_goodbye.txt
# Hello. Goodbye!
# Hello, how are you doing today? Hope you’re having a good one. Goodbye!


######## LECTURE EXAMPLE 21: Start with `Hello`, end with `bye`,  ########
#  multiline, global and case insensitive flags

grep -Ei '^Hello.*bye!$' files/hello_goodbye.txt
# Hello. Goodbye!
# Hello, how are you doing today? Hope you’re having a good one. Goodbye!
# Hello! It’s been great talking to you. Bye!


######## LECTURE EXAMPLE 23: Start with `Hello`, end with `bye` ########
#  multiline, global, case insensitive and single-line flags
# 
#  Unfortunately, there is no grep equivalent to the single-line flag.
#     With grep, you cannot match patterns across multiple lines.
#
#  Only built-in grep is covered in this course, but you can
#     search across multiple lines with pcre2grep (which you can
#     download from http://www.pcre.org/ and compile).