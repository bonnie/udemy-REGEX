import re


# LECTURE EXAMPLE 9: hex numbers
def is_hex_number(string):
    """Return true if the string is a hex number.

    Return False otherwise. Letter digits must be capitalized.
    non-verbose regex: r'[0-9A-F]+'

    >>> is_hex_number('1F')
    True

    >>> is_hex_number('C70')
    True

    >>> is_hex_number('3NA')
    False

    >>> is_hex_number('')
    False

    """

    matches = re.fullmatch(
        r"""
            [           # beginning of character options
                0-9     # the digit range 0 through 9
                A-F     # the capital letter range A through F
            ]+          # one or more of any of these characters
        """,
        string,
        flags=re.VERBOSE
    )

    return matches is not None


# LECTURE EXAMPLE 10: match sentence
def is_sentence(string):
    """Return True if the string represents a sentence.

    Return False otherwise. A sentence in this case means
    starting with a capital letter, and ending with a
    period, exclamation point, or question mark.

    non-verbose regex: r'^[A-Z][^\.!?][\.!?]$'

    >>> is_sentence("Do you want to get coffee with me?")
    True

    >>> is_sentence("I love kittens!")
    True

    # note, this is two sentences, so the way we have the function set up
    # this will return False. How would you update the function to make
    # this return True?
    >>> is_sentence("This is the best Udemy course ever. Why are you laughing?")
    False

    >>> is_sentence("'sup?")
    False

    >>> is_sentence("Kittens are")
    False

    """

    matches = re.search(
        r"""
            ^           # beginning of string
            [A-Z]       # any capital letter, once
            [^\.!?]*   # zero or more characters that don't end a sentence
            [\.!?]     # one character that ends a sentence
            $           # end of string
        """,
        string,
        flags=re.VERBOSE
    )

    return matches is not None
