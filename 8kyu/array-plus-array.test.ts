import { arrayPlusArray } from "./array-plus-array";

type TTest = { input: { arrayOne: number[]; arrayTwo: number[] }; output: number };

const tests: TTest[] = [
  { input: { arrayOne: [1, 2, 3], arrayTwo: [4, 5, 6] }, output: 21 },
  { input: { arrayOne: [-1, -2, -3], arrayTwo: [-4, -5, -6] }, output: -21 },
  { input: { arrayOne: [0, 0, 0], arrayTwo: [4, 5, 6] }, output: 15 },
  { input: { arrayOne: [100, 200, 300], arrayTwo: [400, 500, 600] }, output: 2100 },
];

tests.map(({ input, output }) => {
  test(`Input: ${input}`, () => {
    expect(arrayPlusArray(input.arrayOne, input.arrayTwo)).toBe(output);
  });
});
