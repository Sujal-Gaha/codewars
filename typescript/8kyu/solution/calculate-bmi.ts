// Write function bmi that calculates body mass index (bmi = weight / height^2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

type TResult = "Underweight" | "Normal" | "Overweight" | "Obese";

export function bmi(weight: number, height: number): TResult {
  if (weight <= 0 || height <= 0) return "Underweight";

  const bmi = weight / Math.pow(height, 2);
  return bmi <= 18.5 ? "Underweight" : bmi <= 25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
}
