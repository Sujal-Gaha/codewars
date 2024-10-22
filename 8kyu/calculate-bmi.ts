// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

type TResult = "Underweight" | "Normal" | "Overweight" | "Obese";

function bmi(weight: number, height: number): TResult {
  const bmi = weight / Math.pow(height, 2);
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
