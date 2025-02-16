// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n: number): number[] {
  let arrayOfNumber = [];
  const arrayOfString = n.toString().split("").reverse();
  for (let i = 0; i < arrayOfString.length; i++) {
    arrayOfNumber.push(parseInt(arrayOfString[i]));
  }
  return arrayOfNumber;
}

console.log(digitize(35231)); // [1,3,2,5,3]
console.log(digitize(0)); // [0]
