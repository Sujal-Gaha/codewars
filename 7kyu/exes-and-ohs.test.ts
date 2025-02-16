import { XO } from "./exes-and-ohs";

type TTest = {
  input: string;
  output: boolean;
};

const tests: TTest[] = [
  { input: "xo", output: true },
  { input: "xxOo", output: true },
  { input: "xxxm", output: false },
  { input: "Oo", output: false },
  { input: "ooom", output: false },
];

tests.map(({ input, output }) => {
  test(`Input: ${input}`, () => {
    expect(XO(input)).toBe(output);
  });
});
