import { stringToArray } from "../solution/convert-a-string-to-an-array";

type TestCase = { input: string; output: string[] };

const testCases: TestCase[] = [
  { input: "Robin Singh", output: ["Robin", "Singh"] },
  { input: "I love arrays they are my favorite", output: ["I", "love", "arrays", "they", "are", "my", "favorite"] },
  { input: "", output: [] },
  { input: "abc", output: ["abc"] },
  { input: "a b c", output: ["a", "b", "c"] },
  { input: "a b c d", output: ["a", "b", "c", "d"] },
  { input: "a b c d e", output: ["a", "b", "c", "d", "e"] },
  { input: "a b c d e f", output: ["a", "b", "c", "d", "e", "f"] },
  { input: "a b c d e f g", output: ["a", "b", "c", "d", "e", "f", "g"] },
  { input: "a b c d e f g h", output: ["a", "b", "c", "d", "e", "f", "g", "h"] },
];

describe("We need a function that can transform a string into an array of words. What ways of achieving this do you know?", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(stringToArray(input)).toStrictEqual(output);
    });
  });
});
