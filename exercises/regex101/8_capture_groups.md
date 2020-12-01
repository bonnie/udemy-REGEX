# Regex101 Exercises for Substitution

These exercises are in text form, with Exercise strings and expected outcomes to check against in Regex101. 

###
### 👉 Exercise 33
Match strings that start and end with the same word. We do want to capture the word. You may assume all strings do not contain newlines.
  - `time time time` should match, captured word `time`
  - `she said no one is as lovely as she` should match, captured word `she`
  - `madam I'm Adam` should **not** match
  - `ow, I don't know` should **not** match

###
### 👉 Exercise 34
Given a list of files in a directory (separated by newlines), identify which files have a vi swap file. vi swap files look like this: `.filename.swp`. So if there were a file in the directory called `.favorite_regexes.txt.swp`, you would want to include `favorite_regexes.txt` in your results.
  - ```
    .favorite_regexes.txt.swp
    .practice.py.swp
    .DS_Store
    favorite_regexes.txt
    practice.py
    zippy.py
    ```
    should match 
      - `favorite_regexes.txt`
      - `practice.py`
  - ```
    file1
    file2
    ```
    should **not** match

###
### 👉 Exercise 35
Given data shaped like this:
```
03Sep2020 04:55:38 This is a message
03Oct2020 23:44:01 This is another message
```
Extract:
 - the day as a group named day
 - the month as “month”
 - the year as “year”
 - the time as a group named “time”
 - the message as a group named “message”

**NOTE**: you do not need to validate the date and time (for example, you don’t
need to confirm that the date has a valid month or that the time is valid
for a 24 hr clock) -- you can assume the data is clean. Simply extract the
parts.
  - ```
    03Sep2020 04:55:38 This is a message
    30Oct2020 23:44:01 This is another message
    ```
    should match
      - ```
        day=03
        month=Sep
        year=2020
        time=04:55:38
        message=This is a message
        ```
      - ```
        day=30
        month=Oct
        year=2020
        time=23:44:01
        message=This is another message
        ```
