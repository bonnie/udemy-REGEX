# Regex 101 Exercises for Character Classes

These exercises are in text form, with Exercise strings and expected outcomes to check against in Regex101.

###

### 👉 Exercise 14

Match two or more `o`s, but only if they’re in the middle of a word. Do not include any characters other than the `o`s in the match.

- `Look at me!` should match `oo`
- `Booooom! That’s how it’s done!` should match `ooooo`
- `Yahooooooooooo` should match `oooooooooo`
- `ooh, that’s pretty` should **not** match
- `yahoo!` should **not** match

###

### 👉 Exercise 15

Match list item strings that start with one or more digits followed by a `)`. Match the entire contents of each list item string (not just the digit(s) and parenthesis).

- `1) Finish regex course` should match the entire string
- `223513) Go to bed` should match the entire string
- `I think it would be best to 1) stop, 2) drop, and 3) roll` should **not** match
- `1. Wake up at noon` should **not** match
- `a) You don't talk about fight club` should **not** match

###

### 👉 Exercise 16

Match any whitespace at the end of a string. Do not include characters other than the whitespace in the match, and do not match strings that don’t have whitespace at the end.
**Note: for all the Exercises, replace the backslash notation with the actual character (tab for \t and newline for \n)**

- `hi\t ` should match `\t `
- `hi \n` should match ` \n`
- ` \t \n` should match ` \t \n`
- `hi\t !` should **not** match
- ` \t\thi` should **not** match

###

### 👉 Exercise 17

Find any phrase that matches `____ the ____`. That is, one word before and after `the`. Don't match any non-word characters before or after the matched string.

- `She sells seashells by the seashore.` should match `by the seashore`
- `What the heck does this regular expression mean?` should match `What the heck`
- `Is that what the walrus said?` should match `what the walrus`
- `The rain in Spain falls mainly on the plain` should match `on the plain`
- `I said, the bees knees!` should **not** match
- `So then I was like, "What the...?!?` should **not** match
- `the lion sleeps tonight` should **not** match

###

### 👉 Exercise 18

Make a simplified email address matcher with these rules:

- One or more word or period (`.`) characters before the `@`
- At least one  period (`.`) after the `@`
- The string should contain only the email address and no surrounding characters

Interested in an unsimplified version? See http://emailregex.com/

- `me@notarealemail.com` should match
- `not_real@im.so.fake.com` should match
- `not real@im.so.fake.com` should **not** match
- `not.real_at_im.so.fake.com` should **not** match
