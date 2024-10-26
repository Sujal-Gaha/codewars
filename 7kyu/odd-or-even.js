// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.
function oddOrEven(array) {
    return array.reduce(function (sum, current) { return sum + current; }, 0) % 2 === 0
        ? "even"
        : "odd";
}
console.log(oddOrEven([0]));
console.log(oddOrEven([1]));
console.log(oddOrEven([])); // "even"
console.log(oddOrEven([0, 1, 5])); // "even"
console.log(oddOrEven([0, 1, 3])); // "even"
console.log(oddOrEven([1023, 1, 2])); // "even"
console.log(oddOrEven([0, -1, -5])); // "even"
console.log(oddOrEven([0, -1, -3])); // "even"
console.log(oddOrEven([-1023, 1, -2])); // "even"
console.log(oddOrEven([0, 1, 2])); // "odd"
console.log(oddOrEven([0, 1, 4])); // "odd"
console.log(oddOrEven([1023, 1, 3])); // "odd"
console.log(oddOrEven([0, -1, 2])); // "odd"
console.log(oddOrEven([0, 1, -4])); // "odd"
console.log(oddOrEven([-1023, -1, 3])); // "odd"
