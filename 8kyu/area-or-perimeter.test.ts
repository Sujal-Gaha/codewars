import { areaOrPerimeter } from "./area-or-perimeter";

type TTest = { input: { length: number; breadth: number }; output: number };

const tests: TTest[] = [
  { input: { length: 3, breadth: 3 }, output: 9 },
  { input: { length: 6, breadth: 10 }, output: 32 },
];

tests.map(({ input, output }) => {
  test(`Input: ${input}`, () => {
    expect(areaOrPerimeter(input.length, input.breadth)).toBe(output);
  });
});
