import { positiveSum } from "../solution/sum-of-positive";

type TestCase = { input: number[]; output: number };

const testCases: TestCase[] = [
  { input: [1, 2, 3, 4, 5], output: 15 },
  { input: [1, -2, 3, 4, 5], output: 13 },
  { input: [], output: 0 },
  { input: [-1, -2, -3, -4, -5], output: 0 },
  { input: [-1, 2, 3, 4, -5], output: 9 },
];

describe("Sum of positive", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(positiveSum(input)).toStrictEqual(output);
    });
  });
});
