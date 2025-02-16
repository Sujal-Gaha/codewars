// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

export function findShort(s: string): number {
  const arrStr = s.split(" ");
  let smallestLength = arrStr[0].length;
  arrStr.forEach((item) => {
    if (item.length < smallestLength) {
      smallestLength = item.length;
    }
  });
  return smallestLength;
}
