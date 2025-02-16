// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(n: number): string {
  return n % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(7)); // Odd
console.log(evenOrOdd(-42)); // Even
console.log(evenOrOdd(-7)); // Odd
console.log(evenOrOdd(0)); // Even
