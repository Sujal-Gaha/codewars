import { getGrade } from "../solution/grasshopper-grade-book";

type TestCase = { input: number[]; output: string };

const testCases: TestCase[] = [
  { input: [95, 90, 93], output: "A" },
  { input: [100, 85, 96], output: "A" },
  { input: [92, 93, 94], output: "A" },
  { input: [70, 70, 100], output: "B" },
  { input: [82, 85, 87], output: "B" },
  { input: [84, 79, 85], output: "B" },
  { input: [89, 89, 90], output: "B" },
  { input: [70, 70, 70], output: "C" },
  { input: [75, 70, 79], output: "C" },
  { input: [60, 82, 76], output: "C" },
  { input: [65, 70, 59], output: "D" },
  { input: [66, 62, 68], output: "D" },
  { input: [58, 62, 70], output: "D" },
  { input: [44, 55, 52], output: "F" },
  { input: [48, 55, 52], output: "F" },
  { input: [58, 59, 60], output: "F" },
];

describe("Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(getGrade(input[0], input[1], input[2])).toStrictEqual(output);
    });
  });
});
