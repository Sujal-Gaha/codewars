import { sumMix } from "../solution/sum-mixed-array";

type TestCase = { input: (string | number)[]; output: number };

const testCases: TestCase[] = [
  { input: [9, 3, "7", "3"], output: 22 },
  { input: ["5", "0", 9, 3, 2, 1, "9", 6, 7], output: 42 },
  { input: ["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"], output: 41 },
];

describe("Sum Mixed Array", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(sumMix(input)).toStrictEqual(output);
    });
  });
});
