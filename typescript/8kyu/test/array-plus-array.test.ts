import { arrayPlusArray } from "../solution/array-plus-array";

type TestCase = { input: { arrayOne: number[]; arrayTwo: number[] }; output: number };

const testCases: TestCase[] = [
  { input: { arrayOne: [1, 2, 3], arrayTwo: [4, 5, 6] }, output: 21 },
  { input: { arrayOne: [-1, -2, -3], arrayTwo: [-4, -5, -6] }, output: -21 },
  { input: { arrayOne: [0, 0, 0], arrayTwo: [4, 5, 6] }, output: 15 },
  { input: { arrayOne: [100, 200, 300], arrayTwo: [400, 500, 600] }, output: 2100 },
  { input: { arrayOne: [], arrayTwo: [] }, output: 0 },
];

describe("arrayPlusArray", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(arrayPlusArray(input.arrayOne, input.arrayTwo)).toStrictEqual(output);
    });
  });
});
