import { numberToString } from "../solution/convert-a-number-to-a-string";

type TestCase = { input: number; output: string };

const testCases: TestCase[] = [
  { input: 67, output: "67" },
  { input: -67, output: "-67" },
  { input: 0, output: "0" },
  { input: 1, output: "1" },
  { input: 9, output: "9" },
  { input: 10, output: "10" },
  { input: 11, output: "11" },
  { input: 12, output: "12" },
  { input: 13, output: "13" },
  { input: 14, output: "14" },
];

describe("We need a function that can transform a number (integer) into a string. What ways of achieving this do you know?", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(numberToString(input)).toStrictEqual(output);
    });
  });
});
