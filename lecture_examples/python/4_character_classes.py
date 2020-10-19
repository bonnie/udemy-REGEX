import re


# LECTURE EXAMPLE 14: leading whitespace
def match_leading_whitespace(string):
    """Return True if the string has leading whitespace.

    Return False otherwise.
    non-verbose regex: r'^\s+'

    >>> match_leading_whitespace('\t leading whitespace')
    True

    >>> match_leading_whitespace(' leading whitespace')
    True

    >>> match_leading_whitespace('no leading whitespace')
    False

    >>> match_leading_whitespace('trailing whitespace\t')
    False

    """
    matches = re.search(
        r"""
            ^   # beginning of the string
            \s+ # one or more whitespace characters
        """,
        string,
        flags=re.VERBOSE)
    return matches is not None


# LECTURE EXAMPLE 15: no leading whitespace
def match_no_leading_whitespace(string):
    """Return True if the string has no leading whitespace.

    Return False otherwise.
    non-verbose regex: r'^\S+'

    >>> match_no_leading_whitespace('\t leading whitespace')
    False

    >>> match_no_leading_whitespace(' leading whitespace')
    False

    >>> match_no_leading_whitespace('no leading whitespace')
    True

    >>> match_no_leading_whitespace('trailing whitespace\t')
    True

    """
    matches = re.search(
        r"""
            ^   # beginning of the string
            \S+ # one or more non-whitespace characters
        """,
        string,
        flags=re.VERBOSE)
    return matches is not None


# LECTURE EXAMPLE 16: 'stem' with word boundaries
def match_stem_with_word_boundaries(string):
    """Return first matched part of the string that contains 'stem' as a word.

    That is, 'stem' with word boundaries on either side.
    Return None if there are no matches.

    non-verbose regex: r'\bstem\b'

    >>> match_stem_with_word_boundaries('That rose has a lovely stem!')
    'stem'

    >>> match_stem_with_word_boundaries('stem')
    'stem'

    >>> match_stem_with_word_boundaries('What is your favorite operating system?')

    >>> match_stem_with_word_boundaries('Your regex brilliance stems from all of your hard work.')
    """
    match = re.search(
        r"""
            \b      # word boundary
            stem    # the string 'stem'
            \b      # word boundary
        """,
        string,
        flags=re.VERBOSE
    )

    if match is None:
        return None

    # match[0] is the matched portion of the string
    return match[0]


# LECTURE EXAMPLE 17: 'stem' with non-word characters
def match_stem_flanked_by_nonword_characters(string):
    """Return first matched part of the string that contains 'stem' as a word.

    That is, 'stem' with non-word characters on either side.
    Return None if there are no matches.

    non-verbose regex: r'\Wstem\W'

    >>> match_stem_flanked_by_nonword_characters('That rose has a lovely stem!')
    ' stem!'

    >>> match_stem_flanked_by_nonword_characters('stem')

    >>> match_stem_flanked_by_nonword_characters('What is your favorite operating system?')

    >>> match_stem_flanked_by_nonword_characters('Your regex brilliance stems from all of your hard work.')
    """
    match = re.search(
        r"""
            \W      # non-word character
            stem    # the string 'stem'
            \W      # non-word character
        """,
        string,
        flags=re.VERBOSE
    )

    if match is None:
        return None

    # match[0] is the matched portion of the string
    return match[0]


# EXAMPLE 18: starts with word character, ends with non-digit
def match_word_start_nondigit_end(string):
    """Return True if string starts with a word character and ends with a non-digit.

    Return False otherwise.
    non-verbose regex: r'^\w.*\D$'

    >>> match_word_start_nondigit_end('7_')
    True

    >>> match_word_start_nondigit_end('Who *are* you?')
    True

    >>> match_word_start_nondigit_end(' 1234!')
    False

    >>> match_word_start_nondigit_end('Pennsylvania 6-5000')
    False

    >>> match_word_start_nondigit_end('q')
    False

    """

    match = re.search(
        r"""
            ^   # start of string
            \w  # word character
            .*  # zero or more characters
            \D  # non-digit character
            $   # end of string
        """,
        string,
        flags=re.VERBOSE
    )

    return match is not None
