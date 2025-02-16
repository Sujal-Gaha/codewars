import { smash } from "../solution/sentence-smash";

type TestCase = { input: string[]; output: string };

const testCases: TestCase[] = [
  { input: ["hello", "world"], output: "hello world" },
  { input: ["hello", "amazing", "world"], output: "hello amazing world" },
  { input: ["this", "is", "a", "really", "long", "sentence"], output: "this is a really long sentence" },
];

describe("Sentence Smash", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(smash(input)).toStrictEqual(output);
    });
  });
});
