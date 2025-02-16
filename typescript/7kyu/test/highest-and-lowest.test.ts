import { highAndLow } from "../solution/highest-and-lowest";

type TestCase = { input: string; output: string };

const testCases: TestCase[] = [
  { input: "1 2 3", output: "3 1" },
  { input: "8 3 -5 42 -1 0 0 -9 4 7 4 -4", output: "42 -9" },
];

describe("highAndLow", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(highAndLow(input)).toStrictEqual(output);
    });
  });
});
