import { reverseWords } from "../solution/reversed-words";

type TestCase = { input: string; output: string };

const testCases: TestCase[] = [
  { input: "hello world!", output: "world! hello" },
  { input: "yoda doesn't speak like this", output: "this like speak doesn't yoda" },
  { input: "foobar", output: "foobar" },
  { input: "kata editor", output: "editor kata" },
  { input: "row row row your boat", output: "boat your row row row" },
  { input: "", output: "" },
];

describe("Reversed Words", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(reverseWords(input)).toStrictEqual(output);
    });
  });
});
