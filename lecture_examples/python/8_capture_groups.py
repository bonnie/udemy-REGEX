import re


# LECTURE EXAMPLE 34: Extract filename for certain image files
def extract_filename_for_certain_image_files(string):
    """Return the filename without extension for files that end with png, jpg, jpeg, or pdf.

    Assuming the string is a single filename.
    If there's no match, return None.

    non-verbose regex: r'^(.+)\.(png|jpe?g|pdf)$'
    flags: none

    >>> extract_filename_for_certain_image_files('cute_kittens.pdf')
    'cute_kittens'

    >>> extract_filename_for_certain_image_files('adorable_puppies.jpg')
    'adorable_puppies'

    >>> extract_filename_for_certain_image_files('lots-of-toasters.png')
    'lots-of-toasters'

    >>> extract_filename_for_certain_image_files('greedy_vs_lazy.py')
    """

    match = re.match(
        r"""
            (.+)      # group containing one or more of any character other than newline
            \.        # literal period character
            (         # start of a group for multi-character options
                png   # string 'png'
                |     # a delimiter meaning "or" for multi-character strings
                jpe?g # 'jpg' or 'jpeg'
                |     # a delimiter meaning "or" for multi-character strings
                pdf   # the string 'pdf'
            )         # end of the group for multi-character options
        """,
        string,
        flags=re.VERBOSE
    )

    if match is None:
        return None

    # match[0] is the entire match
    # match[1] is the first group
    return match[1]


# LECTURE EXAMPLE 35: Extract filename with non-capturing group for extension
def extract_filename_for_certain_image_files_noncapture_extension(string):
    """Return the filename for files that end with png, jpg, jpeg, or pdf.

    The result is the same as the previous function
    (extract_filename_for_certain_image_files), but the mechanism is different
    since we don't capture the group we're not interested in

    non-verbose regex: '(.+)\.(?:png|jpe?g|pdf)'
    flags: none

    >>> extract_filename_for_certain_image_files_noncapture_extension('cute_kittens.pdf')
    'cute_kittens'

    >>> extract_filename_for_certain_image_files_noncapture_extension('adorable_puppies.jpg')
    'adorable_puppies'

    >>> extract_filename_for_certain_image_files_noncapture_extension('lots-of-toasters.png')
    'lots-of-toasters'

    >>> extract_filename_for_certain_image_files_noncapture_extension('greedy_vs_lazy.py')
    """
    match = re.findall(
        r"""
            (.+)      # group containing one or more of any character other than newline
            \.        # literal period character
            (?:       # start of a group for multi-character options
                      # don't capture this group
                png   # string 'png'
                |     # a delimiter meaning "or" for multi-character strings
                jpe?g # 'jpg' or 'jpeg'
                |     # a delimiter meaning "or" for multi-character strings
                pdf   # the string 'pdf'
            )         # end of the group for multi-character options
        """,
        string,
        flags=re.VERBOSE
    )

    if len(match) == 0:
        return None

    # in this case there's only one group, so match is a list of
    # strings representing that group instead of a list of tuples
    return match[0]


# LECTURE EXAMPLE 36: matching HTML tags
def find_all_outer_html_elements(string):
    """Find all outer HTML elements.

    If there are nested elements, the outermost element will be returned.

    If there are no HTML elements, return None.

    non-verbose regex: r'<(\w+?)>.*?<\/\1>'
    flags: none

    >>> find_all_outer_html_elements('<span>Regular expressions are the <b>best</b></span>')
    ['<span>Regular expressions are the <b>best</b></span>']

    >>> find_all_outer_html_elements("<span>I'm a span!</span><span>I'm another span!</span>")
    ["<span>I'm a span!</span>", "<span>I'm another span!</span>"]
    """

    # use finditer instead of findall so we get a match object for each match
    # from that we can use match[0] to get the full match (as opposed to the group)
    # findall only returns tuples of the group, so if we wanted to access the entire
    # match, we would have to make an explicit group for the entire match. Not ideal!
    match_objects = re.finditer(
        r"""
            <     # open angle bracket
            (     # start of a capturing group
                \w+?   # match one or more word characters, the fewest possible (lazy)
            )     # end of capturing group
            >     # closing angle bracket
            .*?   # zero or more non-newline characters, the fewest possible (lazy)
            <     # open angle bracket
            \/    # forward slash character (/)
            \1    # the same pattern as captured in the first capturing group
            >     # closing angle bracket
    """,
        string,
        flags=re.VERBOSE
    )

    full_matches = []
    for match in match_objects:
        # match[0] in the match object is the full match
        full_matches.append(match[0])

    return full_matches


# LECTURE EXAMPLE 37: extract named groups for root filename and extension
def find_rootname_and_extension_for_certain_image_files(filename):
    """Return a dictionary with keys 'rootname', 'extension' for that end with png, jpg, jpeg, or pdf.

    Assuming the string is a single filename.
    If there's no match, return None.

    non-verbose regex: r'(?P<rootname>.+)\.(?P<extension>png|jpe?g|pdf)'
    flags: none

    >>> find_rootname_and_extension_for_certain_image_files('cute_kittens.pdf')
    {'rootname': 'cute_kittens', 'extension': 'pdf'}

    >>> find_rootname_and_extension_for_certain_image_files('adorable_puppies.jpg')
    {'rootname': 'adorable_puppies', 'extension': 'jpg'}

    >>> find_rootname_and_extension_for_certain_image_files('lots-of-toasters.png')
    {'rootname': 'lots-of-toasters', 'extension': 'png'}

    >>> find_rootname_and_extension_for_certain_image_files('greedy_vs_lazy.py')    """

    matches = re.search(
        r"""
            (?P<rootname>   # start of a capturing group called 'rootname'
                .+          # match one or more non-newline characters for the root name
            )               # end of capturing group
            \.              # literal . character
            (?P<extension>  # start of a capturing group called 'extension'
                png|jpe?g|pdf # options for the extension
            )               # end of capturing group

    """,
        filename,
        flags=re.VERBOSE
    )

    if matches is None:
        return None

    # this is where Python stores the dictionary of named matches
    # in a match object (see python specific lecture for more details)
    return matches.groupdict()
