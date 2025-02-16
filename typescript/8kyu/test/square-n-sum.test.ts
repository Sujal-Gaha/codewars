import { squareSum } from "../solution/square-n-sum";

type TestCase = { input: number[]; output: number };

const testCases: TestCase[] = [
  { input: [1, 2], output: 5 },
  { input: [0, 3, 4, 5], output: 50 },
  { input: [], output: 0 },
  { input: [1, 2, 2], output: 9 },
  { input: [0, 3, 4, 5], output: 50 },
  { input: [], output: 0 },
];

describe("Square n Sum", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(squareSum(input)).toStrictEqual(output);
    });
  });
});
