import { paperwork } from "../solution/beginner-series-1-school-paperwork";

type TestCase = { input: { n: number; m: number }; output: number };

const testCases: TestCase[] = [
  { input: { n: 5, m: 5 }, output: 25 },
  { input: { n: 5, m: -5 }, output: 0 },
  { input: { n: -5, m: -5 }, output: 0 },
  { input: { n: -5, m: 5 }, output: 0 },
  { input: { n: 5, m: 0 }, output: 0 },
];

describe("paperwork", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`Input: ${input.n}, ${input.m}`, () => {
      expect(paperwork(input.n, input.m)).toStrictEqual(output);
    });
  });
});
