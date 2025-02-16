import { findUniq } from "../solution/find-the-unique-number";

type TestCase = { input: number[]; output: number };

const testCases: TestCase[] = [
  { input: [1, 0, 0], output: 1 },
  { input: [0, 1, 0], output: 1 },
  { input: [0, 0, 1], output: 1 },
  { input: [1, 1, 1, 2, 1, 1], output: 2 },
  { input: [1, 1, 2, 1, 1], output: 2 },
  { input: [3, 10, 3, 3, 3], output: 10 },
];

describe("findUniq", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(findUniq(input)).toStrictEqual(output);
    });
  });
});
