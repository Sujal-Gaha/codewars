import { betterThanAverage } from "../solution/how-good-are-you-really";

type TestCase = { input: { classPoints: number[]; yourPoints: number }; output: boolean };

const testCases: TestCase[] = [
  { input: { classPoints: [2, 3], yourPoints: 5 }, output: true },
  { input: { classPoints: [100, 40, 34, 57, 29, 72, 57, 88], yourPoints: 75 }, output: true },
  { input: { classPoints: [12, 23, 34, 45, 56, 67, 78, 89, 90], yourPoints: 9 }, output: false },
  { input: { classPoints: [41, 75, 72, 56, 80, 82, 81, 33], yourPoints: 50 }, output: false },
  { input: { classPoints: [29, 55, 74, 60, 11, 90, 67, 28], yourPoints: 21 }, output: false },
  { input: { classPoints: [30, 69, 68, 31, 60, 64, 33, 67], yourPoints: 39 }, output: false },
  { input: { classPoints: [70, 69, 68, 67, 66, 65, 64, 63], yourPoints: 70 }, output: true },
];

describe("How good are you really?", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(betterThanAverage(input.classPoints, input.yourPoints)).toStrictEqual(output);
    });
  });
});
