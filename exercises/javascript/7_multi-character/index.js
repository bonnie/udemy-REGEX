// Write your regular expressions within the // delimiters.
//     Example: /a+/
// Add flags after the last / in the regular expression.
//     Example: /a+/gm

// Exercise 29: Match strings that contain either `puppy` or
// `puppies` (no quotes, case sensitive)
export const puppyOrPuppiesRegex = /pupp(y|ies)/;

// Exercise 30: Match a string whose only contents represent
// a playing card. This would be the card number, which is
// - a choice of 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
// - a space character
// - the word `of` (without the quotes)
// - a space character
// - the suit (hearts, spades, diamonds, or clubs)
export const playingCardRegex =
  /^([2-9JQKA]|10) of (heart|spade|diamond|club)s$/;

// Exercise 31: Test whether a string is a valid hex web color:
// The string must start with a `#` (no quotes)
// then contain 3 or 6 (but not 4 or 5) hex digits
//
// alphabetical hex digits can be lower or uppercase
// The hex string should comprise the entire string.
export const hexStringRegex = /^#([\dA-F]{3}){1,2}$/i;

// Exercise 32: In a log file, parse out all lines that contain
// `ERROR` or `FATAL` (no quotes). No need to capture which one
// (ERROR or FATAL) you found in the line.
// Example log contents:
//
// 2012-02-03 18:35:34 SampleClass6 [INFO] everything normal for id 577725851
// 2012-02-03 18:35:34 SampleClass4 [FATAL] system problem at id 1991281254
// 2012-02-03 18:35:34 SampleClass3 [DEBUG] detail for id 1304807656
// 2012-02-03 18:35:34 SampleClass3 [WARN] missing id 423340895
// 2012-02-03 18:35:34 SampleClass5 [TRACE] verbose detail for id 2082654978
// 2012-02-03 18:35:34 SampleClass0 [ERROR] incorrect id  1886438513
// 2012-02-03 18:35:34 SampleClass9 [TRACE] verbose detail for id 438634209
// 2012-02-03 18:35:34 SampleClass8 [DEBUG] detail for id 2074121310
export const errorFatalRegex = /^.*(ERROR|FATAL).*$/gm;
