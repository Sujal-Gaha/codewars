// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

const positiveSumWithNoVariable = (arr: number[]): number =>
  arr.reduce(
    (total, currentValue) =>
      currentValue > 0 ? (total += currentValue) : total,
    0
  );

console.log(positiveSum([1, 2, 3, 4, 5])); // 15
console.log(positiveSum([1, -2, 3, 4, 5])); // 13
console.log(positiveSum([])); // 0
console.log(positiveSum([-1, -2, -3, -4, -5])); // 0
console.log(positiveSum([-1, 2, 3, 4, -5])); // 9

console.log(positiveSumWithNoVariable([1, 2, 3, 4, 5])); // 15
console.log(positiveSumWithNoVariable([1, -2, 3, 4, 5])); // 13
console.log(positiveSumWithNoVariable([])); // 0
console.log(positiveSumWithNoVariable([-1, -2, -3, -4, -5])); // 0
console.log(positiveSumWithNoVariable([-1, 2, 3, 4, -5])); // 9
