// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

function betterThanAverage(classPoints: number[], yourPoints: number): boolean {
  let total = 0,
    average = 0;

  for (let i = 0; i < classPoints.length; i++) {
    total += classPoints[i];
    average = total / classPoints.length;
  }

  return yourPoints > average;
}

console.log(betterThanAverage([2, 3], 5)); // true
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); // true
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)); // false
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)); // false
console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)); // false
