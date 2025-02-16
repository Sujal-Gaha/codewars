import { getAverage } from "../solution/get-the-mean-of-an-array";

type TestCase = { input: number[]; output: number };

const testCases: TestCase[] = [
  { input: [2, 2, 2, 2], output: 2 },
  { input: [1, 2, 3, 4, 5], output: 3 },
  { input: [1, 1, 1, 1, 1, 1, 1, 2], output: 1 },
  { input: [], output: 0 },
  { input: [0], output: 0 },
  { input: [-1, -1, -1, -1, -1, -1, -1, -1], output: -1 },
  { input: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], output: 4 },
  { input: [-1, -2, -3, -4, -5, -6, -7, -8, -9], output: -5 },
  { input: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], output: 5 },
  { input: [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], output: -6 },
];

describe("Return the average of the given array rounded down to its nearest integer.", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(getAverage(input)).toStrictEqual(output);
    });
  });
});
