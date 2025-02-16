import { disemvowel } from "../solution/disemvowel-trolls";

type TestCase = { input: string; output: string };

const testCases: TestCase[] = [
  { input: "This website is for losers LOL!", output: "Ths wbst s fr lsrs LL!" },
  { input: "What are you, a communist?", output: "Wht r y,  cmmnst?" },
];

describe("disemvowel", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(disemvowel(input)).toStrictEqual(output);
    });
  });
});
