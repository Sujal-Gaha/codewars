import { squareDigits } from "../solution/square-every-digit";

type TestCase = { input: number; output: number };

const testCases: TestCase[] = [
  { input: 3212, output: 9414 },
  { input: 2112, output: 4114 },
  { input: 0, output: 0 },
];

describe("squareDigits", () => {
  testCases.forEach((test) => {
    it(`should return ${test.output} when input is ${test.input}`, () => {
      expect(squareDigits(test.input)).toStrictEqual(test.output);
    });
  });
});
