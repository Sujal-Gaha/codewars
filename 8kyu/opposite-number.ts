// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number: number): number {
  if (number === 0) return 0;
  return -number;
}

console.log(opposite(1)); // -1
console.log(opposite(0)); // 0
console.log(opposite(4.25)); // -4.25
console.log(opposite(-5)); // 5
