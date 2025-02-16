import { descendingOrder } from "../solution/descending-order";

type TestCase = { input: number; output: number };

const testCases: TestCase[] = [
  { input: 145263, output: 654321 },
  { input: 123456789, output: 987654321 },
];

describe("descendingOrder", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(descendingOrder(input)).toStrictEqual(output);
    });
  });
});
