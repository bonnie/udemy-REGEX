# Regex 101 Exercises for Greedy vs. Lazy

These exercises are in text form, with Exercise strings and expected outcomes to check against in Regex101.

###

### 👉 Exercise 25

Continuing from the exercises from last section. Using the same Robert Frost poem lines, find the shortest first phrase that starts and ends with `and` (case doesn’t matter). The poem lines:

```
The woods are lovely, dark, and deep,
But I have promises to keep,
And miles to go before I sleep,
And miles to go before I sleep.
```

- should match

  ```
  and deep,
  But I have promises to keep,
  And
  ```

###

### 👉 Exercise 26

Find as many non-overlapping strings as you can that start with `s` (case sensitive) and end with `e`. Strings should be all on the same line.

- this string:

  ```
  She sells seashells by the seashore
  ```

  should return these matches:

  ```
  ['se', 's se', 'she', 's by the', 'se', 'shore']
  ```

###

### 👉 Exercise 27

In an HTML string, find all the elements (including surrounding tags). That is, find strings that start with a string in angle brackets (for example, `<i>`) and end with a string in angle brackets that starts with a slash (for example, `</i>`). HTML strings may be multiline.

Note: You don't yet have the tools to deal with nested elements (like `<p>Don't you just <b>love</b> regexes?</p>`). We will discuss this case in the section on capture groups!

- `<span>Yowza! That’s a great regular expression.</span>` should match entire string
- `<p>Learn about regular expressions here.</p><p>You\'re going to love them!</p>` should match
  - `<p>Learn about regular expressions here.</p>`
  - `<p>You're going to love them!</p>`
- ```
  <h1>Regular Expressions</h1>
  <h2>Quantifiers</h2>
  <p>Quantifiers tell you how many of the preceding token are allowed.</p>
  ```
  should match
  - `<h1>Regular Expressions</h1>`
  - `<h2>Quantifiers</h2>`
  - `<p>Quantifiers tell you how many of the preceding token are allowed.</p>`
- `I'm not HTML!!` should **not** match
- `<p>Incomplete HTML` should **not** match

###

### 👉 Exercise 28

For an added challenge, try the last exercise, but also capture elements that only have only one tag that ends with `/>` (because the element has no contents to put between tags, for example, `<img src="http://placekitten.com/200/300" />` ).

- should have the same matches / non-matches as all of the above
- ```
  <h1>Regular Expressions</h1>
  <img src=”http://placekitten.com/200/300” />
  ```
  should match
  - `<h1>Regular Expressions</h1>`
  - `<img src=”http://placekitten.com/200/300” />`
