import { past } from "../solution/beginner-series-2-clock";

type TestCase = { input: { h: number; m: number; s: number }; output: number };

const testCases: TestCase[] = [
  { input: { h: 0, m: 1, s: 1 }, output: 61000 },
  { input: { h: 1, m: 1, s: 1 }, output: 3661000 },
  { input: { h: 0, m: 0, s: 0 }, output: 0 },
  { input: { h: 1, m: 0, s: 1 }, output: 3601000 },
  { input: { h: 1, m: 0, s: 0 }, output: 3600000 },
];

describe("Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since midnight in milliseconds.", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`Input: ${input.h}, ${input.m}, ${input.s}`, () => {
      expect(past(input.h, input.m, input.s)).toStrictEqual(output);
    });
  });
});
