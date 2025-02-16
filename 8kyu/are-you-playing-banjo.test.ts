import { areYouPlayingBanjo } from "./are-you-playing-banjo";

type TTest = { input: string; output: string };

const tests: TTest[] = [
  { input: "Adam", output: "Adam does not play banjo" },
  { input: "Paul", output: "Paul does not play banjo" },
  { input: "Ringo", output: "Ringo plays banjo" },
  { input: "bravo", output: "bravo does not play banjo" },
  { input: "rolf", output: "rolf plays banjo" },
];

tests.map(({ input, output }) => {
  test(`Input: ${input}`, () => {
    expect(areYouPlayingBanjo(input)).toBe(output);
  });
});
