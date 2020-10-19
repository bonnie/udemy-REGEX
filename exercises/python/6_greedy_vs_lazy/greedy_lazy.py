# Write your regular expressions inside the raw string.
#      for example: r'a+'
# Add flags in a (?) string at the beginning of the regex.
#      for example r'(?m)a+'
#
# IMPORTANT NOTE: in python, the 'g' flag does not exist, and instead
# the notion of one match vs all matches is designated by
# which method you use. If a g flag is required, you may omit it;
# I will take care of the proper method in the tests. We will
# talk about methods in the python-specific section at the
# end of the course.

# Exercise 25: Continuing from the exercises from last section:
# using the same Robert Frost text, find the shortest first
# phrase that starts and ends with “and” (no quotes, case doesn’t matter)
# The text:
#
# The woods are lovely, dark, and deep,
# But I have promises to keep,
# And miles to go before I sleep,
# And miles to go before I sleep.
shortest_first_and_bookend_regex = r'(?sim)and.*?and'

# Exercise 26: Find as many non-overlapping strings as you
# can that start with ‘s’ (no quotes, case sensitive) and ends
# with ‘e’ (no quotes). Matched strings should be all on the
# same line.
non_overlapping_se_strings_regex = r's.*?e'

# Exercise 27: In an HTML string, find all the elements
# (including surrounding tags). That is, find strings that start
# with a string in angle brackets (for example, <i>) and end
# with a string in angle brackets that starts with a slash (for
# example, </i>). HTML strings may be multiline.
#
# NOTE: You don't yet have the tools to deal with nested
# elements (like <p>Don't you just <b>love</b> regexes?</p>)
# We will discuss this case in the next lecture on groups!
html_element_regex = r'(?m)<.+?>.*?<\/.+?>'

# Exercise 28: For an added challenge, try the last exercise,
# but also capture elements that only have *only one tag* that
# ends with /> (because the element has no contents to put
# between tags, for example,
# <img src=”http://placekitten.com/200/300” /> )
html_element_including_single_tags_regex = r'(?m)<.+?>?.*?<?\/.+?>'
