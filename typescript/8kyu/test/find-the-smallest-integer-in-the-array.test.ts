import { findSmallestInt } from "../solution/find-the-smallest-integer-in-the-array";

type TestCase = { input: number[]; output: number };

const testCases: TestCase[] = [
  { input: [78, 56, 232, 12, 8], output: 8 },
  { input: [78, 56, 232, 12, 18], output: 12 },
  { input: [78, 56, 232, 412, 228], output: 56 },
  { input: [78, 56, 232, 12, 0], output: 0 },
  { input: [1, 56, 232, 12, 8], output: 1 },
  { input: [0, 56, 232, 12, 8], output: 0 },
  { input: [1, 56, 232, 12, 1], output: 1 },
  { input: [1, 56, 232, 12, 0], output: 0 },
  { input: [], output: 0 },
  { input: [1], output: 1 },
];

describe("Given an array of integers your solution should find the smallest integer.", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(findSmallestInt(input)).toStrictEqual(output);
    });
  });
});
