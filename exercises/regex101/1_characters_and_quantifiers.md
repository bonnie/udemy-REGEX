# Regex 101 Exercises for Explicit Characters and Quantifiers

These exercises are in text form, with Exercise strings and expected outcomes to check against in Regex101. 

*Note: We haven't yet learned how to enforce that the entire string should match, so some of the "wrong" strings will have partial matches. If this is the case, I've indicated that the regular expression "should not match the entire string."*

###
### 👉 Exercise 1
Match the string `yeehaw` with 2 or more es after the `y`, and an optional exclamation point (`!`) at the end.
   - `yeehaw` should match
   - `yeeeehaw!` should match
   - `yehaw` should **not** match
   - `yeehaw!!!!` should **not** match the entire string

###
### 👉 Exercise 2
Match the word `hiss`, followed by zero or more `s`, in the most readable form you can.
   - `hiss` should match
   - `hisssss` should match
   - `his` should **not** match

###
### 👉 Exercise 3
Match the word `Yay` with three, four, five or six exclamation points at the end.
   - `Yay!!!` should match
   - `Yay!!!!!!` should match
   - `Yay!!` should **not** match
   - `Yay!!!!!!!` should **not** match the entire string

###
### 👉 Exercise 4
Match `Call me maybe` with any number of `?`s at the end (including zero).
   - `Call me maybe` should match
   - `Call me maybe?` should match
   - `Call me maybe????????????` should match
   - `Call me maybe!` should **not** match the entire string
