import re


# LECTURE EXAMPLE 41: currency lookbehind
def extract_USD_values(string):
    """Return a list of values in a multiline string that are preceded with USD .

    non-verbose regex: r'(?<=USD )\d+(?:\.\d\d)?'

    >>> values = 'USD 34.75\\nGBP 1.20\\nBRL 15.91\\nJPY 68.93\\nUSD 22.03\\nUSD 50\\nBRL 120.33\\nINR 879.21'
    >>> extract_USD_values(values)
    ['34.75', '22.03', '50']
    """
    return re.findall(
        r"""
            (?<=USD\ )  # positive lookbehind; 'USD ' must precede the rest of the string
            \d+         # one or more digits
            (?:         # non-capturing group for cents
                \.\d\d  # decimal point and two digits
            )?          # end of non-capturing group for cents; ? means 0 or 1 (optional)
        """,
        string,
        flags=re.VERBOSE
    )

# LECTURE EXAMPLE 42: Find capitalized words that don't start a sentence
passage = """It was a quarter past six when we left Baker Street, and it still wanted ten minutes to the hour when we found ourselves in Serpentine Avenue. It was already dusk, and the lamps were just being lighted as we paced up and down in front of Briony Lodge, waiting for the coming of its occupant. The house was just such as I had pictured it from Sherlock Holmes' succinct description, but the locality appeared to be less private than I expected. On the contrary, for a small street in a quiet neighbourhood, it was remarkably animated.

Excerpt From: Arthur Conan Doyle. "The Adventures of Sherlock Holmes." Apple Books."""


def find_caps_within_sentence(string):
    """Return a list of all capitalized words that don't start a sentence.

    Sentence ending punctuation is . ? !

    non-verbose regex: r'(?<!^)(?<![\.?!]\s)[A-Z]\w*\b'
    flags: re.MULTILINE

    >>> find_caps_within_sentence(passage)
    ['Baker', 'Street', 'Serpentine', 'Avenue', 'Briony', 'Lodge', 'I', 'Sherlock', 'Holmes', 'I', 'From', 'Arthur', 'Conan', 'Doyle', 'The', 'Adventures', 'Sherlock', 'Holmes', 'Apple', 'Books']
    """

    return re.findall(
        r"""
            (?<!^)      # negative lookbehind to start of string (don't include words at start of string)
            (?<!        # negative lookbehind (don't match if this is immediately before the rest of the regex)
                [\.?!] # any sentence punctuation
                \s      # whitespace character
            )           # end of negative lookbehind
            [A-Z]       # one capital letter
            \w*         # zero or more word characters
            \b          # word boundary (non-word character, not captured)
        """,
        string,
        flags=re.VERBOSE | re.MULTILINE
    )

# LECTURE EXAMPLE 43: Find date for log lines with particular time and error
log = """sep 24 00:00:00 something happened
sep 24 13:29:33 something else happened
sep 24 28:42:07 yet another thing happened
sep 25 00:00:00 something happened
sep 25 09:08:56 you gotta see this
sep 26 06:37:40 alert! alert!
sep 26 10:22:49 this needs your attention
sep 27 00:00:00 something happened
sep 27 18:29:12 maybe you should look into this
"""


def find_log_dates(string):
    """Return all dates where the "something happened" error ocurred at midnight.

    non-verbose regex: r'^\w\w\w \d\d(?= 00:00:00 something happened$)'
    flags: re.MULTILINE

    >>> find_log_dates(log)
    ['sep 24', 'sep 25', 'sep 27']
    """

    return re.findall(
        r"""
            ^\w\w\w  # month at the beginning of the string
            \ \d\d   # space and date
            (?=      # start of lookahead
               \ 00:00:00\ something\ happened   # expected time and error string
            $)       # lookahead ends at end of string
        """,
        string,
        flags=re.VERBOSE | re.MULTILINE
    )

# LECTURE EXAMPLE 44: find all words not at end of line
silly_limerick = """There was a young fellow of Crete
Who was so exceedingly neat.
When he got out of bed,
He stood on his head
To make sure of not soiling his feet."""


def find_all_words_not_at_end_of_line(string):
    """Return a all words in multi-line string not at the end of the line.

    non-verbose regex: r'\w+\b(?![?!\.;,\)]?$)'
    re.MULTILINE flag

    >>> find_all_words_not_at_end_of_line(silly_limerick)
    ['There', 'was', 'a', 'young', 'fellow', 'of', 'Who', 'was', 'so', 'exceedingly', 'When', 'he', 'got', 'out', 'of', 'He', 'stood', 'on', 'his', 'To', 'make', 'sure', 'of', 'not', 'soiling', 'his']
    """

    return re.findall(
        r"""
            \w+     # one or more word characters
            \b      # word boundary
            (?!     # negative lookahead
                [?!\.;,\)]?     # negative lookahead may include optional punctuation
            $)      # negative lookahead ends at end of string
        """,
        string,
        flags=re.VERBOSE | re.MULTILINE
    )
