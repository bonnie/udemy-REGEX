# Flags key (from `man grep`)
    #  -c, --count
    #          Only a count of selected lines is written to standard output.
    #  -E, --extended-regexp
    #          Interpret pattern as an extended regular expression (i.e. force grep
    #          to behave as egrep).

###### LECTURE EXAMPLE 0: js filenames ######
echo 'regular-expressions.js
RegularExpressionInput.jsx
cannot_get_enough_of_regular_expressions.py
regular_expression_overload.php
I-heart-kittens.ts
RegularExpressionOutput.jsx
regular_expressions_are_ready_to.go
even-more-regular-expressions.ts
my_favorite_regexes.rb
Regex-for-fun-and-profit.js
Hey you! Check out my regular expressions!.ts' | grep -E '^\S+\.(js|jsx|ts)$'
# regular-expressions.js
# RegularExpressionInput.jsx
# I-heart-kittens.ts
# RegularExpressionOutput.jsx
# even-more-regular-expressions.ts
# Regex-for-fun-and-profit.js


###### LECTURE EXAMPLE 1: hey ######
echo 'hey' | grep -c 'hey'
# 1

echo 'heeeey' | grep -c 'hey'
# 0

echo 'potato' | grep -c 'hey'
# 0


###### LECTURE EXAMPLE 2: hey with one or more e's ######
echo 'hey' | grep -Ec 'he+y'
# 1

echo 'heeeey' | grep -Ec 'he+y'
# 1

echo 'heeeeeeeeeeeeeeeey' | grep -Ec 'he+y'
# 1

echo 'hy' | grep -Ec 'he+y'
# 0


###### LECTURE EXAMPLE 3: Kitten! or Kittens! ######
echo 'Kitten!' | grep -Ec 'Kittens?!'
# 1

echo 'Kittens!' | grep -Ec 'Kittens?!'
# 1

echo 'kitten!' | grep -Ec 'Kittens?!'
# 0

echo 'Kittensssssssss!' | grep -Ec 'Kittens?!'
# 0


###### LECTURE EXAMPLE 4: Kittens with any number of ! ######
echo 'Kittens' | grep -Ecx 'Kittens!*'
# 1

echo 'Kittens!' | grep -Ecx 'Kittens!*'
# 1

echo 'Kittens!!!!!!!!' | grep -Ecx 'Kittens!*'
# 1

echo 'Kittens.' | grep -Ecx 'Kittens!*'
# 0


###### LECTURE EXAMPLE 5: meh kittens ######
echo 'Kittens.' | grep -Ecx 'Kittens\.+'
# 1

echo 'Kittens..' | grep -Ecx 'Kittens\.+'
# 1

echo 'Kittens...' | grep -Ecx 'Kittens\.+'
# 1

echo 'Kittens...........................' | grep -Ecx 'Kittens\.+'
# 1

echo 'Kittens' | grep -Ecx 'Kittens\.+'
# 0

echo 'Kittens!' | grep -Ecx 'Kittens\.+'
# 0


###### LECTURE EXAMPLE 6: Kittens with 1 to 3 periods after ######
echo 'Kittens.' | grep -Ecx 'Kittens\.{1,3}'
# 1

echo 'Kittens..' | grep -Ecx 'Kittens\.{1,3}'
# 1

echo 'Kittens...' | grep -Ecx 'Kittens\.{1,3}'
# 1

echo 'Kittens' | grep -Ecx 'Kittens\.{1,3}'
# 0

echo 'Kittens.' | grep -Ecx 'Kittens\.{1,3}'
# 1

echo 'Kittens.' | grep -Ecx 'Kittens\.{1,3}'
# 1


###### LECTURE EXAMPLE 7: Kittens with exactly 3 dots ######
echo 'Kittens.' | grep -Ecx 'Kittens\.{3}'
# 0

echo 'Kittens...' | grep -Ecx 'Kittens\.{3}'
# 1

echo 'Kittens' | grep -Ecx 'Kittens\.{3}'
# 0

echo 'Kittens.............' | grep -Ecx 'Kittens\.{3}'
# 0


###### LECTURE EXAMPLE 8: Kittens with at least 3 dots ######
echo 'Kittens.' | grep -Ecx 'Kittens\.{3,}'
# 0

echo 'Kittens...' | grep -Ecx 'Kittens\.{3,}'
# 1

echo 'Kittens' | grep -Ecx 'Kittens\.{3,}'
# 0

echo 'Kittens.............' | grep -Ecx 'Kittens\.{3,}'
# 1

