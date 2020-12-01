# Regex101 Exercises for Substitution

These exercises are in text form, with Exercise strings and expected outcomes to check against in Regex101. 

###
### 👉 Exercise 36
Replace all email addresses (using the simplified pattern description from the exercises in the character classes section) with the text `<<redacted>>`.

For reference, here's the description of the exercise for simplified email address:
- One or more word or period (`.`) characters before the `@`
- At least one  period (`.`) after the `@`

  - `not.an.email@fakedomain.com` should return `<<redacted>>`
  - `Please send to a@b.com and c@d.com. Thanks!` should return `Please send to <<redacted>> and <<redacted>>. Thanks!`
  - `This string has no emails!!` should return `This string has no emails!!`


###
### 👉 Exercise 37
Strip all html tags out of text. for example, `<b>bold statement</b>` should become `bold statement`. 

  - `<span>This is a span</span>` should return `This is a span`
  - `<span>This is a <b>span!</b></span><span>So is this.</span>` should return `This is a span!So is this.`
  - ```
    <h1>Regular Expressions</h1>
    <h2>Quantifiers</h2>
    <p>Quantifiers tell you how many of the preceding token are allowed.</p>
    ```
    should return 
    ```
    Regular Expressions
    Quantifiers
    Quantifiers tell you how many of the preceding token are allowed.
    ```
  - `No tags. Absolutely none.` should return `No tags. Absolutely none.`

###
### 👉 Exercise 38
Substitute any multiple whitespace characters (including newlines) with a single space character.
  **Note: replace the backslash notation with the actual character (tab for \t and newline for \n)**
  - `hello,\t   my   name is  Shonda` should return `hello, my name is Shonda`
  - `it's   the\n\n      most   wonderful\t\t\t time\n      of the\tyear` should return `it's the most wonderful time of the\tyear`
  - `no_multipleWhitespace__at____all` should return `no_multipleWhitespace__at____all`

###
### 👉 Exercise 39
Strip off any whitespace characters from the beginning or end of a string, but let whitespace in the middle stand. You may assume single-line strings.
Note: This one is tricky! How do you keep the "middle" part from gobbling up the outer whitespace, and yet still respect spaces in the middle?
  **Note: replace the backslash notation with the actual character (tab for \t and newline for \n)**
  - `   leading and trailing    \n\n` should return `leading and trailing`
  - `only trailing space!   \t` should return `only trailing space!`
  - `\n"Get to the back of the ship!" Tom said sternly.\n` should return `"Get to the back of the ship!" Tom said sternly.`
  - `Do not launch me out of the atmosphere please!` should return `Do not launch me out of the atmosphere please!`

###
### 👉 Exercise 40
Switch a list of names (separated by newlines) from "first last" to "last, first". Assume only each line has only two words, each made up of word characters, `-` or `'`. 

- ```
  Indira Ghandi
  Morgan Freeman
  Justin Finch-Fletchley
  Flannery O'Connor
  ```
  should return 
  ```
  Ghandi, Indira
  Freeman, Morgan
  Finch-Fletchley, Justin
  O'Connor, Flannery
  ```
- `Indira Ghandi` should return `Ghandi, Indira`
- `Pele` should return `Pele`

###
### 👉 Exercise 41
Building on the last exercise, put last name first even if there are more than two words in the name (you may assume last name is only the last word).

  - All of the Exercises in the previous exercise should return the same strings as shown above.
  - ```
    Flannery O'Connor
    Carlos Alberto Torres
    Harriet Beecher Stowe
    ```
    should return 
    ```
    O'Connor, Flannery
    Torres, Carlos Alberto
    Stowe, Harriet Beecher
    ```