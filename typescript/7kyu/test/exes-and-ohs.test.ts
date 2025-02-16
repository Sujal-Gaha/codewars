import { XO } from "../solution/exes-and-ohs";

type TestCase = { input: string; output: boolean };

const testCases: TestCase[] = [
  { input: "xo", output: true },
  { input: "xxOo", output: true },
  { input: "xxxm", output: false },
  { input: "Oo", output: false },
  { input: "ooom", output: false },
];

describe("XO", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(XO(input)).toStrictEqual(output);
    });
  });
});
