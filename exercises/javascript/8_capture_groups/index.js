// Write your regular expressions within the // delimiters.
//     Example: /a+/
// Add flags after the last / in the regular expression.
//     Example: /a+/gm
// Group contents can be accessed with the syntax \groupnumber
//      for example, to reference the first group, use \1


// Exercise 33: Match strings that start and end with the same word.
// We do want to capture the word.
// Assume all strings do not contain newlines.
export const wordBookendRegex = /^(\w+)\b.*\b\1$/;

// Exercise 34: Given a list of files in a directory (separated
// by newlines), identify which files have a vi swap file
// vi swap files look like this: .filename.swp
// So if there were a file in the directory called .favoriteRegexes.txt.swp
// You would want to include favoriteRegexes.txt in your results
export const viSwapRegex = /^\.(.*)\.swp$/mg;

// Exercise 35: Given data shaped like this:
//   03Sep2020 04:55:38 This is a message
//   03Oct2020 23:44:01 This is another message
// Extract:
//   the day as a group named day
//   the month as “month”
//   the year as “year”
//   the time as a group named “time”
//   the message as a group named “message”
//
// NOTE: you do not need to validate the date and time (for example, you don’t
// need to confirm that the date has a valid month or that the time is valid
// for a 24 hr clock) -- you can assume the data is clean. Simply extract the
// parts.
//
// Example result from the first line of sample data:
//   day=03
//   month=Sep
//   year=2020
//   time=04:55:38
//   message=This is a message

// IMPORTANT NOTE: Udemy's code exercise engine is not capable of handling this
// regular expression. If you would like to do this exercise, please check your answers
// in the course repository. 
// https://github.com/bonnie/udemy-regex-syntax-examples/tree/master/exercises/javascript/8_capture_groups
export const extractLogPartsRegex = /^(?<day>\d\d)(?<month>\w{3})(?<year>\d{4}) (?<time>[\d:]{8}) (?<message>.*)$/mg
