import re


# LECTURE EXAMPLE 11: leading spaces
def find_leading_spaces(string):
    """Return the input string if it starts with one or more space characters.

    Return None otherwise.
    non-verbose regex: r'^ +.*'

    >>> find_leading_spaces('  space in the middle')
    '  space in the middle'

    >>> find_leading_spaces('no leading space')
    """
    match = re.match(
        r"""
            ^   # beginning of the string
            \ + # one or more space characters
            .*  # the rest of the string
        """,
        string,
        flags=re.VERBOSE
    )

    if match is None:
        return None

    return match[0]  # return actual match if one was found


# LECTURE EXAMPLE 12: Match full sentences
def match_full_sentence(string):
    """Return True if string represents a sentence.

    In this case, a sentence is defined by starting with a capital
    letter, and ending with sentence punctuation: ! . ?
    There should be no sentence punctuation in the middle.

    Return False otherwise.
    non-verbose regex: r'^[A-Z][^\.!?]+[\.?!]$'

    >>> match_full_sentence('Do you want to get coffee with me?')
    True

    >>> match_full_sentence('I love kittens!')
    True

    >>> match_full_sentence('This is the best Udemy course ever. Why are you laughing?')
    False
    """
    match = re.search(
        r"""
            ^         # beginning of string
            [A-Z]     # one capital letter
            [^\.!?]+ # one or more non sentence-ending punctuation characters
            [\.?!]    # one sentence-ending punctuation character
            $         # end of string
        """,
        string,
        flags=re.VERBOSE
    )

    return match is not None


# LECTURE EXAMPLE 13: full sentence with multiple punctuation
def match_full_sentence_multiple_puncutation(string):
    """Return True if string represents a sentence.

    In this case, a sentence is defined by starting with a capital
    letter, and ending with one or more sentence punctuation character: ! . ?
    There should be no sentence punctuation in the middle.

    Return False otherwise.
    non-verbose regex: r'^[A-Z][^\.!?]+[\.?!]+$'

    >>> match_full_sentence_multiple_puncutation('Do you want to get coffee with me?')
    True

    >>> match_full_sentence_multiple_puncutation('I love kittens!')
    True

    >>> match_full_sentence_multiple_puncutation('Who do you think you are?!?')
    True

    >>> match_full_sentence_multiple_puncutation('This is the best Udemy course ever. Why are you laughing?')
    False
    """
    match = re.search(
        r"""
            ^         # beginning of string
            [A-Z]     # one capital letter
            [^\.!?]+ # one or more non sentence-ending punctuation characters
            [\.?!]+   # one or more sentence-ending punctuation character
            $         # end of string
        """,
        string,
        flags=re.VERBOSE
    )

    return match is not None
