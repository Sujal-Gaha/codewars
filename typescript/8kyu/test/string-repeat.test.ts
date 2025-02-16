import { repeatStr } from "../solution/string-repeat";

type TestCase = { input: { n: number; s: string }; output: string };

const testCases: TestCase[] = [
  { input: { n: 3, s: "*" }, output: "***" },
  { input: { n: 5, s: "#" }, output: "#####" },
  { input: { n: 2, s: "Hello" }, output: "HelloHello" },
];

describe("String repeat", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input.n}, ${input.s}`, () => {
      expect(repeatStr(input.n, input.s)).toStrictEqual(output);
    });
  });
});
