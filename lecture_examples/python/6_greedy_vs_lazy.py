import re


# LECTURE EXAMPLE 24: "zero or more" greedy example
def match_gre_star_greedy(string):
    """match the string `gr` followed by as many e's as possible.

    non-verbose regex: r'gre*'
    flags: none

    >>> match_gre_star_greedy('greeeeeeeeeeedy')
    'greeeeeeeeeee'

    >>> match_gre_star_greedy('ogre')
    'gre'

    >>> match_gre_star_greedy('grand piano')
    'gr'

    >>> match_gre_star_greedy('potato')
    """

    match = re.search(
        r"""
            gr  # string 'gr'
            e*  # zero or more e's, matching as many as possible (greedy)
        """,
        string,
        flags=re.VERBOSE
    )

    if match is None:
        return None

    return match.group(0)


# LECTURE EXAMPLE 25: "zero or more" lazy example
def match_la_star_lazy(string):
    """Match the string `la` followed by as few a's as possible.

    non-verbose regex: r'la*?'
    flags: none


    >>> match_la_star_lazy('laaaaaaaaaaaaazy')
    'l'

    >>> match_la_star_lazy('loop')
    'l'

    >>> match_la_star_lazy('potato')
    """

    match = re.search(
        r"""
            l    # string 'l'
            a*?  # zero or more a's, matching as few as possible (lazy)
        """,
        string,
        flags=re.VERBOSE
    )
    if match is None:
        return None

    return match.group(0)


# LECTURE EXAMPLE 26: "one or more" lazy example
def match_la_plus_lazy(string):
    """Match the string `l` followed by one or more `a`s, as few as possible.
    
    non-verbose regex: r'la+?'
    flags: none

    >>> match_la_plus_lazy('laaaaaaaaaaaaazy')
    'la'

    >>> match_la_plus_lazy('loop')

    >>> match_la_plus_lazy('potato')
    """

    match = re.search(
        r"""
            l    # string 'l'
            a+?  # one or more a's, matching as few as possible (lazy)
        """,
        string,
        flags=re.VERBOSE
    )
    if match is None:
        return None

    return match.group(0)


# LECTURE EXAMPLE 28: Match sentence, lazy matching
def is_sentence_lazy(string):
    """Return True if the string represents a sentence.

    Return False otherwise. A sentence in this case means
    starting with a capital letter, and ending with a
    period, exclamation point, or question mark

    non-verbose regex: r'^[A-Z].*?[\.!?]$'
    flags: none

    >>> is_sentence_lazy("Do you want to get coffee with me?")
    True

    >>> is_sentence_lazy("I love kittens!")
    True

    # note, this is two sentences, so why does it work here when it didn't in
    # LECTURE EXAMPLE 10 (2_collections_and_range.py)?
    # Slight difference: lazy .*? CAN match a . ? ! if that's the only way to make
    # the regex work.
    >>> is_sentence_lazy("This is the best Udemy course ever. Why are you laughing?")
    True

    >>> is_sentence_lazy("'sup?")
    False

    >>> is_sentence_lazy("Kittens are")
    False

    """

    matches = re.search(
        r"""
            ^       # beginning of the string
            [A-Z]   # any capital letter
            .*?     # zero or more characters, but as few as possible (lazy)
            [\.!?] # one character that ends a sentence
            $       # end of the string
        """,
        string,
        flags=re.VERBOSE
    )

    return matches is not None


# LECTURE EXAMPLE 28: Start with `Hello`, end with `bye`, lazy matching
# multi-line, global, case insensitive, and single-line ("dotall") flags
example_string = """Hello. Goodbye!
Hello, how are you doing today? Hope you’re having a good one. Goodbye!
Hello! It’s been great talking to you. Bye!
Hello, so good to see you. Seeya later!
Goodbye!"""
def find_hello_start_bye_end_multiline_global_case_insensitive_single_line_lazy(string):
    """Return all strings that starts with Hello and ends with bye.

    Multi-line flag matches ^ to start of line and $ to end of line.
    Python does not have a global flag; instead we'll use the 'findall'
    method, rather than 'search'

    non-verbose regex: r'^Hello.*?bye!$'
    flags: re.MULTILINE, re.IGNORECASE, re.DOTALL

    >>> find_hello_start_bye_end_multiline_global_case_insensitive_single_line_lazy(example_string)
    ['Hello. Goodbye!', 'Hello, how are you doing today? Hope you’re having a good one. Goodbye!', 'Hello! It’s been great talking to you. Bye!', 'Hello, so good to see you. Seeya later!\\nGoodbye!']
    """

    matches = re.findall(
        r"""
            ^     # start of string
            Hello # string 'Hello'
            .*?   # zero or more non-newline characters: lazy (as few as possible)
            bye!  # string 'bye!'
            $     # end of string
        """,
        example_string,
        flags=re.VERBOSE | re.MULTILINE | re.IGNORECASE | re.DOTALL
        # could also be flags=re.V | re.M | re.I | re.S
    )

    # findall returns a list of matches
    return matches
