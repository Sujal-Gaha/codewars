import { findAverage } from "../solution/calculate-average";

type TestCase = { input: number[]; output: number };

const testCases: TestCase[] = [
  { input: [1, 1, 1], output: 1 },
  { input: [1, 2, 3], output: 2 },
  { input: [1, 2, 3, 4], output: 2.5 },
  { input: [], output: 0 },
];

describe("Write a function which calculates the average of the numbers in a given list. Note: Empty arrays should return 0.", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(findAverage(input)).toStrictEqual(output);
    });
  });
});
