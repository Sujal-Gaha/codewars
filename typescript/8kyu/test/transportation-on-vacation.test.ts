import { rentalCarCost } from "../solution/transportation-on-vacation";

type TestCase = { input: number; output: number };

const testCases: TestCase[] = [
  { input: 1, output: 40 },
  { input: 2, output: 80 },
  { input: 3, output: 100 },
  { input: 4, output: 140 },
  { input: 5, output: 180 },
  { input: 6, output: 220 },
  { input: 7, output: 230 },
  { input: 8, output: 270 },
  { input: 9, output: 310 },
  { input: 10, output: 350 },
];

describe("Transportation on vacation", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(rentalCarCost(input)).toStrictEqual(output);
    });
  });
});
