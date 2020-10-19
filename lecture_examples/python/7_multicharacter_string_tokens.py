import re


# LECTURE EXAMPLE 29: Multi-character string options without groups
def find_cute_animal(string):
    """Return the first instance of kittens, foals or ducklings in the string.

    Return None if there is no such instance.

    non-verbose regex = r'kittens|foals|ducklings',
    flags: none

    >>> find_cute_animal('Can never have enough kittens!')
    'kittens'

    >>> find_cute_animal('I love kittens and ducklings!')
    'kittens'

    >>> find_cute_animal('Those foals are so cute!')
    'foals'

    >>> find_cute_animal('I just bought a toaster.')
    """

    match = re.search(
        r"""
            kittens   # the string kittens
            |         # a delimiter meaning "or" for multi-character strings
            foals     # the string foals
            |         # a delimiter meaning "or" for multi-character strings
            ducklings # the string ducklings
        """,
        string,
        flags=re.VERBOSE
    )

    if match is None:
        return

    return match.group(0)


# LECTURE EXAMPLE 30: Multi-character string options inside larger regex
def find_cute_animal_love(string):
    """Return string that professes love for a group of cute animals.

    Return None if such a string is not found.

    non-verbose regex: r'I love (kitten|foal|duckling)s',
    flags: none

    >>> find_cute_animal_love('Have you noticed how much I love kittens?')
    'I love kittens'

    >>> find_cute_animal_love('I love ducklings!')
    'I love ducklings'

    >>> find_cute_animal_love('I hate all cute animals. I cannot believe Bonnie is using this example.')
    """

    match = re.search(
        r"""
            I\ love         # the string 'I love'
            \ (             # a space character, then the start of a group for multi-character options
                kitten      # the string 'kitten'
                |           # a delimiter meaning "or" for multi-character strings
                foal        # the string 'foal'
                |           # a delimiter meaning "or" for multi-character strings
                duckling    # the string 'duckling'
            )               # end of group for multi-character options
            s               # the letter s
        """,
        # r'I love\ (kitten|foal|duckling)s',
        string,
        flags=re.VERBOSE
    )

    if match is None:
        return None

    return match.group(0)


# LECTURE EXAMPLE 31: Multiple 'kittens'
def match_one_or_more_kittens(string):
    """Return all substrings that contain the string 'kittens' one or more times.

    The substrings need to be non-overlapping, and if there's anything between
    them, they will be counted as multiple strings.

    non-verbose regex: r'(kittens)+'
    flags: none

    >>> match_one_or_more_kittens('kittens')
    ['kittens']

    >>> match_one_or_more_kittens('kittenskittenskittens')
    ['kittenskittenskittens']

    Note, the regex doesn't allow any characters between kittens repeats
    So this will pick up all the kittens individually
    >>> match_one_or_more_kittens('I love kittens kittens kittens')
    ['kittens', 'kittens', 'kittens']

    >>> match_one_or_more_kittens('puppies are the best!')
    []
    """

    # use finditer instead of findall so we get a match object for each match
    # from that we can use match[0] to get the full match (as opposed to the group)
    # findall only returns tuples of the group, so if we wanted to access the entire
    # match, we would have to make an explicit group for the entire match. Not ideal!
    match_objects = re.finditer(
        r"""
            (           # start a group for matching multi-character string more than once
                kittens # multi-character string to match
            )+          # match group one or more times
        """,
        string,
        flags=re.VERBOSE
    )

    full_matches = []
    for match in match_objects:
        # match[0] in the match object is the full match
        full_matches.append(match[0])

    return full_matches


# LECTURE EXAMPLE 32: Multiple Wows
def find_wows(string):
    """Find strings made up entirely of or more W0W or WOW strings.

    non-verbose regex = r'^(W[0O]W)+$'
    flags: none

    >>> find_wows('W0WWOWW0W')
    True

    >>> find_wows('WOWOWOW')
    False
    """

    match = re.search(
        r"""
            ^           # beginning of the string
            (           # create a group
                W       # letter W once
                [0O]    # number 0 or capital letter O once
                W       # letter W once
            )+          # match this group once or more
            $           # end of the string
        """,
        string,
        flags=re.VERBOSE
    )

    return match is not None


# LECTURE EXAMPLE 33: 24 hr clock
def match_24_hr_clock(string):
    """Return True if string is a valid time on a 24 hour clock.

    Return False otherwise.

    non-verbose regex: r'^(1?\d|2[0-3]):[0-5]\d$'
    flags: none

    >>> match_24_hr_clock('5:43')
    True

    >>> match_24_hr_clock('15:08')
    True

    >>> match_24_hr_clock('23:12')
    True

    >>> match_24_hr_clock('28:33')
    False

    >>> match_24_hr_clock('12:89')
    False
    """

    match = re.search(
        r"""
            ^          # beginning of string
            (          # start of a group for multi-character options
                1?\d   # optional number 1 followed by any digit
                |      # a delimiter meaning "or" for multi-character strings
                2[0-3] # the number 2 followed by a 0, 1, 2, or 3
            )          # end of group for multi-character options
            :          # a colon character
            [0-5]      # a number between 0 and 5 inclusive
            \d         # any digit
            $          # end of the string
        """,
        string,
        flags=re.VERBOSE
    )

    return match is not None
