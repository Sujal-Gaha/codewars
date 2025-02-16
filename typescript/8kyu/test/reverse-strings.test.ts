import { solution } from "../solution/reverse-strings";

type TestCase = { input: string; output: string };

const testCases: TestCase[] = [
  { input: "world", output: "dlrow" },
  { input: "hello", output: "olleh" },
  { input: "", output: "" },
  { input: "h", output: "h" },
  { input: "HeLlo", output: "olLeH" },
  { input: "12345", output: "54321" },
  { input: "1a2b3c4d5e", output: "e5d4c3b2a1" },
  { input: "strumf", output: "fmurts" },
  { input: "123", output: "321" },
  { input: "a", output: "a" },
];

describe("Reverse Strings", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(solution(input)).toStrictEqual(output);
    });
  });
});
