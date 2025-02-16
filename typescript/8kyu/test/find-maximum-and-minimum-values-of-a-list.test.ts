import { max, min } from "../solution/find-maximum-and-minimum-values-of-a-list";

type TestCaseMax = { input: number[]; output: number };

type TestCaseMin = { input: number[]; output: number };

const testCasesMax: TestCaseMax[] = [
  { input: [4, 6, 2, 1, 9, 63, -134, 566], output: 566 },
  { input: [5], output: 5 },
  { input: [-52, 56, 30, 29, -54, 0, -110], output: 56 },
  { input: [42, 54, 65, 87, 0], output: 87 },
  { input: [5, 6], output: 6 },
  { input: [2, 20, 6, 19, 5], output: 20 },
  { input: [2, 20, 6, 2, 5], output: 20 },
  { input: [], output: 0 },
  { input: [1, 2, 3], output: 3 },
  { input: [-1, -2, -3], output: -1 },
];

const testCasesMin: TestCaseMin[] = [
  { input: [4, 6, 2, 1, 9, 63, -134, 566], output: -134 },
  { input: [5], output: 5 },
  { input: [-52, 56, 30, 29, -54, 0, -110], output: -110 },
  { input: [42, 54, 65, 87, 0], output: 0 },
  { input: [5, 6], output: 5 },
  { input: [2, 20, 6, 19, 5], output: 2 },
  { input: [2, 20, 6, 2, 5], output: 2 },
  { input: [], output: 0 },
  { input: [1, 2, 3], output: 1 },
  { input: [-1, -2, -3], output: -3 },
];

describe("Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.", () => {
  testCasesMax.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(max(input)).toStrictEqual(output);
    });
  });

  testCasesMin.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(min(input)).toStrictEqual(output);
    });
  });
});
