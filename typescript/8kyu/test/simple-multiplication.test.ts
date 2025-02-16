import { simpleMultiplication } from "../solution/simple-multiplication";

type TestCase = { input: number; output: number };

const testCases: TestCase[] = [
  { input: 2, output: 16 },
  { input: 1, output: 9 },
  { input: 8, output: 64 },
  { input: 4, output: 32 },
  { input: 5, output: 45 },
];

describe("Simple Multiplication", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(simpleMultiplication(input)).toStrictEqual(output);
    });
  });
});
