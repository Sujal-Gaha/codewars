import { areYouPlayingBanjo } from "../solution/are-you-playing-banjo";

type TestCase = { input: string; output: string };

const testCases: TestCase[] = [
  { input: "Adam", output: "Adam does not play banjo" },
  { input: "Paul", output: "Paul does not play banjo" },
  { input: "Ringo", output: "Ringo plays banjo" },
  { input: "bravo", output: "bravo does not play banjo" },
  { input: "rolf", output: "rolf plays banjo" },
];

describe("areYouPlayingBanjo", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(areYouPlayingBanjo(input)).toStrictEqual(output);
    });
  });
});
