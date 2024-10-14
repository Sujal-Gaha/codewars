// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

function findSmallestInt(args: number[]): number {
  let smallest = args[0];
  for (let i = 0; i < args.length; i++) {
    if (args[i] < smallest) {
      smallest = args[i];
    }
  }
  return smallest;
}

console.log(findSmallestInt([78, 56, 232, 12, 8])); // 8
console.log(findSmallestInt([78, 56, 232, 12, 18])); // 12
console.log(findSmallestInt([78, 56, 232, 412, 228])); // 56
console.log(findSmallestInt([78, 56, 232, 12, 0])); // 0
console.log(findSmallestInt([1, 56, 232, 12, 8])); // 1
