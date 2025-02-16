import { toCamelCase } from "../solution/convert-string-to-camel-case";

type TestCase = { input: string; output: string };

const testCases: TestCase[] = [
  { input: "", output: "" },
  { input: "the_stealth_warrior", output: "theStealthWarrior" },
  { input: "The-Stealth-Warrior", output: "TheStealthWarrior" },
  { input: "A-B-C", output: "ABC" },
];

describe("toCamelCase", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(toCamelCase(input)).toStrictEqual(output);
    });
  });
});
