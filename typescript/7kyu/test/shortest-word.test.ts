import { findShort } from "../solution/shortest-word";

type TestCase = { input: string; output: number };

const testCases: TestCase[] = [
  { input: "bitcoin take over the world maybe who knows perhaps", output: 3 },
  { input: "turns out random test cases are easier than writing out basic ones", output: 3 },
  { input: "Let's travel abroad shall we", output: 2 },
];

describe("findShort", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(findShort(input)).toStrictEqual(output);
    });
  });
});
