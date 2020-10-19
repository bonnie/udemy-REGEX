import re


# LECTURE EXAMPLE 37: replace cute animal with 'cutie'
def replace_cute_animal_with_cutie(string):
    """Replace any instance of one of the below cute animals with 'cutie'.

    kitten
    puppy
    piglet
    foal
    fawn
    duckling
    chick

    >>> string = 'I brought home a kitten and a puppy yesterday. Then I went to the petting zoo and saw a piglet, a foal and a chick.'
    >>> replace_cute_animal_with_cutie(string)
    'I brought home a cutie and a cutie yesterday. Then I went to the petting zoo and saw a cutie, a cutie and a cutie.'

    >>> replace_cute_animal_with_cutie("I don't like any of those animals. They aren't cute to me.")
    "I don't like any of those animals. They aren't cute to me."
    """

    # re.sub will subsitute all instances unless you restrict the number. 
    # See the "count" paramter in the docs:
    #     https://docs.python.org/3/library/re.html#re.sub
    return re.sub(
        r'kitten|puppy|piglet|foal|fawn|duckling|chick',
        'cutie',
        string,
    )


# LECTURE EXAMPLE 38: Add "cute little" before each cute animal
def add_cute_little_before_animals(string):
    """For any of the animal strings below, add "cute little" before it.

    kitten
    puppy
    piglet
    foal
    fawn
    duckling
    chick

    >>> string = 'I brought home a kitten and a puppy yesterday. Then I went to the petting zoo and saw a piglet, a foal and a chick.'
    >>> add_cute_little_before_animals(string)
    'I brought home a cute little kitten and a cute little puppy yesterday. Then I went to the petting zoo and saw a cute little piglet, a cute little foal and a cute little chick.'

    >>> add_cute_little_before_animals("I don't like any of those animals. They aren't cute to me.")
    "I don't like any of those animals. They aren't cute to me."
    """

    return re.sub(
        r'(kitten|puppy|piglet|foal|fawn|duckling|chick)',
        r'cute little \1',
        string,
    )


# LECTURE EXAMPLE 40: Remove *s and _s from string
def remove_asterisks(string):
    """Return the string with any asterisks (*) removed.

    >>> remove_asterisks('Now _this_ is a *workout* for your brain!')
    'Now this is a workout for your brain!'

    >>> remove_asterisks('No asterisks here.')
    'No asterisks here.'
    """

    return re.sub(
        r'\*',
        '',
        string
    )
