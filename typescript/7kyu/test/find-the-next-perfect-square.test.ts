import { findNextSquare } from "../solution/find-the-next-perfect-square";

type TestCase = { input: number; output: number };

const testCases: TestCase[] = [
  { input: 121, output: 144 },
  { input: 625, output: 676 },
  { input: 319225, output: 320356 },
  { input: 15241383936, output: 15241630849 },
  { input: 155, output: -1 },
  { input: 342786627, output: -1 },
];

describe("findNextSquare", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(findNextSquare(input)).toStrictEqual(output);
    });
  });
});
