import { isIsogram } from "../solution/isograms";

type TestCase = { input: string; output: boolean };

const testCases: TestCase[] = [
  { input: "Dermatoglyphics", output: true },
  { input: "isogram", output: true },
  { input: "aba", output: false },
  { input: "moOse", output: false },
  { input: "isIsogram", output: false },
  { input: "", output: true },
];

describe("isIsogram", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(isIsogram(input)).toStrictEqual(output);
    });
  });
});
