import { digitize } from "../solution/convert-number-to-reversed-array-of-digits";

type TestCase = { input: number; output: number[] };

const testCases: TestCase[] = [
  { input: 35231, output: [1, 3, 2, 5, 3] },
  { input: 0, output: [0] },
  { input: 123456, output: [6, 5, 4, 3, 2, 1] },
  { input: 123456789, output: [9, 8, 7, 6, 5, 4, 3, 2, 1] },
  { input: 1234567890, output: [0, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
  { input: 123456789012345, output: [5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
  { input: 42512345678, output: [8, 7, 6, 5, 4, 3, 2, 1, 5, 2, 4] },
  { input: 52523416, output: [6, 1, 4, 3, 2, 5, 2, 5] },
  { input: 11223344, output: [4, 4, 3, 3, 2, 2, 1, 1] },
  { input: 678909876, output: [6, 7, 8, 9, 0, 9, 8, 7, 6] },
];

describe("Convert number to reversed array of digits. Given a random non-negative number, you have to return the digits of this number within an array in reverse order.", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(digitize(input)).toStrictEqual(output);
    });
  });
});
