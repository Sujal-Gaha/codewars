import { lovefunc } from "../solution/opposites-attract";

type TestCase = { input: { flower1: number; flower2: number }; output: boolean };

const testCases: TestCase[] = [
  { input: { flower1: 1, flower2: 4 }, output: true },
  { input: { flower1: 2, flower2: 2 }, output: false },
  { input: { flower1: 0, flower2: 1 }, output: true },
  { input: { flower1: 0, flower2: 0 }, output: false },
  { input: { flower1: 0, flower2: 1 }, output: true },
  { input: { flower1: 0, flower2: 2 }, output: false },
  { input: { flower1: 0, flower2: 3 }, output: true },
  { input: { flower1: 0, flower2: 4 }, output: false },
  { input: { flower1: 0, flower2: 5 }, output: true },
  { input: { flower1: 0, flower2: 6 }, output: false },
];

describe("Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input.flower1}, ${input.flower2}`, () => {
      expect(lovefunc(input.flower1, input.flower2)).toStrictEqual(output);
    });
  });
});
