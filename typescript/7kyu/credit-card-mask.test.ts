import { maskify } from "./credit-card-mask";

type TTest = {
  input: string;
  output: string;
};

const tests: TTest[] = [
  { input: "4556364607935616", output: "############5616" },
  { input: "1", output: "1" },
  { input: "11111", output: "#1111" },
];

tests.map(({ input, output }) => {
  test(`Input: ${input}`, () => {
    expect(maskify(input)).toBe(output);
  });
});
