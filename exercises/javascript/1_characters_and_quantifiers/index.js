// Write your regular expressions within the // delimiters. Example: /a+/

// Exercise 1: Match the string yeehaw with 2 or more es after the y,
// and a single optional exclamation point (!) at the end
export const yeehawRegex = /yee+haw!?/;

// Exercise 2: Match the word “hi”, followed by two or more s’s
// what's the most readable way to write this?
export const hissRegex = /hiss+/;

// Exercise 3: Match the word “Yay” with three, four,
// five or six exclamation points at the end
export const yayRegex = /Yay!{3,6}/;

// Exercise 4: Match “Call me maybe” with any number of ?s
// at the end (including zero)
export const callRegex = /Call me maybe\?*/;
