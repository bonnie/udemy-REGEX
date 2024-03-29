- Exercise numbering continues from last exercises
- Write your regular expressions inside the raw string
  - for example: `r'a+'`
- Add **flags** in the `(?)` part at the beginning of the regex
  - for example `r'(?m)a+'`
  - if no flags are required, remove the (?) part.
- **IMPORTANT NOTE ABOUT THE g FLAG IN PYTHON**
  - In python, the `g` flag does not exist, and instead the notion of one match vs all matches is designated by which method you use.
  - If an exercise requires a `g` flag, you may omit it; I will take care of the proper method in the tests.
  - We will talk about methods in the python-specific section at the end of the course.
- **Group contents** can be accessed with the syntax `\groupnumber`
  - for example, to reference the first group, use `\1`
- **IMPORTANT NOTE ABOUT LOOKBEHINDS IN PYTHON**
  - For performance reasons, Python does not allow lookbehinds that have non-fixed-width (that is, lookbehinds with quantifiers that could match a variable number of characters).
  - If you find yourself wanting to use a negative lookbehind with variable quantifiers, you will need to instead match the tokens without a lookbehind, and use a group to capture the intended part of the string.
