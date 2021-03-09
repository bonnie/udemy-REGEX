# Flags key (from `man grep`)
    #  -c, --count
    #          Only a count of selected lines is written to standard output.
    #  -E, --extended-regexp
    #          Interpret pattern as an extended regular expression (i.e. force grep
    #          to behave as egrep).

###### LECTURE EXAMPLE 9: hex numbers ######
echo '1F' | grep -Ec '^[0-9A-F]+$'
# 1

echo 'C70' | grep -Ec '^[0-9A-F]+$'
# 1

echo '3NA' | grep -Ec '^[0-9A-F]+$'
# 0

echo '' | grep -Ec '^[0-9A-F]+$'
# 0


###### LECTURE EXAMPLE 10: match sentence  ######
echo 'Do you want to get coffee with me?' | grep -Ec '^[A-Z][^\.!?]*[\.!?]$'
# 1

echo 'I love kittens!' | grep -Ec '^[A-Z][^\.!?]*[\.!?]$'
# 1

echo 'This is the best Udemy course ever. Why are you laughing?' | grep -Ec '^[A-Z][^\.!?]*[\.!?]$'
# 0

echo "'sup?" | grep -Ec '^[A-Z][^\.!?]*[\.!?]$'
# 0

echo 'Kittens are' | grep -Ec '^[A-Z][^\.!?]*[\.!?]$'
# 0