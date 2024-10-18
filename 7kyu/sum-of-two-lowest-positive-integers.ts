// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers: number[]): number {
  let lowest = Math.max(...numbers);
  let second_lowest = Math.max(...numbers);

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < lowest) {
      second_lowest = lowest;
      lowest = numbers[i];
    } else if (numbers[i] < second_lowest && numbers[i] !== lowest) {
      second_lowest = numbers[i];
    }
  }

  return lowest + second_lowest;
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // 13
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); // 6
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])); // 10
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])); // 24
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])); // 16
