import { boolToWord } from "../solution/convert-boolean-value-to-string";

type TestCase = { input: boolean; output: "Yes" | "No" };

const testCases: TestCase[] = [
  { input: true, output: "Yes" },
  { input: false, output: "No" },
  { input: true && true, output: "Yes" },
  { input: false && false, output: "No" },
  { input: true && false, output: "No" },
  { input: false && true, output: "No" },
  { input: true || true, output: "Yes" },
  { input: false || false, output: "No" },
  { input: true || false, output: "Yes" },
  { input: false || true, output: "Yes" },
];

describe("Implement a function which convert the given boolean value into its string representation. Note: Only valid inputs will be given.", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(boolToWord(input)).toStrictEqual(output);
    });
  });
});
