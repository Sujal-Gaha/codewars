import { toCamelCase } from "./convert-string-to-camel-case";

type TTest = { input: string; output: string };

const tests: TTest[] = [
  { input: "", output: "" },
  { input: "the_stealth_warrior", output: "theStealthWarrior" },
  { input: "The-Stealth-Warrior", output: "TheStealthWarrior" },
  { input: "A-B-C", output: "ABC" },
];

tests.map(({ input, output }) => {
  test(`Input: ${input}`, () => {
    expect(toCamelCase(input)).toBe(output);
  });
});
