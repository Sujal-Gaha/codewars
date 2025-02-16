import { basicOp } from "../solution/basic-mathematical-operations";

type TestCase = { input: { operation: string; value1: number; value2: number }; output: number };

const testCases: TestCase[] = [
  { input: { operation: "+", value1: 4, value2: 7 }, output: 11 },
  { input: { operation: "-", value1: 15, value2: 18 }, output: -3 },
  { input: { operation: "*", value1: 5, value2: 5 }, output: 25 },
  { input: { operation: "/", value1: 49, value2: 7 }, output: 7 },
];

describe("Basic Mathematical Operations", () => {
  testCases.forEach((test) => {
    it(`Input: ${test.input.operation}, ${test.input.value1}, ${test.input.value2}`, () => {
      expect(basicOp(test.input.operation, test.input.value1, test.input.value2)).toStrictEqual(test.output);
    });
  });
});
