import { removeChar } from "../solution/remove-first-and-last-character";

type TestCase = { input: string; output: string };

const testCases: TestCase[] = [
  { input: "eloquent", output: "loquen" },
  { input: "country", output: "ountr" },
  { input: "person", output: "erso" },
  { input: "place", output: "lac" },
  { input: "ooopsss", output: "oopss" },
  { input: "", output: "" },
  { input: "consistent", output: "onsisten" },
  { input: "insanity", output: "nsanit" },
  { input: "inventions", output: "nvention" },
  { input: "thousand", output: "housan" },
];

describe("Remove First and Last Character", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(removeChar(input)).toStrictEqual(output);
    });
  });
});
