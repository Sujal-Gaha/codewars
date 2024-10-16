// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.
function findAverage(array) {
    if (!array.length)
        return 0;
    return array.reduce(function (acc, curr) { return acc + curr; }, 0) / array.length;
}
console.log(findAverage([1, 1, 1])); // 1
console.log(findAverage([1, 2, 3])); // 2
console.log(findAverage([1, 2, 3, 4])); // 2.5
console.log(findAverage([])); // 0
