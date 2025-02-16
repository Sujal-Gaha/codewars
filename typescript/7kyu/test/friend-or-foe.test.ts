import { friend } from "../solution/friend-or-foe";

type TestCase = { input: string[]; output: string[] };

const testCases: TestCase[] = [
  { input: ["Ryan", "Kieran", "Mark"], output: ["Ryan", "Mark"] },
  { input: ["Ryan", "Jimmy", "123", "4", "Cool Man"], output: ["Ryan"] },
  { input: ["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"], output: ["Jimm", "Cari", "aret"] },
  { input: ["Love", "Your", "Face", "1"], output: ["Love", "Your", "Face"] },
];

describe("friendOrFoe", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(friend(input)).toStrictEqual(output);
    });
  });
});
