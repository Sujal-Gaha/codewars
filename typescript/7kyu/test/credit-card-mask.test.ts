import { maskify } from "../solution/credit-card-mask";

type TestCase = { input: string; output: string };

const testCases: TestCase[] = [
  { input: "4556364607935616", output: "############5616" },
  { input: "1", output: "1" },
  { input: "11111", output: "#1111" },
];

describe("maskify", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(maskify(input)).toStrictEqual(output);
    });
  });
});
