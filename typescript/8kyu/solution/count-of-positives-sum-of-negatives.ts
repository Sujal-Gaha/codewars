// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

export function countPositivesSumNegatives(input: number[]): number[] {
  if (input == null || input.length === 0) return [];

  let count = 0;
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) count++;
    if (input[i] < 0) sum += input[i];
  }

  return [count, sum];
}
