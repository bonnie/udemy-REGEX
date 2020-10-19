import re

example_string = """Hello. Goodbye!
Hello, how are you doing today? Hope you’re having a good one. Goodbye!
Hello! It’s been great talking to you. Bye!
Hello, so good to see you. Seeya later!
Goodbye!"""


# LECTURE EXAMPLE 19: Start with `Hello`, end with `bye`
# no flags
def find_hello_start_bye_end(string):
    """Return first string that starts with Hello and ends with bye.

    Do not allow newline characters in between.

    non-verbose regex: r'^Hello.*bye!$'
    flags: none

    >>> find_hello_start_bye_end(example_string)
    """
    match = re.search(
        r"""
            ^     # start of string
            Hello # string 'Hello'
            .*    # zero or more non-newline characters
            bye!  # string 'bye!'
            $     # end of string
        """,
        example_string,
        flags=re.VERBOSE
    )

    return match


# LECTURE EXAMPLE 20: Start with `Hello`, end with `bye`
# multi-line flag
def find_hello_start_bye_end_multiline(string):
    """Return first string that starts with Hello and ends with bye.

    Multi-line flag matches ^ to start of line and $ to end of line.
    non-verbose regex: r'^Hello.*bye!$'
    flags = re.MULTILINE

    >>> find_hello_start_bye_end_multiline(example_string)
    'Hello. Goodbye!'
    """
    match = re.search(
        r"""
            ^     # start of string
            Hello # string 'Hello'
            .*    # zero or more non-newline characters
            bye!  # string 'bye!'
            $     # end of string
        """,
        example_string,
        flags=re.VERBOSE | re.MULTILINE
    )

    # match is a Match object
    #     https://docs.python.org/3/library/re.html#match-objects
    # actual match is stored in match.group(0)
    return match.group(0)


# LECTURE EXAMPLE 21: Start with `Hello`, end with `bye`
# multi-line and global flags
def find_hello_start_bye_end_multiline_global(string):
    """Return all strings that starts with Hello and ends with bye.

    Multi-line flag matches ^ to start of line and $ to end of line.
    Python does not have a global flag; instead we'll use the 'findall'
    method, rather than 'search'

    non-verbose regex: r'^Hello.*bye!$'
    flags = re.MULTILINE

    >>> find_hello_start_bye_end_multiline_global(example_string)
    ['Hello. Goodbye!', 'Hello, how are you doing today? Hope you’re having a good one. Goodbye!']
    """
    matches = re.findall(
        r"""
            ^     # start of string
            Hello # string 'Hello'
            .*    # zero or more non-newline characters
            bye!  # string 'bye!'
            $     # end of string
        """,
        example_string,
        flags=re.VERBOSE | re.MULTILINE
    )

    # findall returns a list of matches
    return matches


# LECTURE EXAMPLE 22: Start with `Hello`, end with `bye`
# multi-line, global, and case insensitive flags
def find_hello_start_bye_end_multiline_global_case_insensitive(string):
    """Return all strings that starts with Hello and ends with bye.

    Multi-line flag matches ^ to start of line and $ to end of line.
    Python does not have a global flag; instead we'll use the 'findall'
    method, rather than 'search'

    non-verbose regex: r'^Hello.*bye!$'
    flags = re.MULTILINE, re.IGNORECASE

    >>> find_hello_start_bye_end_multiline_global_case_insensitive(example_string)
    ['Hello. Goodbye!', 'Hello, how are you doing today? Hope you’re having a good one. Goodbye!', 'Hello! It’s been great talking to you. Bye!']
    """
    matches = re.findall(
        r"""
            ^     # start of string
            Hello # string 'Hello'
            .*    # zero or more non-newline characters
            bye!  # string 'bye!'
            $     # end of string
        """,
        example_string,
        flags=re.VERBOSE | re.MULTILINE | re.IGNORECASE
        # could also be flags=re.V | re.M | re.I
    )

    # findall returns a list of matches
    return matches


# LECTURE EXAMPLE 23: Start with `Hello`, end with `bye`
# multi-line, global, case insensitive, and single-line ("dotall") flags
def find_hello_start_bye_end_multiline_global_case_insensitive_single_line(string):
    """Return all strings that starts with Hello and ends with bye.

    Multi-line flag matches ^ to start of line and $ to end of line.
    Python does not have a global flag; instead we'll use the 'findall'
    method, rather than 'search'

    non-verbose regex: r'^Hello.*bye!$'
    flags = re.MULTILINE, re.IGNORECASE, re.DOTALL

    >>> find_hello_start_bye_end_multiline_global_case_insensitive_single_line(example_string)
    ['Hello. Goodbye!\\nHello, how are you doing today? Hope you’re having a good one. Goodbye!\\nHello! It’s been great talking to you. Bye!\\nHello, so good to see you. Seeya later!\\nGoodbye!']
    """
    matches = re.findall(
        r"""
            ^     # start of string
            Hello # string 'Hello'
            .*    # zero or more non-newline characters
            bye!  # string 'bye!'
            $     # end of string
        """,
        example_string,
        flags=re.VERBOSE | re.MULTILINE | re.IGNORECASE | re.DOTALL
        # could also be flags=re.V | re.M | re.I | re.S
    )

    # findall returns a list of matches
    return matches
