// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

export function findAverage(array: number[]): number {
  if (!array.length) return 0;
  return array.reduce((acc, curr) => acc + curr, 0) / array.length;
}
