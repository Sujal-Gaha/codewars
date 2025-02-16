import { countSheeps } from "../solution/counting-sheep";

type TestCase = { input: any[]; output: number };

const testCases: TestCase[] = [
  { input: [], output: 0 },
  { input: [undefined], output: 0 },
  { input: [null], output: 0 },
  { input: [false], output: 0 },
  { input: [undefined, null, false, true], output: 1 },
  { input: [true, true, true, true], output: 4 },
  { input: [false, false, false, false], output: 0 },
  { input: [true, false, true, false], output: 2 },
  { input: [false, true, false, true], output: 2 },
  { input: [true, false, true, false, true], output: 3 },
];

describe("Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(countSheeps(input)).toStrictEqual(output);
    });
  });
});
