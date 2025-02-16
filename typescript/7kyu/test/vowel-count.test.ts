import { getCount } from "../solution/vowel-count";

type TestCase = { input: string; output: number };

const testCases: TestCase[] = [
  { input: "abracadabra", output: 5 },
  { input: "aeiou", output: 5 },
  { input: "abcdefghijklmnopqrstuvwxyz", output: 5 },
  { input: "bcdfghjklmnpqrstvwxyz", output: 0 },
  { input: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", output: 10 },
  { input: "1234567890", output: 0 },
];

describe("getCount", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(getCount(input)).toStrictEqual(output);
    });
  });
});
