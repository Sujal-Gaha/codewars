import { dnaStrand } from "./complementary-dna";

type TTest = {
  input: string;
  output: string;
};

const tests: TTest[] = [
  { input: "AAAA", output: "TTTT" },
  { input: "ATTGC", output: "TAACG" },
  { input: "GTAT", output: "CATA" },
];

tests.map(({ input, output }) => {
  test(`Input: ${input}`, () => {
    expect(dnaStrand(input)).toBe(output);
  });
});
