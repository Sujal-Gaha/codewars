import { dnaStrand } from "../solution/complementary-dna";

type TestCase = { input: string; output: string };

const testCases: TestCase[] = [
  { input: "AAAA", output: "TTTT" },
  { input: "ATTGC", output: "TAACG" },
  { input: "GTAT", output: "CATA" },
];

describe("dnaStrand", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(dnaStrand(input)).toStrictEqual(output);
    });
  });
});
