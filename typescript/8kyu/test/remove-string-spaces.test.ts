import { noSpace } from "../solution/remove-string-spaces";

type TestCase = { input: string; output: string };

const testCases: TestCase[] = [
  { input: "8 j 8   mBliB8g  imjB8B8  jl  B", output: "8j8mBliB8gimjB8B8jlB" },
  { input: "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd", output: "88Bifk8hB8BB8BBBB888chl8BhBfd" },
  { input: "8aaaaa dddd r     ", output: "8aaaaaddddr" },
  { input: "jf  jf", output: "jfjf" },
  { input: "", output: "" },
  { input: "8j aam", output: "8jaam" },
  { input: "8 j aam", output: "8jaam" },
  { input: "8 j aa m", output: "8jaam" },
  { input: "8 j a a m", output: "8jaam" },
  { input: "8 j a a m", output: "8jaam" },
];

describe("Remove String Spaces", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(noSpace(input)).toStrictEqual(output);
    });
  });
});
