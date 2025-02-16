import { evenOrOdd } from "../solution/even-or-odd";

type TestCase = { input: number; output: string };

const testCases: TestCase[] = [
  { input: 2, output: "Even" },
  { input: 7, output: "Odd" },
  { input: -42, output: "Even" },
  { input: -7, output: "Odd" },
  { input: 0, output: "Even" },
  { input: 1, output: "Odd" },
  { input: -1, output: "Odd" },
  { input: 100, output: "Even" },
  { input: -100, output: "Even" },
  { input: 1000, output: "Even" },
];

describe('Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.', () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(evenOrOdd(input)).toStrictEqual(output);
    });
  });
});
