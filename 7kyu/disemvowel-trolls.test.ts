import { disemvowel } from "./disemvowel-trolls";

type TTest = {
  input: string;
  output: string;
};

const tests: TTest[] = [
  { input: "This website is for losers LOL!", output: "Ths wbst s fr lsrs LL!" },
  { input: "What are you, a communist?", output: "Wht r y,  cmmnst?" },
];

tests.map(({ input, output }) => {
  test(`Input: ${input}`, () => {
    expect(disemvowel(input)).toBe(output);
  });
});
