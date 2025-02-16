import { validatePIN } from "../solution/regex-validate-pin-code";

type TestCase = { input: string; output: boolean };

const testCases: TestCase[] = [
  { input: "1", output: false },
  { input: "12", output: false },
  { input: "123", output: false },
  { input: "1234", output: true },
  { input: "a234", output: false },
];

describe("validatePIN", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(validatePIN(input)).toStrictEqual(output);
    });
  });
});
