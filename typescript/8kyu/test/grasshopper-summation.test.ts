import { summation } from "../solution/grasshopper-summation";

type TestCase = { input: number; expected: number };

const testCases: TestCase[] = [
  { input: 1, expected: 1 },
  { input: 2, expected: 3 },
  { input: 8, expected: 36 },
  { input: 0, expected: 0 },
  { input: 5, expected: 15 },
  { input: 10, expected: 55 },
  { input: 20, expected: 210 },
  { input: 30, expected: 465 },
  { input: 40, expected: 820 },
  { input: 50, expected: 1275 },
];

describe("Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.", () => {
  testCases.forEach(({ input, expected }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(summation(input)).toBe(expected);
    });
  });
});
