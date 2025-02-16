import { stringToNumber } from "../solution/convert-a-string-to-a-number";

type TestCase = { input: string; output: number };

const testCases: TestCase[] = [
  { input: "1234", output: 1234 },
  { input: "605", output: 605 },
  { input: "1405", output: 1405 },
  { input: "-7", output: -7 },
  { input: "0", output: 0 },
  { input: "", output: 0 },
  { input: "1", output: 1 },
  { input: "2", output: 2 },
  { input: "3", output: 3 },
  { input: "4", output: 4 },
];

describe("We need a function that can transform a string into a number. What ways of achieving this do you know?", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(stringToNumber(input)).toStrictEqual(output);
    });
  });
});
