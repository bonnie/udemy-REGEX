// Write your regular expressions within the // delimiters.
//     Example: /a+/
// Add flags after the last / in the regular expression.
//     Example: /a+/gm

// Exercise 25: Continuing from the exercises from last section:
// using the same Robert Frost text, find the shortest first
// phrase that starts and ends with “and” (no quotes, case doesn’t matter)
// The text:
//
// The woods are lovely, dark, and deep,
// But I have promises to keep,
// And miles to go before I sleep,
// And miles to go before I sleep.
export const shortestFirstAndBookendRegex = /and.*?and/is;

// Exercise 26: Find as many non-overlapping strings as you
// can that start with ‘s’ (no quotes, case sensitive) and ends
// with ‘e’ (no quotes). Matched strings should be all on the
// same line.
export const nonOverlappingSeStringsRegex = /s.*?e/g;

// Exercise 27: In an HTML string, find all the elements
// (including surrounding tags). That is, find strings that start
// with a string in angle brackets (for example, <i>) and end
// with a string in angle brackets that starts with a slash (for
// example, </i>). HTML strings may be multiline.
//
// NOTE: You don't yet have the tools to deal with nested
// elements (like <p>Don't you just <b>love</b> regexes?</p>)
// We will discuss this case in the next lecture on groups!
export const htmlElementRegex = /<.+?>.*?<\/.+?>/gm;

// Exercise 28: For an added challenge, try the last exercise,
// but also capture elements that only have *only one tag* that
// ends with /> (because the element has no contents to put
// between tags, for example,
// <img src=”http://placekitten.com/200/300” /> )
export const htmlElementIncludingSingleTagsRegex = /<.+?>?.*?<?\/.*?>/gm;
