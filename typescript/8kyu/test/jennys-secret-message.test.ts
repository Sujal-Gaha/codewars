import { greet } from "../solution/jennys-secret-message";

type TestCase = { input: string; output: string };

const testCases: TestCase[] = [
  { input: "Jim", output: "Hello, Jim!" },
  { input: "Jane", output: "Hello, Jane!" },
  { input: "Simon", output: "Hello, Simon!" },
  { input: "Johnny", output: "Hello, my love!" },
  { input: "John", output: "Hello, John!" },
  { input: "July", output: "Hello, July!" },
  { input: "Johan", output: "Hello, Johan!" },
  { input: "Doe", output: "Hello, Doe!" },
  { input: "Ethan", output: "Hello, Ethan!" },
  { input: "Ram", output: "Hello, Ram!" },
];

describe("Create a function that gives a personalized greeting. This function takes two parameters: name and owner.", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(greet(input)).toStrictEqual(output);
    });
  });
});
