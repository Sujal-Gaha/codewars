// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
function isIsogram(str) {
    var lowerCaseStr = str.toLowerCase();
    var arr = [];
    for (var i = 0; i < lowerCaseStr.length; i++) {
        if (arr.includes(lowerCaseStr[i])) {
            return false;
        }
        arr.push(lowerCaseStr[i]);
    }
    return true;
}
console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("isogram")); // true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false
console.log(isIsogram("isIsogram")); // false
console.log(isIsogram("")); // true
