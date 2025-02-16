import { greet } from "../solution/grasshopper-personalized-message";

type TestCase = { input: { name: string; owner: string }; output: string };

const testCases: TestCase[] = [
  { input: { name: "Daniel", owner: "Daniel" }, output: "Hello boss" },
  { input: { name: "Greg", owner: "Daniel" }, output: "Hello guest" },
  { input: { name: "Greg", owner: "Greg" }, output: "Hello boss" },
  { input: { name: "Daniel", owner: "Greg" }, output: "Hello guest" },
  { input: { name: "Xavier", owner: "Xavier" }, output: "Hello boss" },
  { input: { name: "Xavier", owner: "Greg" }, output: "Hello guest" },
  { input: { name: "Xavier", owner: "Daniel" }, output: "Hello guest" },
  { input: { name: "Daniel", owner: "Xavier" }, output: "Hello guest" },
  { input: { name: "Greg", owner: "Xavier" }, output: "Hello guest" },
  { input: { name: "owner", owner: "name" }, output: "Hello guest" },
];

describe("Create a function that gives a personalized greeting. This function takes two parameters: name and owner.", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(greet(input.name, input.owner)).toStrictEqual(output);
    });
  });
});
