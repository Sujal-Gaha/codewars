import { areaOrPerimeter } from "../solution/area-or-perimeter";

type TestCase = { input: { length: number; breadth: number }; output: number };

const testCases: TestCase[] = [
  { input: { length: 3, breadth: 3 }, output: 9 },
  { input: { length: 6, breadth: 10 }, output: 32 },
  { input: { length: 20, breadth: 20 }, output: 400 },
  { input: { length: 2, breadth: 9 }, output: 22 },
  { input: { length: 2, breadth: 3 }, output: 10 },
];

describe("areaOrPerimeter", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(areaOrPerimeter(input.length, input.breadth)).toStrictEqual(output);
    });
  });
});
