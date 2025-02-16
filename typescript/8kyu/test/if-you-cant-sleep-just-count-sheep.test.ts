import { countSheep } from "../solution/if-you-cant-sleep-just-count-sheep";

type TestCase = { input: number; output: string };

const testCases: TestCase[] = [
  { input: 1, output: "1 sheep..." },
  { input: 2, output: "1 sheep...2 sheep..." },
  { input: 3, output: "1 sheep...2 sheep...3 sheep..." },
  { input: 4, output: "1 sheep...2 sheep...3 sheep...4 sheep..." },
  { input: 5, output: "1 sheep...2 sheep...3 sheep...4 sheep...5 sheep..." },
  { input: -1, output: "" },
  { input: -2, output: "" },
  { input: -3, output: "" },
  { input: -4, output: "" },
  { input: -5, output: "" },
];

describe('Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.', () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(countSheep(input)).toStrictEqual(output);
    });
  });
});
