# Regex 101 Exercises for Collections, Character Ranges and Negation

These exercises are in text form, with Exercise strings and expected outcomes to check against in Regex101.

_Note: We haven't yet learned how to enforce that the entire string should match, so some of the "wrong" strings will have partial matches. If this is the case, I've indicated that the regular expression "should not match the entire string."_

###

### 👉 Exercise 5

Match a string that represents a binary number (contains only `0`s and `1`s)

- `0` should match
- `0110100110` should match
- `14` should **not** match

###

### 👉 Exercise 6

Match a potential Hawaiian word from this collection of letters: `AEIOUHKLMNPW` Apostrophe (`'`) is an option for all but the first letter. The first letter may be lowercase or capital; other letters must be lowercase. The word must contain one or more letters.

- `Aloha` should match
- `umuhumunukunukuapua'a` should match
- `alohA` should **not** match
- `Fred` should **not** match
- An empty string should **not** match

###

### 👉 Exercise 7

Match a telephone number of the format `555-555-5555` (where each of the `5`s could be any digit).

- `123-456-7890` should match
- `12-456-7890` should **not** match
- `1234-456-7890` should **not** match entire string
- `abc-def-hijk` should **not** match
- `1234567890` should **not** match

###

### 👉 Exercise 8

Match strings that are at least six characters and don’t contain the letter `A` (uppercase or lowercase).

- `Python` should match
- `unique New York` should match
- `Regular Expressions` should **not** match entire string
- `ALOHA` should **not** match
