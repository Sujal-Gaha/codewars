import { SeriesSum } from "../solution/sum-of-the-first-nth-term-of-series";

type Test = { input: number; output: string };

const testCases: Test[] = [
  { input: 1, output: "1.00" },
  { input: 2, output: "1.25" },
  { input: 3, output: "1.39" },
  { input: 4, output: "1.49" },
  { input: 5, output: "1.57" },
  { input: 6, output: "1.63" },
  { input: 7, output: "1.68" },
  { input: 8, output: "1.73" },
  { input: 9, output: "1.77" },
  { input: 10, output: "1.81" },
];

describe("SeriesSum", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(SeriesSum(input)).toStrictEqual(output);
    });
  });
});
