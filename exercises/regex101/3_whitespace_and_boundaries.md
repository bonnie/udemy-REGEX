# Regex 101 Exercises for Whitespace Characters and String Boundaries

These exercises are in text form, with Exercise strings and expected outcomes to check against in Regex101.

###

### 👉 Exercise 9

Match all strings with one or more space characters at the end, preparing to replace them with an empty string. The contents of the string before the spaces is not important.

- `trail ` should match
- `trail ` should match
- `trail \t` (where `\t` is an actual tab character) should **not** match
- ` hey, i have no space at the end` should **not** match

###

### 👉 Exercise 10

Match strings that contain two tabs in a row anywhere in the string. Contents of the string are unimportant.
**Note: for all the Exercises, `\t` is an actual tab character. You should erase it and type a tab character from your keyboard in its place in regex101**

- `tab\t\ttab` should match
- `t\ttwotabs` should match
- `tabs\t\t\t` should match
- `one\ttab` should **not** match
- `no tabs` should **not** match
- `\tseparated\ttabs` should **not** match

###

### 👉 Exercise 11

Match strings that contain two tabs, not necessarily in a row, anywhere in the string. Contents of the string are unimportant.
**Note: for all the Exercises, `\t` is an actual tab character. You should erase it and type a tab character from your keyboard in its place in regex101**

- `\tseparated\ttabs` should match
- `tab\t\ttab` should match
- `t\ttwotabs` should match
- `\tta\tb\ts` should match
- `one\ttab` should **not** match
- `no tabs` should **not** match

###

### 👉 Exercise 12

Match strings that start with at least three digits from `0` to `5` (inclusive). Contents of the string are unimportant.

- `321 yay!` should match
- `54321 yay!` should match
- `21 yay!` should **not** match
- `yay! 321!` should **not** match
- `987654321 yay!` should **not** match

###

### 👉 Exercise 13

Match entire strings that don’t contain the letter `E` (capital or lowercase).

- `Python` should match
- `Whazzup????` should match
- `lol` should **not** match
- `Expressions` should **not** match the entire string
- `unique New York` should **not** match the entire string
