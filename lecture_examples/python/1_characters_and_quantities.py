import re


# LECTURE EXAMPLE 0: js filenames
def find_javascript_files(file_list):
    """Return all filenames with no whitespace, ending in js, jsx or ts

    file_list should be a list of file_name strings

    non-verbose regex = r'^\S+\.(jsx?|ts)$'

    >>> files = [
    ...          'regular-expressions.js',
    ...          'RegularExpressionInput.jsx',
    ...          'cannot_get_enough_of_regular_expressions.py',
    ...          'regular_expression_overload.php',
    ...          'I-heart-kittens.ts',
    ...          'RegularExpressionOutput.jsx',
    ...          'regular_expressions_are_ready_to.go',
    ...          'even-more-regular-expressions.ts',
    ...          'my_favorite_regexes.rb',
    ...          'Regex-for-fun-and-profit.js',
    ...          'Hey you! Check out my regular expressions!.ts',
    ...     ]
    >>> find_javascript_files(files)
    ['regular-expressions.js', 'RegularExpressionInput.jsx', 'I-heart-kittens.ts', 'RegularExpressionOutput.jsx', 'even-more-regular-expressions.ts', 'Regex-for-fun-and-profit.js']

    """
    js_files = []
    for file_name in file_list:
        match = re.search(
            r"""
                ^           # beginning of the string
                \S+         # one or more non-whitespace characters
                \.          # a literal period character
                (js|jsx|ts) # one of these three extensions
                $           # end of the string
            """,
            file_name,
            # the verbose flag allows us to do the nifty commenting above
            flags=re.VERBOSE
        )
        if match:
            js_files.append(file_name)

    return js_files


# LECTURE EXAMPLE 1: hey
def is_hey(string):
    """Return True if string is 'hey'
    Could easily be done with string matching -- doesn't need regex!

    Return False otherwise.

    >>> is_hey('hey')
    True

    >>> is_hey('heeeey')
    False

    >>> is_hey('heeeeeeeeeeeeeeeey')
    False

    >>> is_hey('potato')
    False
    """
    matches = re.fullmatch('hey', string)
    return matches is not None


# LECTURE EXAMPLE 2: hey with one or more e's
def is_hey_optional_extra_es(string):
    """Return True if string is hey with one or more e's.

    Return False otherwise.
    non-verbose regex: r'he+y'

    >>> is_hey_optional_extra_es('hey')
    True

    >>> is_hey_optional_extra_es('heeeey')
    True

    >>> is_hey_optional_extra_es('heeeeeeeeeeeeeeeey')
    True

    >>> is_hey_optional_extra_es('hy')
    False
    """

    # fullmatch assumes regex starts at string start and ends at string end
    matches = re.fullmatch(
        r"""
            h   # the letter h
            e+  # one or more e's
            y   # the letter y
        """,
        string,
        flags=re.VERBOSE
    )

    # since matches will be None if there is NO match
    # this will return True if there's a match and False otherwise
    return matches is not None


# LECTURE EXAMPLE 3: Kitten! or Kittens!
def is_kitten_s_with_bang(string):
    """Return True if string is Kitten! or Kittens!.

    Return False otherwise.
    non-verbose regex: r'Kittens?!'

    >>> is_kitten_s_with_bang('Kitten!')
    True

    >>> is_kitten_s_with_bang('Kittens!')
    True

    >>> is_kitten_s_with_bang('kitten!')
    False

    >>> is_kitten_s_with_bang('Kittensssssssss!')
    False
    """

    matches = re.fullmatch(
        r"""
            Kitten  # the string Kitten
            s?      # 0 or 1 of the letter s
            !       # an exclamation point character
        """,
        string,
        flags=re.VERBOSE
    )
    return matches is not None


# LECTURE EXAMPLE 4: Kittens with any number of !
def is_kittens_with_bangs(string):
    """Return true if string is Kitten followed by any !s (including zero).

    Return false otherwise.
    non-verbose regex: r'Kittens!*'

    >>> is_kittens_with_bangs('Kittens')
    True

    >>> is_kittens_with_bangs('Kittens!')
    True

    >>> is_kittens_with_bangs('Kittens!!!!!!!!')
    True

    >>> is_kittens_with_bangs('kittens.')
    False

    """

    matches = re.fullmatch(
        r"""
            Kittens # the string Kittens
            !*      # 0 or more exclamation points
        """,
        string,
        flags=re.VERBOSE
    )

    return matches is not None


# LECTURE EXAMPLE 5: meh kittens
def is_meh_kittens(string):
    """Return True if string contains kitten followed by 1 or more periods.

    Return False otherwise.
    non-verbose regex: r'Kittens\.+'

    >>> is_meh_kittens('Kittens.')
    True

    >>> is_meh_kittens('Kittens..')
    True

    >>> is_meh_kittens('Kittens...')
    True

    >>> is_meh_kittens('Kittens...........................')
    True

    >>> is_meh_kittens('Kittens')
    False

    >>> is_meh_kittens('Kittens!')
    False

    """
    matches = re.fullmatch(
        r"""
            Kittens # the string kittens
            \.+     # one or more of the literal . character
        """,
        string,
        flags=re.VERBOSE
    )

    return matches is not None


# LECTURE EXAMPLE 6: Kittens with 1 to 3 periods after
def is_kittens_with_one_to_three_dots(string):
    """Return True if the string is Kittens followed by one to three dots.

    Return False otherwise.
    non-verbose regex: r'Kittens\.{1,3}'

    >>> is_kittens_with_one_to_three_dots('Kittens.')
    True

    >>> is_kittens_with_one_to_three_dots('Kittens..')
    True

    >>> is_kittens_with_one_to_three_dots('Kittens...')
    True

    >>> is_kittens_with_one_to_three_dots('Kittens')
    False

    >>> is_kittens_with_one_to_three_dots('Kittens.............')
    False

    """

    matches = re.fullmatch(
        r"""
            Kittens     # the word Kittens
            \.{1,3}    # between 1 and 3 (inclusive) . characters
        """,
        string,
        flags=re.VERBOSE,
    )

    return matches is not None


# LECTURE EXAMPLE 7: Kittens with exactly 3 dots
def is_kittens_with_three_dots(string):
    """Return True if the string is Kittens followed by exactly three dots.

    Return False otherwise.
    non-verbose regex: 'Kittens\.{3}'

    >>> is_kittens_with_three_dots('Kittens.')
    False

    >>> is_kittens_with_three_dots('Kittens...')
    True

    >>> is_kittens_with_three_dots('Kittens')
    False

    >>> is_kittens_with_three_dots('Kittens.............')
    False

    """

    matches = re.fullmatch(
        r"""
            Kittens     # the word Kittens
            \.{3}    # between 1 and 3 (inclusive) . characters
        """,
        string,
        flags=re.VERBOSE,
    )

    return matches is not None


# LECTURE EXAMPLE 8: Kittens with at least 3 dots
def is_kittens_with_at_least_three_dots(string):
    """Return True if the string is Kittens followed by at least three dots.

    Return False otherwise.
    non-verbose regex = r'Kittens\.{3,}'

    >>> is_kittens_with_at_least_three_dots('Kittens.')
    False

    >>> is_kittens_with_at_least_three_dots('Kittens...')
    True

    >>> is_kittens_with_at_least_three_dots('Kittens')
    False

    >>> is_kittens_with_at_least_three_dots('Kittens.............')
    True

    """

    matches = re.fullmatch(
        r"""
            Kittens     # the word Kittens
            \.{3,}    # between 1 and 3 (inclusive) . characters
        """,
        string,
        flags=re.VERBOSE,
    )

    return matches is not None
