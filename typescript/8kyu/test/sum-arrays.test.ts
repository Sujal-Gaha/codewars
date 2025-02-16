import { sum } from "../solution/sum-arrays";

type TestCase = { input: number[]; output: number };

const testCases: TestCase[] = [
  { input: [1, 5.2, 4, 0, -1], output: 9.2 },
  { input: [], output: 0 },
  { input: [1, 2], output: 3 },
  { input: [0, 3, 4, 5], output: 12 },
  { input: [1, 2, 2], output: 5 },
  { input: [], output: 0 },
];

describe("Sum Arrays", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(sum(input)).toStrictEqual(output);
    });
  });
});
