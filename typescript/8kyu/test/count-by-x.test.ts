import { countBy } from "../solution/count-by-x";

type Input = { x: number; n: number };

type TestCase = { input: Input; output: number[] };

const testCases: TestCase[] = [
  { input: { x: 1, n: 10 }, output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { input: { x: 2, n: 5 }, output: [2, 4, 6, 8, 10] },
  { input: { x: 3, n: 5 }, output: [3, 6, 9, 12, 15] },
  { input: { x: 4, n: 5 }, output: [4, 8, 12, 16, 20] },
  { input: { x: 5, n: 5 }, output: [5, 10, 15, 20, 25] },
  { input: { x: 6, n: 5 }, output: [6, 12, 18, 24, 30] },
  { input: { x: 7, n: 5 }, output: [7, 14, 21, 28, 35] },
  { input: { x: 8, n: 5 }, output: [8, 16, 24, 32, 40] },
  { input: { x: 9, n: 5 }, output: [9, 18, 27, 36, 45] },
  { input: { x: 10, n: 5 }, output: [10, 20, 30, 40, 50] },
];

describe("Create a function with two arguments that will return an array of the first n multiples of x.", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`Input: ${input.x}, ${input.n}`, () => {
      expect(countBy(input.x, input.n)).toStrictEqual(output);
    });
  });
});
