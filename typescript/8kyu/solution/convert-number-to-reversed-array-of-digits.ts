// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

export function digitize(n: number): number[] {
  let arrayOfNumber = [];
  const arrayOfString = n.toString().split("").reverse();
  for (let i = 0; i < arrayOfString.length; i++) {
    arrayOfNumber.push(+arrayOfString[i]);
  }
  return arrayOfNumber;
}
