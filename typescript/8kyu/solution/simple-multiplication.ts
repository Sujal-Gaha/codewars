// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

export function simpleMultiplication(number: number): number {
  return number % 2 == 0 ? number * 8 : number * 9;
}
