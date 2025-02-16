import { rps } from "../solution/rock-paper-scissors";

type TInput = "rock" | "paper" | "scissors";

type TOutput = "Player 1 won!" | "Player 2 won!" | "Draw!";

type TestCase = { input: { p1: TInput; p2: TInput }; output: TOutput };

const testCases: TestCase[] = [
  { input: { p1: "rock", p2: "scissors" }, output: "Player 1 won!" },
  { input: { p1: "scissors", p2: "paper" }, output: "Player 1 won!" },
  { input: { p1: "paper", p2: "rock" }, output: "Player 1 won!" },
  { input: { p1: "scissors", p2: "rock" }, output: "Player 2 won!" },
  { input: { p1: "paper", p2: "scissors" }, output: "Player 2 won!" },
  { input: { p1: "rock", p2: "paper" }, output: "Player 2 won!" },
  { input: { p1: "rock", p2: "rock" }, output: "Draw!" },
  { input: { p1: "scissors", p2: "scissors" }, output: "Draw!" },
  { input: { p1: "paper", p2: "paper" }, output: "Draw!" },
];

describe("Rock Paper Scissors", () => {
  testCases.forEach(({ input, output }, index) => {
    it(`${index + 1}. Input: ${input}`, () => {
      expect(rps(input.p1, input.p2)).toStrictEqual(output);
    });
  });
});
