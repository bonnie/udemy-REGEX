# Regex 101 Exercises for Multi-Character Strings: Quantifiers and Options

These exercises are in text form, with Exercise strings and expected outcomes to check against in Regex101. 

###
### 👉 Exercise 29
Match strings that contain either `puppy` or `puppies` (case sensitive)
  - `puppy` should match
  - `puppies` should match
  - `puppies and kittens` should match
  - `kittens` should **not** match

###
### 👉 Exercise 30
Match a string whose only contents represent a playing card. The elements:
- the card number, which is a choice of `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `J`, `Q`, `K`, `A`
- a space character
- the word `of`
- a space character
- the suit (`hearts`, `spades`, `diamonds`, or `clubs`)

  - `10 of clubs` should match
  - `A of hearts` should match
  - `3 of spades` should match
  - `11 of diamonds` should **not** match
  - `23 of hearts` should **not** match
  - `J of dots` should **not** match
  - `3 of hearts, Q of clubs` should **not** match

###
### 👉 Exercise 31
Test whether a string is a valid hex web color:
- the string must start with a #
- then contain 3 or 6 (but not 4 or 5) hex digits (https://en.wikipedia.org/wiki/Hexadecimal)
- alphabetical hex digits can be lower or uppercase

The hex string should comprise the entire string.

  - `#ab4` should match
  - `#AB4B72` should match
  - `#ab43` should **not** match
  - `#aaaaaaaaa` should **not** match 
  - `#ahl` should **not** match

###
### 👉 Exercise 32
In a log file, parse out all lines that contain `ERROR` or `FATAL`.

Exercise log contents:
```
2012-02-03 18:35:34 SampleClass6 [INFO] everything normal for id 577725851
2012-02-03 18:35:34 SampleClass4 [FATAL] system problem at id 1991281254
2012-02-03 18:35:34 SampleClass3 [DEBUG] detail for id 1304807656
2012-02-03 18:35:34 SampleClass3 [WARN] missing id 423340895
2012-02-03 18:35:34 SampleClass5 [TRACE] verbose detail for id 2082654978
2012-02-03 18:35:34 SampleClass0 [ERROR] incorrect id  1886438513
2012-02-03 18:35:34 SampleClass9 [TRACE] verbose detail for id 438634209
2012-02-03 18:35:34 SampleClass8 [DEBUG] detail for id 2074121310
```

  - should match 
    - `2012-02-03 18:35:34 SampleClass4 [FATAL] system problem at id 1991281254`
    - `2012-02-03 18:35:34 SampleClass0 [ERROR] incorrect id  1886438513`,