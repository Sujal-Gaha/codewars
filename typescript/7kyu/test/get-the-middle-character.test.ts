import { getMiddle } from "../solution/get-the-middle-character";

type TestCase = { input: string; output: string };

const testCases: TestCase[] = [
  { input: "test", output: "es" },
  { input: "testing", output: "t" },
  { input: "middle", output: "dd" },
  { input: "A", output: "A" },
];

describe("getMiddle", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(getMiddle(input)).toStrictEqual(output);
    });
  });
});
