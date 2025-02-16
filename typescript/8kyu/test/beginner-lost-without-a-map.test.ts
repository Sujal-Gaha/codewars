import { maps } from "../solution/beginner-lost-without-a-map";

type TestCase = { input: number[]; output: number[] };

const testCases: TestCase[] = [
  { input: [1, 2, 3], output: [2, 4, 6] },
  { input: [4, 1, 1, 1, 4], output: [8, 2, 2, 2, 8] },
  { input: [2, 2, 2, 2, 2, 2], output: [4, 4, 4, 4, 4, 4] },
];

describe("Given an array of integers, return a new array with each value doubled.", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(maps(input)).toStrictEqual(output);
    });
  });
});
