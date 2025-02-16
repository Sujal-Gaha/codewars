import { sumTwoSmallestNumbers } from "../solution/sum-of-two-lowest-positive-integers";

type TestCase = { input: number[]; output: number };

const testCases: TestCase[] = [
  { input: [5, 8, 12, 19, 22], output: 13 },
  { input: [15, 28, 4, 2, 43], output: 6 },
  { input: [3, 87, 45, 12, 7], output: 10 },
  { input: [23, 71, 33, 82, 1], output: 24 },
  { input: [52, 76, 14, 12, 4], output: 16 },
];

describe("sumTwoSmallestNumbers", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(sumTwoSmallestNumbers(input)).toStrictEqual(output);
    });
  });
});
