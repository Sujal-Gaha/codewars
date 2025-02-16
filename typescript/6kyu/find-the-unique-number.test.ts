import { findUniq } from "./find-the-unique-number";

type TTest = { input: number[]; output: number };

const tests: TTest[] = [
  { input: [1, 0, 0], output: 1 },
  { input: [0, 1, 0], output: 1 },
  { input: [0, 0, 1], output: 1 },
  { input: [1, 1, 1, 2, 1, 1], output: 2 },
  { input: [1, 1, 2, 1, 1], output: 2 },
  { input: [3, 10, 3, 3, 3], output: 10 },
];

tests.map(({ input, output }) => {
  test(`Input: ${input}`, () => {
    expect(findUniq(input)).toBe(output);
  });
});
