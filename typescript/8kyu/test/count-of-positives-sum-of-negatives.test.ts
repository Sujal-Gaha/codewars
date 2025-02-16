import { countPositivesSumNegatives } from "../solution/count-of-positives-sum-of-negatives";

type TestCase = { input: number[]; output: number[] };

const testCases: TestCase[] = [
  { input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], output: [10, -65] },
  { input: [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14], output: [8, -50] },
  { input: [], output: [] },
  { input: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], output: [0, 0] },
  { input: [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], output: [0, -55] },
  { input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], output: [10, 0] },
  { input: [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, 11, 12, 13, 14, 15], output: [5, -55] },
  { input: [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, 11, 12, 13, 14], output: [4, -55] },
  { input: [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, 11, 12, 13], output: [3, -55] },
  { input: [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, 11, 12], output: [2, -55] },
];

describe("Given an array of integers. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(countPositivesSumNegatives(input)).toStrictEqual(output);
    });
  });
});
