import { descendingOrder } from "./descending-order";

type TTest = {
  input: number;
  output: number;
};

const tests: TTest[] = [
  { input: 145263, output: 654321 },
  { input: 123456789, output: 987654321 },
];

tests.map(({ input, output }) => {
  test(`Input: ${input}`, () => {
    expect(descendingOrder(input)).toBe(output);
  });
});
