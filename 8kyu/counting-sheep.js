// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
// Hint: Don't forget to check for bad values like null/undefined
function countSheeps(sheep) {
    var count = 0;
    for (var i = 0; i < sheep.length; i++) {
        if (sheep[i]) {
            count++;
        }
    }
    return count;
}
console.log(countSheeps([])); // 0
console.log(countSheeps([undefined])); // 0
console.log(countSheeps([null])); // 0
console.log(countSheeps([false])); // 0
console.log(countSheeps([undefined, null, false, true])); // 1
console.log(countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
])); // 17