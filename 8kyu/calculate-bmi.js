// Write function bmi that calculates body mass index (bmi = weight / height2).
function bmi(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    return bmi <= 18.5
        ? "Underweight"
        : bmi <= 25
            ? "Normal"
            : bmi <= 30
                ? "Overweight"
                : "Obese";
}
console.log(bmi(80, 1.8)); // "Normal"
console.log(bmi(60, 1.6)); // "Normal"
console.log(bmi(40, 1.6)); // "Underweight"
