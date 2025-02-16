import { filter_list } from "../solution/list-filtering";

type TestCase = { input: (string | number)[]; output: number[] };

const testCases: TestCase[] = [
  { input: [1, 2, "a", "b"], output: [1, 2] },
  { input: [1, "a", "b", 0, 15], output: [1, 0, 15] },
  { input: [1, 2, "aasf", "1", "123", 123], output: [1, 2, 123] },
];

describe("filter_list", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(filter_list(input)).toStrictEqual(output);
    });
  });
});
