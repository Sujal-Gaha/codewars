import { toJadenCase } from "../solution/jaden-casing-strings";

type TestCase = { input: string; output: string };

const testCases: TestCase[] = [
  {
    input: "How can mirrors be real if our eyes aren't real",
    output: "How Can Mirrors Be Real If Our Eyes Aren't Real",
  },
];

describe("toJadenCase", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(toJadenCase(input)).toStrictEqual(output);
    });
  });
});
