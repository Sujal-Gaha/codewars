import { isSquare } from "../solution/you-re-a-square";

type TestCase = { input: number; output: boolean };

const testCases: TestCase[] = [
  { input: -1, output: false },
  { input: 0, output: true },
  { input: 3, output: false },
  { input: 4, output: true },
  { input: 25, output: true },
  { input: 26, output: false },
];

describe("isSquare", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(isSquare(input)).toStrictEqual(output);
    });
  });
});
