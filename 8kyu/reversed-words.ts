// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str: string): string {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("hello world!")); // "world! hello"
console.log(reverseWords("yoda doesn't speak like this")); // "this like speak doesn't yoda"
console.log(reverseWords("foobar")); // "foobar"
console.log(reverseWords("kata editor")); // "editor kata"
console.log(reverseWords("row row row your boat")); // "boat your row row row"
console.log(reverseWords("")); // ""
