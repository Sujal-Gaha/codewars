import { oddOrEven } from "../solution/odd-or-even";

type TestCase = { input: number[]; output: "odd" | "even" };

const testCases: TestCase[] = [
  { input: [0], output: "even" },
  { input: [1], output: "odd" },
  { input: [], output: "even" },
  { input: [0, 1, 5], output: "even" },
  { input: [0, 1, 3], output: "even" },
  { input: [1023, 1, 2], output: "even" },
  { input: [0, -1, -5], output: "even" },
  { input: [0, -1, -3], output: "even" },
  { input: [-1023, 1, -2], output: "even" },
  { input: [0, 1, 2], output: "odd" },
  { input: [0, 1, 4], output: "odd" },
  { input: [1023, 1, 3], output: "odd" },
  { input: [0, -1, 2], output: "odd" },
  { input: [0, 1, -4], output: "odd" },
  { input: [-1023, -1, 3], output: "odd" },
];

describe("oddOrEven", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(oddOrEven(input)).toStrictEqual(output);
    });
  });
});
