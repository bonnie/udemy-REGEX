# Regex 101 Exercises for Flags

These exercises are in text form, with Exercise strings and expected outcomes to check against in Regex101.

###

### 👉 Exercise 19

Match `he` or `hey` once, with any capitalization. The `he` or `hey` may be anywhere in the string; only match the `he` / `hey` part.

- `hey` should match `hey`
- `SHE` should match `HE`
- `theY LOVE Regex!` should match `heY`
- `eyeglasses` should **not** match

###

### 👉 Exercise 20

Capture all the words that start with `se` in a string (case insensitive).

- `She sells seashells by the seashore` should match `sells`, `seashells`, `seashore`
- `Sean, see if you can search for Selena.` should match `Sean`, `see`, `search`, `Selena`
- `Noses smell.` should **not** match

###

### 👉 Exercise 21

Given this block of text (the last four lines of Robert Frost’s _Stopping by the Woods on a Snowy Evening_), find all the lines that end with `eep.` (including the period). Capture the entire line.

```
The woods are lovely, dark, and deep,
But I have promises to keep,
And miles to go before I sleep,
And miles to go before I sleep.
```

- should match `And miles to go before I sleep.`

###

### 👉 Exercise 22

Using the same poem lines as above, find only the first phrase on a single line that starts with `to` and ends with `eep`.

- should match `to keep`

###

### 👉 Exercise 23

Using the same poem lines as above, capture only the first word that starts with an `a` (it could be a capital or lower case `a`).

- should match `are`

###

### 👉 Exercise 24

Using the same poem lines as above, find the first phrase that starts and ends with `and` (case doesn’t matter). The phrase may span multiple lines.

- should match
  ```
  and deep,
  But I have promises to keep,
  And miles to go before I sleep,
  And
  ```

Note: Want to know how to find the shortest first phrase? That's next section: greedy vs lazy!
