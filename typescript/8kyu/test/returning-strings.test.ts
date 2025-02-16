import { greet } from "../solution/returning-strings";

type TestCase = { input: string; output: string };

const testCases: TestCase[] = [
  { input: "Ryan", output: "Hello, Ryan how are you doing today?" },
  { input: "Shingles", output: "Hello, Shingles how are you doing today?" },
  { input: "Sally", output: "Hello, Sally how are you doing today?" },
  { input: "Bob", output: "Hello, Bob how are you doing today?" },
  { input: "Joe", output: "Hello, Joe how are you doing today?" },
  { input: "Jane", output: "Hello, Jane how are you doing today?" },
  { input: "John", output: "Hello, John how are you doing today?" },
  { input: "Jill", output: "Hello, Jill how are you doing today?" },
  { input: "April", output: "Hello, April how are you doing today?" },
  { input: "July", output: "Hello, July how are you doing today?" },
];

describe("Create a function that gives a personalized greeting. This function takes two parameters: name and owner.", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(greet(input)).toStrictEqual(output);
    });
  });
});
