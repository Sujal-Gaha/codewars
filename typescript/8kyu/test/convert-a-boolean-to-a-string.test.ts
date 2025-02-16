import { booleanToString } from "../solution/convert-a-boolean-to-a-string";

type TestCase = { input: boolean; output: string };

const testCases: TestCase[] = [
  { input: true, output: "true" },
  { input: false, output: "false" },
  { input: true && true, output: "true" },
  { input: false && false, output: "false" },
  { input: true && false, output: "false" },
  { input: false && true, output: "false" },
  { input: true || true, output: "true" },
  { input: false || false, output: "false" },
  { input: true || false, output: "true" },
  { input: false || true, output: "true" },
];

describe("Implement a function which convert the given boolean value into its string representation. Note: Only valid inputs will be given.", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(booleanToString(input)).toStrictEqual(output);
    });
  });
});
