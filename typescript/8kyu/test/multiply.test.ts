import { multiply } from "../solution/multiply";

type TestCase = { input: { a: number; b: number }; output: number };

const testCases: TestCase[] = [
  { input: { a: 1, b: 1 }, output: 1 },
  { input: { a: 2, b: 1 }, output: 2 },
  { input: { a: 2, b: 2 }, output: 4 },
  { input: { a: 3, b: 5 }, output: 15 },
  { input: { a: 5, b: 0 }, output: 0 },
  { input: { a: 0, b: 0 }, output: 0 },
  { input: { a: 0, b: 1 }, output: 0 },
  { input: { a: 1, b: 0 }, output: 0 },
  { input: { a: 0, b: 2 }, output: 0 },
  { input: { a: 2, b: 0 }, output: 0 },
];

describe("Multiply", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(multiply(input.a, input.b)).toStrictEqual(output);
    });
  });
});
