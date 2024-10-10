// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
function validatePIN(pin) {
    if (pin.length === 4 || pin.length === 6) {
        return pin.split("").every(function (char) { return char >= "0" && char <= "9"; });
    }
    else {
        return false;
    }
}
console.log(validatePIN("1")); // false
console.log(validatePIN("12")); // false
console.log(validatePIN("123")); // false
console.log(validatePIN("1234")); // true
console.log(validatePIN("a234")); // false
