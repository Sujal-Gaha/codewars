import { bmi } from "../solution/calculate-bmi";

type TInput = { weight: number; height: number };

type TOutput = "Underweight" | "Normal" | "Overweight" | "Obese";

type TestCase = { input: TInput; output: TOutput };

const testCases: TestCase[] = [
  { input: { weight: 80, height: 1.8 }, output: "Normal" },
  { input: { weight: 60, height: 1.6 }, output: "Normal" },
  { input: { weight: 40, height: 1.6 }, output: "Underweight" },
  { input: { weight: 100, height: 1.6 }, output: "Obese" },
  { input: { weight: 200, height: 1.6 }, output: "Obese" },
  { input: { weight: 0, height: 1.6 }, output: "Underweight" },
  { input: { weight: 0, height: 0 }, output: "Underweight" },
  { input: { weight: 0, height: -1.6 }, output: "Underweight" },
  { input: { weight: -1, height: 0 }, output: "Underweight" },
  { input: { weight: -1, height: -1.6 }, output: "Underweight" },
];

describe("Write function bmi that calculates body mass index (bmi = weight / height^2).", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`Input: ${input.weight}, ${input.height}`, () => {
      expect(bmi(input.weight, input.height)).toStrictEqual(output);
    });
  });
});
