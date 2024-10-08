// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
    var sum = 0;
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}
var positiveSumWithNoVariable = function (arr) {
    return arr.reduce(function (total, currentValue) {
        return currentValue > 0 ? (total += currentValue) : total;
    }, 0);
};
console.log(positiveSum([1, 2, 3, 4, 5])); // 15
console.log(positiveSum([1, -2, 3, 4, 5])); // 13
console.log(positiveSum([])); // 0
console.log(positiveSum([-1, -2, -3, -4, -5])); // 0
console.log(positiveSum([-1, 2, 3, 4, -5])); // 9
console.log(positiveSumWithNoVariable([1, 2, 3, 4, 5])); // 15
console.log(positiveSumWithNoVariable([1, -2, 3, 4, 5])); // 13
console.log(positiveSumWithNoVariable([])); // 0
console.log(positiveSumWithNoVariable([-1, -2, -3, -4, -5])); // 0
console.log(positiveSumWithNoVariable([-1, 2, 3, 4, -5])); // 9
