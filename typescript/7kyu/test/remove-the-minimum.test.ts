import { removeSmallest } from "../solution/remove-the-minimum";

type TestCase = { input: number[]; output: number[] };

const testCases: TestCase[] = [
  { input: [1, 2, 3, 4, 5], output: [2, 3, 4, 5] },
  { input: [5, 3, 2, 1, 4], output: [5, 3, 2, 4] },
  { input: [2, 2, 1, 2, 1], output: [2, 2, 2, 1] },
  { input: [], output: [] },
];

describe("removeSmallest", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(removeSmallest(input)).toStrictEqual(output);
    });
  });
});
