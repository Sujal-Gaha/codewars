import { isDivisible } from "../solution/is-n-divisible-by-x-and-y";

type TestCase = { input: { n: number; x: number; y: number }; expected: boolean };

const testCases: TestCase[] = [
  { input: { n: 3, x: 3, y: 4 }, expected: false },
  { input: { n: 12, x: 3, y: 4 }, expected: true },
  { input: { n: 8, x: 3, y: 4 }, expected: false },
  { input: { n: 48, x: 3, y: 4 }, expected: true },
  { input: { n: 4, x: 3, y: 4 }, expected: false },
  { input: { n: 12, x: 2, y: 6 }, expected: true },
  { input: { n: 100, x: 5, y: 3 }, expected: false },
  { input: { n: 12, x: 7, y: 5 }, expected: false },
  { input: { n: 12, x: 6, y: 6 }, expected: true },
  { input: { n: 12, x: 6, y: 7 }, expected: false },
];

describe("Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.", () => {
  testCases.forEach(({ input, expected }, index) => {
    it(`${index + 1}. Input: ${input.n}, ${input.x}, ${input.y}`, () => {
      expect(isDivisible(input.n, input.x, input.y)).toBe(expected);
    });
  });
});
