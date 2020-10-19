// Write your regular expressions within the // delimiters.
//     Example: /a+/
// Add flags after the last / in the regular expression.
//     Example: /a+/gm
// Group contents *within the regex* can be accessed with the syntax \groupnumber
//     for example, to reference the first group within the regex, use $1
// Group contents *within the replacement string* can be accessed with the syntax $groupnumber
//     for example, to reference the first group within the replacement, use $1

// Exercise 42: Given a file with command-line capture, find
// all the commands. The prompt looks like this:
//
// directoryname git:(branchname) $
//
// Where directoryname and branchname are the working directory
// and git branch, respectively.
//
// The regular expression should capture only commands,
// not output (which would be on lines that did not start with
// a prompt), and not the prompts themselves.
//
// Example string:
// udemy-regex git:(master) $ cd exercises
// exercises git:(master) $ ls
// js     python
// exercises git:(master) $ cd python
// python git:(master) $ ls
// 1_characters_and_quantities 5_flags                     9_lookaround
// 2_collections_and_ranges    6_greedy_vs_lazy            run_tests.sh
// 3_whitespace_and_boundaries 7_groups
// 4_character_categories      8_substitution
// python git:(master) $ cd 9_lookaround
// 9_lookaround git:(master) $ ls
// __pycache__ evaluate.py
// 9_lookaround git:(master) $ touch lookaround.py
export const commandsRegex = /(?<=.+ git:\(.+\) \$ ).+/gm;

// Exercise 43: There's a document formatted so that each
// name is on its own line preceded by "Name: " (no quotes).
// Capture all the names, without the preceding "Name: " string.
// Example document:
//
// Name: Nanny McPhee
// Email: nanny.mcphee@notarealdomain.com
//
// Name: Muhammad Ali
// Email: muhammad.ali@notarealemaildomain.com
export const nameRegex = /(?<=Name: ).+/gm;

// Exercise 44: You have a string containing tags,
// separated by commas. Each tag contains only letters,
// numbers and underscores.
//
// Capture the tags that start with `meta__` (no quotes).
// Capture only the part of the tags AFTER the `meta__`
//
// Example tag string:
// a_tag, meta__another_tag, meta__third_tag, fourth_tag
export const metaTagRegex = /(?<=meta__)\w+/g;

// Exercise 45: Find each word directly before a semicolon
// in a block of text (but do not capture the semicolon).
// Text may be multi-line.
export const wordBeforeSemiRegex = /\b\w+(?=;)/mg;

// Exercise 46: Given a list of file names, capture files
// that contain `py` (without quotes) but NOT at the end of
// the string (that is, not python files)
// HINT: use negative lookbehind from the end of
// the string
//
// Example file list:
// happy.js
// happy.py
// sad.sh
// sad.py
// pyrite.go
//
// Output: happy.js, pyrite.go
export const nonPyfileRegex = /.*py.*(?<!py)$/mg;
