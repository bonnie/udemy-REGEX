# Regex101 Exercises for Lookarounds

These exercises are in text form, with Exercise strings and expected outcomes to check against in Regex101. 

###
### 👉 Exercise 42
Given a file with command-line capture, find all the commands. 
- The prompt looks like this:
  - `directoryname git:(branchname) $`, where `directoryname` and `branchname` are the working directory and git branch, respectively.
- The regular expression should capture only commands, not output (which would occur on lines that did not start with a prompt), and not the prompts themselves.

  - ```
    udemy-regex git:(master) $ cd exercises
    exercises git:(master) $ ls
    js     python
    exercises git:(master) $ cd python
    python git:(master) $ ls
    1_characters_and_quantities 5_flags                     9_lookaround
    2_collections_and_ranges    6_greedy_vs_lazy            run_tests.sh
    3_whitespace_and_boundaries 7_groups
    4_character_categories      8_substitution
    python git:(master) $ cd 9_lookaround
    9_lookaround git:(master) $ ls
    __pycache__ evaluate.py
    9_lookaround git:(master) $ touch lookaround.py
    ```
    should match
      - `cd exercises`
      - `ls`
      - `cd python`
      - `ls`
      - `cd 9_lookaround`
      - `ls`
      - `touch lookaround.py` 


###
### 👉 Exercise 43
There's a document formatted so that each name is on its own line preceded by `Name: `. Capture all the names, without the preceding `Name: ` string.

  - ```
    Name: Vijay Hazare
    Email: vijay.hazare@notarealdomain.com

    Name: Muhammad Ali
    Email: muhammad.ali@notarealemaildomain.com
    ```
    should return 
      - `Vijay Hazare`
      - `Muhammad Ali`


###
### 👉 Exercise 44
You have a string containing tags, separated by commas. Each tag contains only letters, numbers and underscores. Capture the tags that start with `meta__`. Capture only the part of the tags after the `meta__`

  - `a_tag, meta__another_tag, meta__third_tag, fourth_tag` should match
    - `another_tag`
    - `third_tag`


###
### 👉 Exercise 45
Find each word directly before a semicolon (`;`) in a block of text (but do not capture the semicolon). Text may be multi-line.

- `I love the semicolon; it's unnecessary, but graceful and sophtisticated` should return `semicolon`.
- ```
  He was bald, or mostly bald – a crop of white stubble gilded his ears – and gave off an air of pent-up energy, of emotions kept in check; the same sense Lamb had had watching the video of him, shot eighteen years ago, through a two-way mirror in one of Regent’s Park’s luxury suites. Joke. These were underground, and were where the Service’s more serious debriefings took place; those which it might later prove politic to deny had happened.
  ```
  should return
  - `check`
  - `place`
- ```
  Mabel the Cat had made a big pot of goulash; it was simmering on the stove.
  
  Goulash was Harry the Dog's favorite; the scent drew him to the kitchen.
  
  As Mabel]'s culinary efforts continued, with bread baking in the oven and a cabbage dish just begun, she admonished Harry to keep out of her way; but Harry's ability to remain at a decent distance from the stove was severely challenged.
  
  Mabel did not take kindly to the encroachment of Harry into her personal cooking space; indeed, she at one point responded to the sudden appearance of his muzzle at her elbow with a distinct and species-appropriate hiss.
  
  Harry was an animal driven by primal need to gain immediate access to the goulash; his options for achieving that aim were, however, limited.
  
  Mabel's cooking prowess, honed through years of complex feasts, was formidable; the interruption of its application ill-advised.
  
  The scent of the baking bread was sublime, the perfume of the goulash intoxicating.
  
  On one important point Harry and Mabel agreed; that is, it would be better for all if Harry found somewhere else to be while Mabel finished cooking.
  ```
  should return 
    - `goulash`
    - `favorite`
    - `way`
    - `space`
    - `goulash`
    - `formidable`
    - `agreed`

###
### 👉 Exercise 46
Given a list of file names, capture files that contain `py` but not at the end of the string (that is, not python files). Hint: use negative lookbehind from the end of the string).

  - ```
    happy.js
    happy.py
    sad.sh
    sad.py
    pyrite.go
    ```
    should return 
    - `happy.js`
    - `pyrite.go`