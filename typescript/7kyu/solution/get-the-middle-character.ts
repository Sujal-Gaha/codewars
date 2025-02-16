// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

export function getMiddle(s: string): string {
  let n = s.length;
  if (n % 2 === 0) {
    let index = (n / 2 + (n / 2 + 1)) / 2;
    index--;
    let left_i = Math.floor(index);
    let right_i = Math.ceil(index);

    return s[left_i] + s[right_i];
  } else {
    let index = (n + 1) / 2;
    index--;
    return s[index];
  }
}
