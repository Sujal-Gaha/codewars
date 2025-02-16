import { opposite } from "../solution/opposite-number";

type TestCase = { input: number; output: number };

const testCases: TestCase[] = [
  { input: 1, output: -1 },
  { input: 0, output: 0 },
  { input: 4.25, output: -4.25 },
  { input: -5, output: 5 },
  { input: -66, output: 66 },
  { input: -0.75, output: 0.75 },
  { input: 5, output: -5 },
  { input: 420, output: -420 },
  { input: -69, output: 69 },
  { input: 10, output: -10 },
];

describe("Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(opposite(input)).toStrictEqual(output);
    });
  });
});
